import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Check } from "lucide-react";
import { SecurityIssue } from "../types";

interface CompletionScreenProps {
  accountName: string;
  oldScore: number;
  newScore: number;
  fixedIssues: SecurityIssue[];
  onContinue: () => void;
}

export default function CompletionScreen({
  accountName,
  oldScore,
  newScore,
  fixedIssues,
  onContinue,
}: CompletionScreenProps) {
  const scoreDelta = newScore - oldScore;
  const issuesFixedCount = fixedIssues.length;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Animation */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 rounded-full border-4 border-gray-800 bg-green-700 mx-auto mb-6 flex items-center justify-center animate-bounce">
          <Check className="w-16 h-16 text-white" strokeWidth={4} />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          {issuesFixedCount > 0
            ? "Security Issues Resolved!"
            : "Progress Saved"}
        </h1>
        <p className="text-xl text-gray-700">
          {issuesFixedCount > 0 ? (
            <>
              Great work! <strong>{accountName}</strong> is now more secure.
            </>
          ) : (
            <>
              You can continue fixing <strong>{accountName}</strong> later.
            </>
          )}
        </p>
      </div>

      {/* Score Update */}
      <Card className="border-2 border-gray-800 p-8 mb-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Your Security Score Improved
          </h3>

          <div className="flex items-center justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="p-6 border-2 border-gray-800 mb-3 bg-gray-50">
                <div className="text-sm text-gray-600 mb-2">Previous Score</div>
                <div className="text-6xl font-bold">{oldScore}</div>
              </div>
              <div className="text-sm font-medium">Needed Work</div>
            </div>

            <div className="text-5xl font-bold text-gray-400">→</div>

            <div className="text-center">
              <div className="p-6 border-2 border-gray-800 bg-green-700 text-white mb-3">
                <div className="text-sm mb-2">Current Score</div>
                <div className="text-6xl font-bold">{newScore}</div>
              </div>
              <div className="text-sm font-medium">
                {newScore >= 80 ? "Excellent!" : "Better!"}
              </div>
            </div>
          </div>

          <div className="inline-block px-8 py-4 border-2 border-gray-800 bg-green-100 text-lg font-bold">
            🎉 Score increased by +{scoreDelta} points
          </div>
        </div>
      </Card>

      {/* What Was Fixed */}
      {issuesFixedCount > 0 && (
        <Card className="border-2 border-gray-800 p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">What You Just Fixed</h3>
          <div className="space-y-4">
            {fixedIssues.map((issue) => (
              <div
                key={issue.id}
                className="flex items-start gap-4 p-4 border-2 border-gray-800 bg-green-50"
              >
                <div className="w-10 h-10 border-2 border-gray-800 bg-green-700 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{issue.title}</h4>
                  <p className="text-sm text-gray-700">{issue.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Next Steps */}
      <Card className="border-2 border-gray-800 p-8 mb-8 bg-blue-50">
        <h3 className="text-2xl font-bold mb-4">Keep Going!</h3>
        <p className="text-gray-700 mb-4">
          You're on the right track. Check your dashboard to see if other
          accounts need attention.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Review other accounts for similar issues</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Consider using a password manager for all accounts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Schedule regular security check-ups every month</span>
          </div>
        </div>
      </Card>

      {/* Action Button */}
      <div className="flex justify-center">
        <Button
          className="px-12 py-6 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-700 text-lg"
          onClick={onContinue}
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}
