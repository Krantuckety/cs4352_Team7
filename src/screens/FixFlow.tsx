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

    account.issues.forEach((issue) => {
      if (issue.fixed) return;

      if (issue.title.toLowerCase().includes("reused password")) {
        // When fixing reused password, also include weak password issue ID if it exists
        const weakPasswordIssue = account.issues.find(
          (i) => !i.fixed && i.title.toLowerCase().includes("weak password"),
        );
        const issueIds = weakPasswordIssue
          ? `${issue.id},${weakPasswordIssue.id}`
          : issue.id;

        steps.push({
          id: issueIds,
          title: "Fix Reused Password",
          description:
            "Create a unique password that is not used on any other account",
          instructions: [
            `Go to ${account.name} settings`,
            'Navigate to "Security & Password"',
            'Select "Change Password"',
            "Create a completely unique password (not used elsewhere)",
            "Use a password manager to generate a strong password",
            "Ensure it has at least 12 characters",
            "Include uppercase, lowercase, numbers, and symbols",
            "Save the new password securely",
          ],
          estimatedTime: "5 minutes",
          completed: false,
        });
      }

      if (
        issue.title.toLowerCase().includes("no 2fa") ||
        issue.title.toLowerCase().includes("two-factor")
      ) {
        steps.push({
          id: issue.id,
          title: "Enable Two-Factor Authentication",
          description: "Add an extra layer of security to your account",
          instructions: [
            `Go to ${account.name} security settings`,
            'Find "Two-Factor Authentication" or "2FA" section',
            'Click "Enable 2FA" or "Turn On"',
            "Choose your preferred method (Authenticator App recommended)",
            "Follow the on-screen setup instructions",
            "Scan the QR code with your authenticator app",
            "Enter the verification code to confirm",
            "Save backup codes in a secure location",
          ],
          estimatedTime: "8 minutes",
          completed: false,
        });
      }

      if (
        issue.title.toLowerCase().includes("weak password") &&
        !steps.find((s) => s.title.includes("Reused"))
      ) {
        steps.push({
          id: issue.id,
          title: "Strengthen Your Password",
          description:
            "Create a stronger password that meets security requirements",
          instructions: [
            `Go to ${account.name} settings`,
            'Click on "Security & Password"',
            'Select "Change Password"',
            "Create a strong password with at least 12 characters",
            "Include uppercase letters (A-Z)",
            "Include lowercase letters (a-z)",
            "Include numbers (0-9)",
            "Include special symbols (!@#$%^&*)",
            "Avoid common words or personal information",
            "Save changes and test login with new password",
          ],
          estimatedTime: "5 minutes",
          completed: false,
        });
      }

      if (issue.title.toLowerCase().includes("last password update")) {
        steps.push({
          id: issue.id,
          title: "Update Old Password",
          description:
            "Replace your outdated password with a fresh, secure one",
          instructions: [
            `Go to ${account.name} settings`,
            'Navigate to "Security & Password"',
            'Select "Change Password"',
            "Create a new strong password (min. 12 characters)",
            "Make sure it's different from your old password",
            "Include a mix of characters, numbers, and symbols",
            "Save the new password in a password manager",
            "Set a reminder to update it again in 6 months",
          ],
          estimatedTime: "5 minutes",
          completed: false,
        });
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                }`}
                onClick={() => setCurrentStepIndex(index)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-7 h-7 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold ${
                      step.completed ? "bg-green-500 text-white" : ""
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
                      onClick={() => onNavigateToAuthenticator(currentStepIndex)}
                    >
                      View Authenticator
                    </Button>
                  </div>
                </div>
              )}

            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Follow these steps:</h3>
              {currentStep.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 border-2 border-gray-800 bg-gray-50"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-gray-800 bg-white flex-shrink-0 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-1 font-medium">{instruction}</div>
                </div>
              ))}
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
