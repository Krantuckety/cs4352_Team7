import { useState } from "react";
import { Account, FixStep } from "../types";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";

interface FixFlowProps {
  account: Account;
  onComplete: (completedStepIds: string[]) => void;
  onBack: () => void;
  onNavigateToAuthenticator?: (currentStepIndex: number) => void;
  initialStepIndex?: number;
}

export default function FixFlow({
  account,
  onComplete,
  onBack,
  onNavigateToAuthenticator,
  initialStepIndex = 0,
}: FixFlowProps) {
  const generateFixSteps = (): FixStep[] => {
    const steps: FixStep[] = [];
    const processedIssues = new Set<string>();

    // Consolidate all password-related issues into one step
    const passwordIssues = account.issues.filter(
      (issue) =>
        !issue.fixed &&
        (issue.title.toLowerCase().includes("password") ||
          issue.title.toLowerCase().includes("weak") ||
          issue.title.toLowerCase().includes("reused")),
    );

    if (passwordIssues.length > 0) {
      const issueIds = passwordIssues.map((i) => i.id).join(",");
      const hasReused = passwordIssues.some((i) =>
        i.title.toLowerCase().includes("reused"),
      );

      steps.push({
        id: issueIds,
        title: "Update Your Password",
        description: hasReused
          ? "Create a unique, strong password that is not used on any other account"
          : "Create a strong password that meets security requirements",
        instructions: [
          `Navigate to Password Settings||Go to ${account.name} settings||Find "Security & Password" section||Select "Change Password"`,
          "Create a Strong Password||Use at least 12 characters||Include uppercase (A-Z), lowercase (a-z), numbers (0-9), and symbols (!@#$%^&*)||Make sure it's unique and not used on other accounts",
          "Save Securely||Save the new password in a password manager||Confirm the password change||Test login with new password",
        ],
        estimatedTime: "5 minutes",
        completed: false,
      });

      passwordIssues.forEach((i) => processedIssues.add(i.id));
    }

    // Add 2FA step if needed
    account.issues.forEach((issue) => {
      if (issue.fixed || processedIssues.has(issue.id)) return;

      if (
        issue.title.toLowerCase().includes("no 2fa") ||
        issue.title.toLowerCase().includes("two-factor")
      ) {
        steps.push({
          id: issue.id,
          title: "Enable Two-Factor Authentication",
          description: "Add an extra layer of security to your account",
          instructions: [
            `Navigate to Security Settings||Go to ${account.name} security settings||Find "Two-Factor Authentication" or "2FA" section||Click "Enable 2FA" or "Turn On"`,
            "Set Up Authenticator App||Choose Authenticator App as your preferred method||Scan the QR code with your authenticator app (like Google Authenticator)||Enter the verification code to confirm setup",
            "Save Backup Codes||Download or write down the backup codes||Store them in a secure location||You'll need these if you lose access to your phone",
          ],
          estimatedTime: "8 minutes",
          completed: false,
        });
        processedIssues.add(issue.id);
      }
    });

    return steps;
  };

  const [steps, setSteps] = useState<FixStep[]>(generateFixSteps());
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);
  const [testPassword, setTestPassword] = useState("");

  const currentStep = steps[currentStepIndex];
  const completedCount = steps.filter((s) => s.completed).length;
  const progressPercentage = (completedCount / steps.length) * 100;

  const handleMarkComplete = () => {
    const updatedSteps = [...steps];
    updatedSteps[currentStepIndex].completed = true;
    setSteps(updatedSteps);

    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Pass IDs of completed steps only - split comma-separated IDs
      const completedStepIds = updatedSteps
        .filter((step) => step.completed)
        .flatMap((step) => step.id.split(","));
      onComplete(completedStepIds);
    }
  };

  const handleSkipStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Account Details
      </Button>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Securing {account.name}</h2>
        <p className="text-gray-600">
          Follow these steps to fix the security issues on this account
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Progress Sidebar */}
        <Card className="border-2 border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6">Your Progress</h3>

          {/* Step List */}
          <div className="space-y-3 mb-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`p-4 border-2 cursor-pointer transition-all ${
                  index === currentStepIndex
                    ? "border-gray-800 bg-gray-100"
                    : step.completed
                      ? "border-green-700 bg-green-50"
                      : "border-gray-300"
                }`}
                onClick={() => setCurrentStepIndex(index)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-7 h-7 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold ${
                      step.completed ? "bg-green-700 text-white" : ""
                    }`}
                  >
                    {step.completed ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className="text-sm font-medium">Step {index + 1}</span>
                </div>
                <div className="text-sm font-medium">{step.title}</div>
              </div>
            ))}
          </div>

          {/* Overall Progress */}
          <div className="p-4 border-2 border-gray-800 bg-gray-50">
            <div className="text-sm text-gray-600 mb-2">Overall Progress</div>
            <div className="text-3xl font-bold mb-3">
              {completedCount}/{steps.length}
            </div>
            <div className="w-full h-3 border-2 border-gray-800">
              <div
                className="h-full bg-gray-800 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Step Content */}
        <div className="col-span-2">
          <Card className="border-2 border-gray-800 p-8 mb-6">
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-2">
                Step {currentStepIndex + 1} of {steps.length}
              </div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold">{currentStep.title}</h2>
                {account.websiteUrl && (
                  <a
                    href={account.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-800 bg-white hover:bg-gray-100 text-sm font-medium"
                  >
                    Go to {account.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-gray-700 mb-4">{currentStep.description}</p>
              <div className="inline-block px-4 py-2 border-2 border-gray-800 bg-gray-100 text-sm font-medium">
                ⏱Estimated time: {currentStep.estimatedTime}
              </div>
            </div>

            {/* Authenticator Quick Access for 2FA Step */}
            {currentStep.title.includes("Two-Factor") &&
              onNavigateToAuthenticator && (
                <div className="mb-6 p-6 border-2 border-gray-800 bg-green-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold mb-1">Need a 2FA Code?</h4>
                      <p className="text-sm text-gray-600">
                        View your authenticator app to get verification codes
                      </p>
                    </div>
                    <Button
                      className="border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
                      onClick={() =>
                        onNavigateToAuthenticator(currentStepIndex)
                      }
                    >
                      View Authenticator
                    </Button>
                  </div>
                </div>
              )}

            <div className="space-y-6">
              <h3 className="font-bold text-lg mb-4">Follow these steps:</h3>
              {currentStep.instructions.map((instruction, index) => {
                const parts = instruction.split("||");
                const stepTitle = parts[0];
                const stepDetails = parts.slice(1);

                return (
                  <div key={index}>
                    <div className="border-2 border-gray-800 bg-gray-50 p-5">
                      <div className="flex gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-800 bg-white flex-shrink-0 flex items-center justify-center font-bold text-base">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-lg pt-0.5 text-gray-900">
                          {stepTitle}
                        </h4>
                      </div>
                      <ul className="ml-11 space-y-2.5">
                        {stepDetails.map((detail, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 flex gap-2 text-sm"
                          >
                            <span className="text-gray-400 font-bold">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {index < currentStep.instructions.length - 1 && (
                      <div className="h-4" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Password Strength Tester */}
            {(currentStep.title.includes("Password") ||
              currentStep.title.includes("password")) && (
              <div className="mt-6 p-6 border-2 border-gray-800 bg-gray-50">
                <h4 className="font-bold mb-3">Test Your Password Strength</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Try entering a password to check if it meets the strength
                  requirements
                </p>
                <Input
                  type="password"
                  placeholder="Enter a password to test..."
                  value={testPassword}
                  onChange={(e) => setTestPassword(e.target.value)}
                  className="mb-3 border-2 border-gray-800"
                />
                {testPassword.length > 0 && (
                  <div
                    className={`p-3 border-2 border-gray-800 ${testPassword.length > 6 ? "bg-green-100" : "bg-red-100"}`}
                  >
                    <div className="font-medium">
                      {testPassword.length > 6
                        ? "✓ Strong Password"
                        : "✗ Weak Password"}
                    </div>
                    <div className="text-sm mt-1">
                      {testPassword.length > 6
                        ? "This password meets the minimum requirements"
                        : "Password must be longer than 6 characters"}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              className="flex-1 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700 py-6 text-lg"
              onClick={handleMarkComplete}
            >
              {currentStepIndex < steps.length - 1 ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Mark Complete & Continue
                </>
              ) : (
                "Complete All Fixes"
              )}
            </Button>
            {currentStepIndex < steps.length - 1 && (
              <Button
                variant="outline"
                className="border-2 border-gray-800 py-6"
                onClick={handleSkipStep}
              >
                Skip for Now
              </Button>
            )}
          </div>

          {/* Help Section */}
          <Card className="border-2 border-gray-800 p-6 mt-6 bg-blue-50">
            <h4 className="font-bold mb-3">Need Help?</h4>
            <div className="space-y-2 text-sm">
              <div>
                • Can't find the settings? Look for a gear icon or your profile
                picture
              </div>
              <div>
                • Having trouble? Contact {account.name} support for assistance
              </div>
              <div>• Want to learn more? Check our security guides</div>
            </div>
            {currentStep.title.includes("Two-Factor") &&
              onNavigateToAuthenticator && (
                <Button
                  className="w-full mt-4 border-2 border-gray-800 bg-white hover:bg-gray-100 text-black"
                  onClick={() => onNavigateToAuthenticator(currentStepIndex)}
                >
                  View Authenticator
                </Button>
              )}
          </Card>
        </div>
      </div>
    </div>
  );
}
