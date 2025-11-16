import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Account } from "../types";

interface AuthenticatorProps {
  onBack: () => void;
  accountName?: string;
  accounts?: Account[];
}

interface AccountCode {
  accountName: string;
  code: string;
  timeLeft: number;
}

export default function Authenticator({
  onBack,
  accountName,
  accounts,
}: AuthenticatorProps) {
  const CODE_DURATION = 60; // 60 seconds
  const [singleCode, setSingleCode] = useState("123 456");
  const [singleTimeLeft, setSingleTimeLeft] = useState(CODE_DURATION);
  const [accountCodes, setAccountCodes] = useState<AccountCode[]>([]);

  console.log("Authenticator props:", {
    accountName,
    accountsLength: accounts?.length,
  });

  // Generate a random 6-digit code
  const generateCode = () => {
    const num1 = Math.floor(Math.random() * 900) + 100;
    const num2 = Math.floor(Math.random() * 900) + 100;
    return `${num1} ${num2}`;
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Initialize codes for all accounts - synchronized
  useEffect(() => {
    if (accounts && !accountName) {
      // Calculate time left based on current time to sync all codes
      const now = new Date();
      const secondsSinceEpoch = Math.floor(now.getTime() / 1000);
      const timeLeftSync = CODE_DURATION - (secondsSinceEpoch % CODE_DURATION);

      const initialCodes = accounts.map((account) => ({
        accountName: account.name,
        code: generateCode(),
        timeLeft: timeLeftSync,
      }));
      setAccountCodes(initialCodes);
    }
  }, [accounts, accountName]);

  // Timer for single account view
  useEffect(() => {
    if (accountName) {
      setSingleCode(generateCode());
      setSingleTimeLeft(CODE_DURATION);

      const timer = setInterval(() => {
        setSingleTimeLeft((prev) => {
          if (prev <= 1) {
            setSingleCode(generateCode());
            return CODE_DURATION;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [accountName]);

  // Timer for hub view (all accounts) - all update together
  useEffect(() => {
    if (accounts && !accountName) {
      const timer = setInterval(() => {
        setAccountCodes((prevCodes) => {
          // Check if we need to regenerate codes (all at once)
          if (prevCodes.length > 0 && prevCodes[0].timeLeft <= 1) {
            return prevCodes.map((acc) => ({
              ...acc,
              code: generateCode(),
              timeLeft: CODE_DURATION,
            }));
          }
          // Otherwise just decrement all timers together
          return prevCodes.map((acc) => ({
            ...acc,
            timeLeft: acc.timeLeft - 1,
          }));
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [accounts, accountName]);

  const displayName = accountName || "your account";

  // Single account view (from fix flow)
  if (accountName) {
    return (
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 -ml-2"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Authenticator</h2>
          <p className="text-gray-600">
            Two-factor authentication code for {accountName}
          </p>
        </div>

        <Card className="border-2 border-gray-800 p-8">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">{accountName}</h3>
              <div className="p-6 border-2 border-gray-800 bg-gray-50 text-center">
                <div className="text-4xl font-bold tracking-wider mb-2">
                  {singleCode}
                </div>
                <div className="text-sm text-gray-600">
                  Code expires in {formatTime(singleTimeLeft)}
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-gray-800 bg-blue-50">
              <h4 className="font-bold mb-2">How to use:</h4>
              <div className="space-y-2 text-sm">
                <div>
                  • Enter this 6-digit code when logging into {displayName}
                </div>
                <div>• Code refreshes every 60 seconds</div>
                <div>• Keep your authenticator app secure</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Hub view (all accounts from header)
  return (
    <div>
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Authenticator Hub</h2>
        <p className="text-gray-600">
          Manage all your two-factor authentication codes in one place
        </p>
      </div>

      <div className="mb-6 p-4 border-2 border-gray-800 bg-blue-50">
        <h4 className="font-bold mb-2">About 2FA Codes:</h4>
        <div className="space-y-1 text-sm">
          <div>
            • Each code is unique to its account and refreshes every 60 seconds
          </div>
          <div>
            • Use these codes when logging in to add an extra layer of security
          </div>
          <div>
            • Keep this page secure - anyone with access can see your codes
          </div>
        </div>
      </div>

      {accountCodes.length === 0 ? (
        <div className="text-center p-8 border-2 border-gray-800 bg-gray-50">
          <p className="text-gray-600">Loading authenticator codes...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {accountCodes.map((account) => {
            const accountData = accounts?.find(
              (a) => a.name === account.accountName,
            );
            return (
              <Card
                key={account.accountName}
                className="border-2 border-gray-800 p-6"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold">{account.accountName}</h3>
                    {accountData?.websiteUrl && (
                      <a
                        href={accountData.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                        title={`Go to ${account.accountName}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="text-xs text-gray-600">
                    Two-Factor Authentication
                  </div>
                </div>

                <div className="p-4 border-2 border-gray-800 bg-gray-50 text-center mb-3">
                  <div className="text-3xl font-bold tracking-wider mb-2">
                    {account.code}
                  </div>
                  <div className="text-xs text-gray-600">
                    Expires in {formatTime(account.timeLeft)}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full bg-gray-200 h-2 border-2 border-gray-800">
                    <div
                      className="bg-gray-800 h-full transition-all duration-1000"
                      style={{
                        width: `${(account.timeLeft / CODE_DURATION) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
