import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface UpdatedDashboardScreenProps {
  score: number;
  previousScore?: number;
  onViewSummary: () => void;
  onViewDetails: (
    accountName: string,
    status: "safe" | "needs-work" | "unsafe",
  ) => void;
}

export function UpdatedDashboardScreen({
  score,
  previousScore = 72,
  onViewSummary,
  onViewDetails,
}: UpdatedDashboardScreenProps) {
  const accounts: Array<{
    name: string;
    status: "safe" | "needs-work" | "unsafe";
  }> = [
    { name: "Gmail", status: "safe" },
    { name: "Amazon", status: "safe" },
    { name: "Netflix", status: "safe" },
    { name: "Facebook", status: "safe" },
    { name: "Banking App", status: "needs-work" },
    { name: "Spotify", status: "safe" },
    { name: "LinkedIn", status: "safe" },
    { name: "Twitter", status: "safe" },
  ];

  const getStatusColor = (status: "safe" | "needs-work" | "unsafe") => {
    if (status === "safe") return "bg-green-500";
    if (status === "needs-work") return "bg-yellow-500";
    return "bg-red-500";
  };

  const getScoreColor = (score: number) => {
    if (score >= 97) return "bg-green-700"
    if (score >= 93) return "bg-green-600"
    if (score >= 90) return "bg-green-500";
    if (score >= 87) return "bg-green-400";
    if (score >= 83) return "bg-lime-400";
    if (score >= 80) return "bg-lime-300";
    if (score >= 75) return "bg-yellow-400";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 97) return "Phenomenal security - Outstanding work, keep it up!";
    if (score >= 90) return "Great security - Keep it up!";
    if (score >= 83) return "Good security - Some improvements needed";
    if (score >= 75) return "Weak security - Address vulnerabilities soon!";
    return "Critical - Immediate action required";
  };

  const getStatusLabel = (status: "safe" | "needs-work" | "unsafe") => {
    if (status === "safe") return "Safe";
    if (status === "needs-work") return "Needs Work";
    return "Unsafe";
  };

  const safeCount = accounts.filter((a) => a.status === "safe").length;
  const needsWorkCount = accounts.filter(
    (a) => a.status === "needs-work",
  ).length;
  const unsafeCount = accounts.filter((a) => a.status === "unsafe").length;

  const scoreDelta = score - previousScore;
  const attentionCount = needsWorkCount + unsafeCount;
  const clampedScore = Math.min(Math.max(score, 0), 100);

  return (
    <div>
      {/* Improvement Banner */}
      <Card className="border-2 border-gray-800 p-6 mb-8 bg-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-gray-800 bg-gray-800 text-white flex items-center justify-center text-2xl">
              ✓
            </div>
            <div>
              <h3 className="mb-1">Security Improvements Applied!</h3>
              <p>
                Your security score{" "}
                {scoreDelta >= 0 ? "increased" : "decreased"} by{" "}
                {scoreDelta >= 0 ? "+" : ""}
                {scoreDelta} points
              </p>
            </div>
          </div>
          <Button
            className="border-2 border-gray-800 bg-white text-black hover:bg-gray-100"
            onClick={onViewSummary}
          >
            View Full Summary
          </Button>
        </div>
      </Card>

      <div className="mb-8">
        <h2 className="mb-2">Updated Security Overview</h2>
        <p>Your recent fixes have improved your overall security posture</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Security Score */}
        <Card className="border-2 border-gray-800 p-6 col-span-2">
          <div className="mb-4">
            <h3>Overall Security Score</h3>
          </div>
          <div className="flex items-end gap-8">
            <div className="text-6xl">{score}/100</div>
            <div className="flex-1 pb-2">
              <div className="w-full h-8 border-2 border-gray-800 mb-2">
                <div
                  className={`h-full ${getScoreColor(score)}`}
                  style={{ width: `${clampedScore}%` }}
                />
              </div>
              <div className="text-sm">{getScoreMessage(score)}</div>
            </div>
          </div>
          <div className="mt-6 p-4 border-2 border-gray-800 bg-gray-100">
            <div className="flex items-center justify-between">
              <span>Recent change:</span>
              <span>
                {previousScore} → {score} ({scoreDelta >= 0 ? "+" : ""}
                {scoreDelta} points)
              </span>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <Card className="border-2 border-gray-800 p-6">
          <div className="mb-4">
            <h3>Account Status</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-gray-800 bg-green-500" />
                <span>Safe</span>
              </div>
              <span>{safeCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-gray-800 bg-yellow-500" />
                <span>Needs Work</span>
              </div>
              <span>{needsWorkCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-gray-800 bg-red-500" />
                <span>Unsafe</span>
              </div>
              <span>{unsafeCount}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Connected Accounts */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Connected Accounts ({accounts.length})</h3>
          {attentionCount > 0 && (
            <div className="px-4 py-2 border-2 border-gray-800 bg-gray-500 text-white text-sm">
              {attentionCount} account{attentionCount !== 1 ? "s" : ""} need
              {attentionCount === 1 ? "s" : ""} attention
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {accounts.map((account) => (
            <Card key={account.name} className="border-2 border-gray-800 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-gray-800 flex-shrink-0" />
                  <div>
                    <div className="mb-2">{account.name}</div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(account.status)}`}
                      />
                      <span className="text-sm">
                        {getStatusLabel(account.status)}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 border-gray-800"
                  onClick={() => onViewDetails(account.name, account.status)}
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
