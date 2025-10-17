import { Button } from './ui/button';
import { Card } from './ui/card';

interface ConfirmationScreenProps {
  oldScore: number;
  newScore: number;
  onBackToDashboard: () => void;
}

export function ConfirmationScreen({ oldScore, newScore, onBackToDashboard }: ConfirmationScreenProps) {
  const improvements = [
    { id: 1, title: 'Password Updated', description: 'Strong, unique password created', icon: '🔒' },
    { id: 2, title: '2FA Enabled', description: 'Two-factor authentication is now active', icon: '📱' },
    { id: 3, title: 'Security Improved', description: 'Account protection level increased', icon: '✓' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 rounded-full border-4 border-gray-800 mx-auto mb-6 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-gray-800 border-t-0 border-l-0 rotate-45 -mt-3" />
        </div>
        <h1 className="mb-3">Security Issues Resolved!</h1>
        <p>Great work! Your account is now more secure.</p>
      </div>

      {/* Score Comparison */}
      <Card className="border-2 border-gray-800 p-8 mb-8">
        <div className="text-center">
          <h3 className="mb-6">Your Security Score Improved</h3>
          
          <div className="flex items-center justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="p-6 border-2 border-gray-800 mb-3">
                <div className="text-sm mb-2">Previous Score</div>
                <div className="text-5xl">{oldScore}</div>
              </div>
              <div className="text-sm">Needs Improvement</div>
            </div>
            
            <div className="text-4xl">→</div>
            
            <div className="text-center">
              <div className="p-6 border-2 border-gray-800 bg-gray-800 text-white mb-3">
                <div className="text-sm mb-2">Current Score</div>
                <div className="text-5xl">{newScore}</div>
              </div>
              <div className="text-sm">Good Security</div>
            </div>
          </div>

          <div className="inline-block px-6 py-3 border-2 border-gray-800 bg-gray-100">
            Score increased by +{newScore - oldScore} points
          </div>
        </div>
      </Card>

      {/* Improvements Made */}
      <div className="mb-8">
        <h3 className="mb-4">What Was Fixed</h3>
        <div className="grid gap-4">
          {improvements.map((item) => (
            <Card key={item.id} className="border-2 border-gray-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-gray-800 bg-gray-800 text-white flex items-center justify-center text-xl">
                  ✓
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <Card className="border-2 border-gray-800 p-6 mb-8">
        <h4 className="mb-4">Recommended Next Steps</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-gray-800" />
            <span>Check other accounts for similar issues</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-gray-800" />
            <span>Set up a password manager</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-gray-800" />
            <span>Schedule regular security check-ups</span>
          </div>
        </div>
      </Card>

      {/* Action Button */}
      <div className="flex justify-center">
        <Button
          className="px-12 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
          onClick={onBackToDashboard}
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}
