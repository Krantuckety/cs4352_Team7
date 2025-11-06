import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft } from 'lucide-react';
import { getAccountByName } from '../data/accountsData';

interface FixStepsScreenProps {
  accountName: string;
  onMarkAsDone: () => void;
  onBack: () => void;
  onNavigateToAuthenticator?: () => void;
}

interface FixStep {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  estimatedTime: string;
}

export function FixStepsScreen({ accountName, onMarkAsDone, onBack, onNavigateToAuthenticator }: FixStepsScreenProps) {
  const account = getAccountByName(accountName);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Generate steps based on actual issues found
  const generateStepsFromIssues = (): FixStep[] => {
    if (!account) return [];

    const steps: FixStep[] = [];
    let stepId = 1;

    account.issues.forEach(issue => {
      if (issue.title.toLowerCase().includes('reused password')) {
        steps.push({
          id: stepId++,
          title: 'Fix Reused Password',
          description: 'Create a unique password that is not used on any other account',
          instructions: [
            'Go to account settings',
            'Navigate to "Security & Password"',
            'Select "Change Password"',
            'Create a completely unique password (not used elsewhere)',
            'Use a password manager to generate a strong password',
            'Ensure it has at least 12 characters',
            'Include uppercase, lowercase, numbers, and symbols',
            'Save the new password securely',
          ],
          estimatedTime: '5 minutes',
        });
      }

      if (issue.title.toLowerCase().includes('no 2fa') || issue.title.toLowerCase().includes('two-factor')) {
        steps.push({
          id: stepId++,
          title: 'Enable Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          instructions: [
            'Navigate to Security Settings',
            'Find "Two-Factor Authentication" section',
            'Click "Enable 2FA"',
            'Choose your preferred method (SMS or Authenticator App)',
            'Follow the setup instructions provided',
            'Save backup codes in a secure location',
            'Verify your setup by logging in',
          ],
          estimatedTime: '10 minutes',
        });
      }

      if (issue.title.toLowerCase().includes('weak password') && !steps.find(s => s.title.includes('Reused'))) {
        steps.push({
          id: stepId++,
          title: 'Strengthen Your Password',
          description: 'Create a stronger password that meets security requirements',
          instructions: [
            'Go to account settings',
            'Click on "Security & Password"',
            'Select "Change Password"',
            'Create a strong password with at least 12 characters',
            'Include uppercase letters (A-Z)',
            'Include lowercase letters (a-z)',
            'Include numbers (0-9)',
            'Include special symbols (!@#$%^&*)',
            'Avoid common words or personal information',
            'Save changes and log in with new password',
          ],
          estimatedTime: '5 minutes',
        });
      }

      if (issue.title.toLowerCase().includes('last password update')) {
        steps.push({
          id: stepId++,
          title: 'Update Old Password',
          description: 'Replace your outdated password with a fresh, secure one',
          instructions: [
            'Go to account settings',
            'Navigate to "Security & Password"',
            'Select "Change Password"',
            'Create a new strong password (min. 12 characters)',
            'Make sure it\'s different from your old password',
            'Include a mix of characters, numbers, and symbols',
            'Save the new password',
            'Set a reminder to update it in 6 months',
          ],
          estimatedTime: '5 minutes',
        });
      }
    });

    // If no specific steps generated, provide default password update
    if (steps.length === 0) {
      steps.push({
        id: 1,
        title: 'Update Your Password',
        description: 'Create a strong, unique password for this account',
        instructions: [
          'Go to account settings',
          'Click on "Security & Password"',
          'Select "Change Password"',
          'Create a strong, unique password (min. 12 characters)',
          'Include uppercase, lowercase, numbers, and symbols',
          'Save changes and log in with new password',
        ],
        estimatedTime: '5 minutes',
      });
    }

    return steps;
  };

  const steps = generateStepsFromIssues();

  const totalSteps = steps.length;
  const step = steps[currentStep - 1];

  const handleMarkComplete = () => {
    setCompletedSteps([...completedSteps, currentStep]);
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onMarkAsDone();
    }
  };

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="mb-6 -ml-2"
        onClick={onBack}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Account Details
      </Button>

      <div className="grid grid-cols-3 gap-6">
        {/* Steps Sidebar */}
        <Card className="border-2 border-gray-800 p-6">
          <h3 className="mb-4">Progress</h3>
          <div className="space-y-3">
            {steps.map((s, index) => (
              <div
                key={s.id}
                className={`p-4 border-2 ${currentStep === index + 1 ? 'border-gray-800 bg-gray-100' : 'border-gray-300'} cursor-pointer`}
                onClick={() => setCurrentStep(index + 1)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center ${completedSteps.includes(index + 1) ? 'bg-gray-800 text-white' : ''}`}>
                    {completedSteps.includes(index + 1) ? '✓' : index + 1}
                  </div>
                  <span className="text-sm">Step {index + 1}</span>
                </div>
                <div className="text-sm">{s.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border-2 border-gray-800">
            <div className="text-sm mb-2">Overall Progress</div>
            <div className="text-2xl mb-3">{completedSteps.length}/{totalSteps}</div>
            <div className="w-full h-3 border-2 border-gray-800">
              <div
                className="h-full bg-gray-800"
                style={{ width: `${(completedSteps.length / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Current Step Content */}
        <div className="col-span-2">
          <Card className="border-2 border-gray-800 p-8 mb-6">
            <div className="mb-6">
              <div className="text-sm mb-2">Step {currentStep} of {totalSteps}</div>
              <h2 className="mb-2">{step.title}</h2>
              <p className="mb-4">{step.description}</p>
              <div className="inline-block px-3 py-1 border-2 border-gray-800 text-sm">
                Estimated time: {step.estimatedTime}
              </div>
            </div>

            <div className="space-y-4">
              {step.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-4 p-4 border-2 border-gray-800">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex-shrink-0 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="pt-1">{instruction}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              className="flex-1 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
              onClick={handleMarkComplete}
            >
              {currentStep < totalSteps ? 'Mark Complete & Continue' : 'Complete All Steps'}
            </Button>
            {currentStep < totalSteps && (
              <Button
                variant="outline"
                className="border-2 border-gray-800"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Skip for Now
              </Button>
            )}
          </div>

          {/* Help Section */}
          <Card className="border-2 border-gray-800 p-6 mt-6">
            <h4 className="mb-3">Need Help?</h4>
            <div className="space-y-2 text-sm">
              <div>→ View detailed documentation</div>
              <div>→ Contact support team</div>
              <div>→ Watch video tutorial</div>
            </div>
            {step.title.includes('Two-Factor') && onNavigateToAuthenticator && (
              <Button
                className="w-full mt-4 border-2 border-gray-800 bg-white hover:bg-gray-100"
                onClick={onNavigateToAuthenticator}
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
