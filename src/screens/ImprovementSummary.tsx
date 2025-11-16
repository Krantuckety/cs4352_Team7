import { Account } from "../types";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ImprovementSummaryProps {
  accounts: Account[];
  securityScore: number;
  onBack: () => void;
}

export default function ImprovementSummary({
  accounts,
  securityScore,
  onBack,
}: ImprovementSummaryProps) {
  const totalIssues = accounts.reduce((sum, acc) => sum + acc.issues.length, 0);
  const fixedIssues = accounts.reduce(
    (sum, acc) => sum + acc.issues.filter((i) => i.fixed).length,
    0,
  );
  const activeIssues = totalIssues - fixedIssues;

  const criticalIssues = accounts.reduce(
    (sum, acc) =>
      sum + acc.issues.filter((i) => !i.fixed && i.severity === "high").length,
    0,
  );

  const safeAccounts = accounts.filter((a) => a.riskLevel === "safe").length;
  const accountsNeedingWork = accounts.filter((a) => a.riskLevel !== "safe");

  const securityTips = [
    {
      icon: "🔑",
      title: "Use Unique Passwords",
      description:
        "Never reuse passwords across different accounts to prevent cascading breaches",
    },
    {
      icon: "📱",
      title: "Enable 2FA Everywhere",
      description:
        "Turn on two-factor authentication for all accounts that support it",
    },
    {
      icon: "🔄",
      title: "Update Passwords Regularly",
      description:
        "Change passwords every 3-6 months, especially for critical accounts",
    },
    {
      icon: "🔐",
      title: "Use a Password Manager",
      description:
        "Let a password manager generate and store complex passwords for you",
    },
    {
      icon: "🚫",
      title: "Never Share Passwords",
      description:
        "Keep passwords private and never share them via email or text",
    },
    {
      icon: "⚠️",
      title: "Watch for Phishing",
      description:
        "Be cautious of suspicious emails and always verify sender authenticity",
    },
  ];

  return (
    <div>
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Button>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Security Report</h2>
        <p className="text-gray-600">
          Comprehensive analysis of your account security with actionable recommendations
        </p>
      </div>

      {/* Key Metrics */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Security Overview</h3>
        <div className="grid grid-cols-4 gap-4">
          <Card className="border-2 border-gray-800 p-6 text-center rounded-xl">
            <div className="text-5xl font-bold mb-2">{securityScore}</div>
            <div className="font-medium mb-2">Security Score</div>
            <div className="text-sm px-3 py-1 border-2 border-gray-800 bg-gray-100 inline-block rounded-full">
              {securityScore >= 80
                ? "Excellent"
                : securityScore >= 60
                  ? "Good"
                  : "Needs Work"}
            </div>
          </Card>

          <Card className="border-2 border-gray-800 p-6 text-center rounded-xl">
            <div className="text-5xl font-bold mb-2">{activeIssues}</div>
            <div className="font-medium mb-2">Active Issues</div>
            <div className="text-sm px-3 py-1 border-2 border-gray-800 bg-red-100 inline-block rounded-full">
              {criticalIssues} critical
            </div>
          </Card>

          <Card className="border-2 border-gray-800 p-6 text-center rounded-xl">
            <div className="text-5xl font-bold mb-2">{safeAccounts}</div>
            <div className="font-medium mb-2">Secure Accounts</div>
            <div className="text-sm px-3 py-1 border-2 border-gray-800 bg-green-100 inline-block rounded-full">
              of {accounts.length} total
            </div>
          </Card>

          <Card className="border-2 border-gray-800 p-6 text-center rounded-xl">
            <div className="text-5xl font-bold mb-2">{fixedIssues}</div>
            <div className="font-medium mb-2">Issues Resolved</div>
            <div className="text-sm px-3 py-1 border-2 border-gray-800 bg-blue-100 inline-block rounded-full">
              {totalIssues > 0
                ? Math.round((fixedIssues / totalIssues) * 100)
                : 0}
              % complete
            </div>
          </Card>
        </div>
      </div>

      {/* Accounts Needing Attention */}
      {accountsNeedingWork.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">
            Accounts Needing Attention
          </h3>
          <div className="space-y-3">
            {accountsNeedingWork.map((account) => (
              <Card key={account.id} className="border-2 border-gray-800 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 border-2 border-gray-800 flex items-center justify-center flex-shrink-0 text-white font-bold rounded-lg ${
                      account.riskLevel === "unsafe"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    !
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold">{account.name}</h4>
                      <span
                        className={`text-sm px-3 py-1 border-2 border-gray-800 font-bold rounded-full ${
                          account.riskLevel === "unsafe"
                            ? "bg-red-500 text-white"
                            : "bg-yellow-500 text-white"
                        }`}
                      >
                        {account.riskLevel === "unsafe"
                          ? "HIGH RISK"
                          : "NEEDS ATTENTION"}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      {account.issues.filter((i) => !i.fixed).length} security issue
                      {account.issues.filter((i) => !i.fixed).length !== 1
                        ? "s"
                        : ""}{" "}
                      detected:{" "}
                      {account.issues
                        .filter((i) => !i.fixed)
                        .map((i) => i.title)
                        .slice(0, 2)
                        .join(", ")}
                      {account.issues.filter((i) => !i.fixed).length > 2 &&
                        "..."}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All Secure Message */}
      {accountsNeedingWork.length === 0 && (
        <Card className="border-2 border-green-500 bg-green-50 p-8 text-center mb-8 rounded-xl">
          <div className="w-20 h-20 rounded-full border-2 border-gray-800 bg-green-500 mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl text-white">✓</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">All Accounts Secured!</h3>
          <p className="text-gray-700">
            Outstanding! Your accounts are well-protected. Continue following these
            security best practices to stay safe.
          </p>
        </Card>
      )}

      {/* Security Best Practices */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Security Best Practices</h3>
        <div className="grid grid-cols-2 gap-4">
          {securityTips.map((tip, index) => (
            <Card key={index} className="border-2 border-gray-800 p-6 rounded-xl hover:shadow-lg transition">
              <div className="flex gap-4">
                <div className="text-4xl">{tip.icon}</div>
                <div>
                  <h4 className="font-bold mb-2">{tip.title}</h4>
                  <p className="text-sm text-gray-700">{tip.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button
          className="px-8 py-4 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
          onClick={onBack}
        >
          Back to Dashboard
        </Button>
        <Button
          variant="outline"
          className="px-8 py-4 border-2 border-gray-800"
        >
          Download Report
        </Button>
        <Button
          variant="outline"
          className="px-8 py-4 border-2 border-gray-800"
        >
          Share Summary
        </Button>
      </div>
    </div>
  );
}
