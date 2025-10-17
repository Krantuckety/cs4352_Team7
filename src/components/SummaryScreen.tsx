import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft } from 'lucide-react';
import { accountsData } from '../data/accountsData';

interface SummaryScreenProps {
  onBackToDashboard: () => void;
}

export function SummaryScreen({ onBackToDashboard }: SummaryScreenProps) {
  // Calculate stats from actual data
  const totalIssues = accountsData.reduce((acc, account) => acc + account.issues.length, 0);
  const criticalIssues = accountsData.reduce((acc, account) =>
    acc + account.issues.filter(i => i.severity === 'high').length, 0);
  const accountsNeedingWork = accountsData.filter(a => a.status === 'needs-work' || a.status === 'unsafe').length;

  const improvements = [
    { label: 'Total Issues', value: totalIssues.toString(), change: `${criticalIssues} critical` },
    { label: 'Accounts Needing Work', value: accountsNeedingWork.toString(), change: `of ${accountsData.length}` },
    { label: 'Safe Accounts', value: accountsData.filter(a => a.status === 'safe').length.toString(), change: `${Math.round((accountsData.filter(a => a.status === 'safe').length / accountsData.length) * 100)}%` },
    { label: 'Current Score', value: '72', change: 'Needs work' },
  ];

  const unsafeAccounts = accountsData.filter(a => a.status === 'unsafe' || a.status === 'needs-work');
  const fixedIssues = unsafeAccounts.slice(0, 3).map((account, idx) => ({
    title: `${account.name} - ${account.issues.length} issue${account.issues.length !== 1 ? 's' : ''} found`,
    description: account.issues.map(i => i.title).slice(0, 2).join(', '),
    time: idx === 0 ? 'Just checked' : idx === 1 ? '2 minutes ago' : '5 minutes ago'
  }));

  const tips = [
    {
      title: 'Use Unique Passwords',
      description: 'Never reuse passwords across different accounts to prevent cascading breaches',
      icon: '🔑',
    },
    {
      title: 'Enable 2FA Everywhere',
      description: 'Turn on two-factor authentication for all accounts that support it',
      icon: '📱',
    },
    {
      title: 'Update Passwords Regularly',
      description: 'Change passwords every 3-6 months, especially for critical accounts',
      icon: '🔄',
    },
    {
      title: 'Use a Password Manager',
      description: 'Let a password manager generate and store complex passwords for you',
      icon: '🔐',
    },
    {
      title: 'Never Share Passwords',
      description: 'Keep passwords private and never share them via email or text',
      icon: '🚫',
    },
    {
      title: 'Watch for Phishing',
      description: 'Be cautious of suspicious emails and always verify sender authenticity',
      icon: '⚠️',
    },
  ];

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="mb-6 -ml-2"
        onClick={onBackToDashboard}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Button>

      <div className="mb-8">
        <h2 className="mb-2">Security Improvement Summary</h2>
        <p>Here's what you accomplished in this security check-up</p>
      </div>

      {/* Improvements Made */}
      <div className="mb-8">
        <h3 className="mb-4">Key Metrics</h3>
        <div className="grid grid-cols-4 gap-4">
          {improvements.map((item) => (
            <Card key={item.label} className="border-2 border-gray-800 p-6 text-center">
              <div className="text-4xl mb-2">{item.value}</div>
              <div className="mb-2">{item.label}</div>
              <div className="text-sm px-3 py-1 border-2 border-gray-800 bg-gray-100 inline-block">
                {item.change}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <h3 className="mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {fixedIssues.map((issue, index) => (
              <Card key={index} className="border-2 border-gray-800 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-gray-800 bg-gray-800 text-white flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4>{issue.title}</h4>
                      <span className="text-sm">{issue.time}</span>
                    </div>
                    <p className="text-sm">{issue.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4">Next Steps</h3>
          <Card className="border-2 border-gray-800 p-5">
            <div className="space-y-4">
              {unsafeAccounts.slice(0, 3).map((account, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 border-2 border-gray-800" />
                    <span className="text-sm">Fix {account.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">{account.issues.length} issue{account.issues.length !== 1 ? 's' : ''} remaining</p>
                </div>
              ))}
              {unsafeAccounts.length === 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 border-2 border-gray-800 bg-green-500" />
                    <span className="text-sm">All accounts secure!</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">Great work</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Security Tips */}
      <div className="mb-8">
        <h3 className="mb-4">Security Best Practices</h3>
        <div className="grid grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <Card key={index} className="border-2 border-gray-800 p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 border-2 border-gray-800 flex-shrink-0 flex items-center justify-center text-xl">
                  {index + 1}
                </div>
                <div>
                  <h4 className="mb-2">{tip.title}</h4>
                  <p className="text-sm">{tip.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button
          className="px-8 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
          onClick={onBackToDashboard}
        >
          Back to Dashboard
        </Button>
        <Button
          variant="outline"
          className="px-8 border-2 border-gray-800"
        >
          Download Report
        </Button>
        <Button
          variant="outline"
          className="px-8 border-2 border-gray-800"
        >
          Share Summary
        </Button>
      </div>
    </div>
  );
}
