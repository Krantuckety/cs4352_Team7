import { Account } from "../types";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";

interface DashboardProps {
  accounts: Account[];
  securityScore: number;
  onAccountClick: (accountId: string) => void;
  onViewSummary: () => void;
}

export default function Dashboard({
  accounts,
  securityScore,
  onAccountClick,
  onViewSummary,
}: DashboardProps) {
  const getRiskColor = (risk: string) => {
    if (risk === "safe") return "bg-safe";
    if (risk === "moderate") return "bg-warning";
    return "bg-danger";
  };

  const getRiskLabel = (risk: string) => {
    if (risk === "safe") return "Safe";
    if (risk === "moderate") return "Needs Work";
    return "Unsafe";
  };

  const getScoreColor = () => {
    if (securityScore >= 80) return "bg-safe";
    if (securityScore >= 60) return "bg-warning";
    return "bg-danger";
  };

  const safeCount = accounts.filter((a) => a.riskLevel === "safe").length;
  const moderateCount = accounts.filter(
    (a) => a.riskLevel === "moderate",
  ).length;
  const unsafeCount = accounts.filter((a) => a.riskLevel === "unsafe").length;

  const alertAccounts = accounts.filter((a) => a.riskLevel !== "safe");
  const totalIssues = accounts.reduce(
    (sum, acc) => sum + acc.issues.filter((i) => !i.fixed).length,
    0,
  );

  return (
    <div className="space-y-8">
      {/* Alert Banner */}
      {alertAccounts.length > 0 && (
        <Card className="border-2 border-danger p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-danger text-white flex items-center justify-center text-2xl font-bold rounded">
              !
            </div>
            <div>
              <h3 className="font-bold mb-1">Action Required</h3>
              <p>
                {alertAccounts.length} account
                {alertAccounts.length !== 1 ? "s" : ""} need attention with{" "}
                {totalIssues} issue{totalIssues !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Security Score */}
        <Card className="border-2 border-gray-800 p-6 col-span-2">
          <h3 className="text-xl font-bold mb-6">Overall Security Score</h3>
          <div className="flex items-end gap-8">
            <div className="text-7xl font-bold">{securityScore}</div>
            <div className="flex-1 pb-2">
              <div className="w-full h-8 border-2 border-gray-800 mb-2">
                <div
                  className={`h-full ${getScoreColor()} transition`}
                  style={{ width: `${securityScore}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="border-2 border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6">Account Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-safe" />
                <span>Safe</span>
              </div>
              <span className="text-2xl font-bold">{safeCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-warning" />
                <span>Needs Work</span>
              </div>
              <span className="text-2xl font-bold">{moderateCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-danger" />
                <span>Unsafe</span>
              </div>
              <span className="text-2xl font-bold">{unsafeCount}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Accounts */}
      <div>
        <div className="flex items-center justify-between mb-4 mt-6">
          <h3 className="text-2xl font-bold">
            Connected Accounts ({accounts.length})
          </h3>
          <Button
            onClick={onViewSummary}
            className="bg-primary text-white hover:bg-primary"
          >
            View Report
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {accounts.map((account) => (
            <Card
              key={account.id}
              className="border-2 border-gray-800 p-5 cursor-pointer hover:shadow-lg transition"
              onClick={() => onAccountClick(account.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 ${getRiskColor(account.riskLevel)} rounded`}
                  />
                  <div>
                    <div className="font-bold mb-1 flex items-center gap-2">
                      <span>{account.name}</span>
                      {account.websiteUrl && (
                        <a
                          href={account.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getRiskColor(account.riskLevel)}`}
                      />
                      <span className="text-sm">
                        {getRiskLabel(account.riskLevel)}
                      </span>
                    </div>
                    {account.issues.filter((i) => !i.fixed).length > 0 && (
                      <div className="mt-1 text-sm text-gray-600">
                        {account.issues.filter((i) => !i.fixed).length} issue
                        {account.issues.filter((i) => !i.fixed).length !== 1
                          ? "s"
                          : ""}
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 border-gray-800"
                >
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
