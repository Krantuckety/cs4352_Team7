import { Account } from '../types';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface AccountDetailProps {
  account: Account;
  onStartFix: () => void;
  onBack: () => void;
}

export default function AccountDetail({ account, onStartFix, onBack }: AccountDetailProps) {
  const getSeverityColor = (severity: string) => {
    if (severity === 'high') return 'bg-danger';
    if (severity === 'medium') return 'bg-warning';
    return 'bg-primary';
  };

  const getRiskColor = () => {
    if (account.riskLevel === 'safe') return 'bg-safe';
    if (account.riskLevel === 'moderate') return 'bg-warning';
    return 'bg-danger';
  };

  const getRiskLabel = () => {
    if (account.riskLevel === 'safe') return 'Safe';
    if (account.riskLevel === 'moderate') return 'Needs Work';
    return 'Unsafe';
  };

  const activeIssues = account.issues.filter(i => !i.fixed);

  return (
    <div className="space-y-8">
      <Button variant="ghost" size="sm" className="mb-2" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Button>

      <div className="grid grid-cols-3 gap-6">
        {/* Account Status */}
        <Card className="border-2 border-gray-800 p-6">
          <div className="text-center">
            <div className={`w-20 h-20 rounded ${getRiskColor()} mx-auto mb-4`} />
            <h3 className="text-xl font-bold mb-2">{account.name}</h3>
            <div className={`inline-block px-4 py-2 ${getRiskColor()} text-white font-bold`}>
              {getRiskLabel()}
            </div>
          </div>
        </Card>

        {/* Account Info */}
        <Card className="border-2 border-gray-800 p-6 col-span-2">
          <h3 className="text-xl font-bold mb-4">Account Information</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Email Address</div>
              <div className="font-medium">{account.email}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Connected Since</div>
              <div className="font-medium">{account.connectedSince}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Last Security Check</div>
              <div className="font-medium">{account.lastChecked}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Active Issues</div>
              <div className="font-bold text-2xl text-danger">{activeIssues.length}</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Security Issues */}
      {activeIssues.length > 0 ? (
        <div>
          <div className="flex items-center justify-between mb-6 mt-6">
            <h3 className="text-2xl font-bold">Security Issues ({activeIssues.length})</h3>
            <Button
              className="px-8 py-3 bg-primary text-white hover:bg-primary font-bold"
              onClick={onStartFix}
            >
              Fix Issues Now
            </Button>
          </div>

          <div className="space-y-4">
            {activeIssues.map(issue => (
              <Card key={issue.id} className="border-2 border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${getSeverityColor(issue.severity)} flex items-center justify-center flex-shrink-0 text-white font-bold text-xl`}>
                    !
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold">{issue.title}</h4>
                      <span className="text-sm px-3 py-1 border-2 border-gray-800 uppercase font-bold">
                        {issue.severity}
                      </span>
                    </div>
                    <p className="text-gray-700">{issue.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card className="border-2 border-safe p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-safe mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-bold mb-2">All Secure!</h3>
          <p className="text-gray-700">This account has no security issues. Great job!</p>
        </Card>
      )}

      {/* Why This Matters */}
      {activeIssues.length > 0 && (
        <Card className="border-2 border-gray-800 p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">💡 Why This Matters</h3>
          <div className="space-y-3">
            {activeIssues.some(i => i.title.toLowerCase().includes('reused')) && (
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-danger rounded-full mt-2" />
                <p>
                  <strong>Reused passwords</strong> mean if one account is compromised, hackers can
                  access all your other accounts using the same password.
                </p>
              </div>
            )}
            {activeIssues.some(i => i.title.toLowerCase().includes('2fa')) && (
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-danger rounded-full mt-2" />
                <p>
                  <strong>Two-factor authentication (2FA)</strong> adds an extra security layer,
                  making it much harder for attackers to access your account.
                </p>
              </div>
            )}
            {activeIssues.some(i => i.title.toLowerCase().includes('weak')) && (
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2" />
                <p>
                  <strong>Weak passwords</strong> can be cracked quickly by automated tools. Strong
                  passwords are your first line of defense.
                </p>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
