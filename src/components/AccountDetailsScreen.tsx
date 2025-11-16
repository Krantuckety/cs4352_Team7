import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowLeft } from "lucide-react";
import { getAccountByName } from "../data/accountsData";

interface AccountDetailsScreenProps {
  accountName: string;
  accountStatus: "safe" | "needs-work" | "unsafe";
  onFixNow: () => void;
  onBack: () => void;
}

export function AccountDetailsScreen({
  accountName,
  accountStatus,
  onFixNow,
  onBack,
}: AccountDetailsScreenProps) {
  const account = getAccountByName(accountName);
  const issues = account?.issues || [];

  const getSeverityColor = (severity: string) => {
    if (severity === "high") return "bg-red-500";
    if (severity === "medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStatusColor = () => {
    if (accountStatus === "safe") return "bg-green-500";
    if (accountStatus === "needs-work") return "bg-yellow-500";
    return "bg-red-500";
  };

  const getStatusLabel = () => {
    if (accountStatus === "safe") return "Safe";
    if (accountStatus === "needs-work") return "Needs Work";
    return "Unsafe";
  };

  return (
    <div>
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Button>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Account Header */}
        <Card className="border-2 border-gray-800 p-6">
          <div className="text-center">
            <div
              className={`w-20 h-20 rounded-full border-2 border-gray-800 ${getStatusColor()} mx-auto mb-4`}
            />
            <h2 className="mb-2">{accountName}</h2>
            <div
              className={`inline-block px-4 py-2 border-2 border-gray-800 ${getStatusColor()} text-white text-sm`}
            >
              Status: {getStatusLabel()}
            </div>
          </div>
        </Card>

        {/* Quick Info */}
        <Card className="border-2 border-gray-800 p-6 col-span-2">
          <h3 className="mb-4">Account Information</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm mb-1">Email</div>
              <div>{account?.email || "N/A"}</div>
            </div>
            <div>
              <div className="text-sm mb-1">Connected Since</div>
              <div>{account?.connectedSince || "N/A"}</div>
            </div>
            <div>
              <div className="text-sm mb-1">Last Checked</div>
              <div>{account?.lastChecked || "N/A"}</div>
            </div>
            <div>
              <div className="text-sm mb-1">Issues Found</div>
              <div>{issues.length} issues</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Issues List */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Security Issues ({issues.length})</h3>
          {accountStatus !== "safe" && (
            <Button
              className="border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
              onClick={onFixNow}
            >
              Fix All Issues
            </Button>
          )}
        </div>
        <div className="grid gap-4">
          {issues.map((issue) => (
            <Card key={issue.id} className="border-2 border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border-2 border-gray-800 flex-shrink-0">
                  <div
                    className={`w-full h-full ${getSeverityColor(issue.severity)}`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4>{issue.title}</h4>
                    <span className="text-sm px-3 py-1 border-2 border-gray-800 uppercase">
                      {issue.severity}
                    </span>
                  </div>
                  <p>{issue.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      {accountStatus !== "safe" && (
        <Card className="border-2 border-gray-800 p-6">
          <h3 className="mb-4">Recommendations</h3>
          <div className="space-y-3">
            {accountStatus === "unsafe" && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-800 flex-shrink-0" />
                  <span>
                    Update password immediately and ensure it's unique
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-800 flex-shrink-0" />
                  <span>
                    Enable two-factor authentication for extra security
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-800 flex-shrink-0" />
                  <span>Use a password manager to track password changes</span>
                </div>
              </>
            )}
            {accountStatus === "needs-work" && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-800 flex-shrink-0" />
                  <span>
                    Create a stronger password with at least 12 characters
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-800 flex-shrink-0" />
                  <span>Update your password every 6 months</span>
                </div>
              </>
            )}
          </div>
        </Card>
      )}
      {accountStatus === "safe" && (
        <Card className="border-2 border-gray-800 p-6 bg-green-50">
          <h3 className="mb-4">Account Status</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-gray-800 bg-green-500 flex-shrink-0" />
              <span>This account meets all security requirements</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-gray-800 bg-green-500 flex-shrink-0" />
              <span>Continue monitoring for any changes</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
