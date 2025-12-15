import { useState, useEffect } from "react";
import { Account } from "./types";
import {
  initialAccounts,
  calculateSecurityScore,
  updateAccountAfterFix,
} from "./store/securityStore";
import Dashboard from "./screens/Dashboard";
import AccountDetail from "./screens/AccountDetail";
import FixFlow from "./screens/FixFlow";
import CompletionScreen from "./screens/CompletionScreen";
import ImprovementSummary from "./screens/ImprovementSummary";
import Authenticator from "./screens/Authenticator";

type Screen =
  | "dashboard"
  | "account-detail"
  | "fix-flow"
  | "completion"
  | "summary"
  | "authenticator";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard");
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
    null,
  );
  const [securityScore, setSecurityScore] = useState(
    calculateSecurityScore(initialAccounts),
  );
  const [previousScore, setPreviousScore] = useState(securityScore);
  const [fixedAccountName, setFixedAccountName] = useState<string>("");
  const [fixedIssues, setFixedIssues] = useState<Account["issues"]>([]);
  const [authenticatorAccountName, setAuthenticatorAccountName] = useState<
    string | undefined
  >(undefined);
  const [previousScreen, setPreviousScreen] = useState<Screen>("dashboard");
  const [savedStepIndex, setSavedStepIndex] = useState<number>(0);

  const selectedAccount = accounts.find((a) => a.id === selectedAccountId);

  useEffect(() => {
    if (currentScreen === "completion") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentScreen]);

  const handleAccountClick = (accountId: string) => {
    setSelectedAccountId(accountId);
    setCurrentScreen("account-detail");
  };

  const handleStartFix = () => {
    setCurrentScreen("fix-flow");
  };

  const handleFixComplete = (completedIssueIds: string[]) => {
    if (!selectedAccountId) return;

    // Store old score before update
    setPreviousScore(securityScore);

    // Get the issues that were fixed
    const account = accounts.find((a) => a.id === selectedAccountId);
    if (account) {
      setFixedAccountName(account.name);
      const fixed = account.issues.filter((issue) =>
        completedIssueIds.includes(issue.id),
      );
      setFixedIssues(fixed);
    }

    // Update account status - only fix completed issues
    const updatedAccounts = updateAccountAfterFix(
      accounts,
      selectedAccountId,
      completedIssueIds,
    );
    setAccounts(updatedAccounts);

    // Calculate new score
    const newScore = calculateSecurityScore(updatedAccounts);
    setSecurityScore(newScore);

    setCurrentScreen("completion");
  };

  const handleBackToDashboard = () => {
    setCurrentScreen("dashboard");
    setSelectedAccountId(null);
  };

  const handleViewSummary = () => {
    setCurrentScreen("summary");
  };

  const handleViewAuthenticator = (
    accountName?: string,
    stepIndex?: number,
  ) => {
    setPreviousScreen(currentScreen);
    if (stepIndex !== undefined) {
      setSavedStepIndex(stepIndex);
    }
    setAuthenticatorAccountName(accountName);
    setCurrentScreen("authenticator");
  };

  const handleBackFromAuthenticator = () => {
    setCurrentScreen(previousScreen);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: "url('/cs4352_Team7/background.png')" }}
    >
      {/* Header */}
      <header className="bg-sky-700 border-b-2 border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <h1
              className="text-4xl font-extrabold tracking-wide text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              SHIELDHUB
            </h1>
            <nav className="flex gap-4">
              <button
                className={`px-4 py-2 border-2 border-gray-800 transition ${
                  currentScreen === "dashboard"
                    ? "bg-sky-700 text-white"
                    : "bg-sky-400 hover:bg-sky-600 text-white"
                }`}
                onClick={handleBackToDashboard}
              >
                Dashboard
              </button>
              <button
                className={`px-4 py-2 border-2 border-gray-800 transition ${
                  currentScreen === "authenticator"
                    ? "bg-sky-700 text-white"
                    : "bg-sky-400 hover:bg-sky-600 text-white"
                }`}
                onClick={() => handleViewAuthenticator()}
              >
                Authenticator
              </button>
              <button className="px-4 py-2 border-2 border-gray-800 bg-sky-400 hover:bg-sky-600 text-white transition rounded-lg">
                Settings
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {currentScreen === "dashboard" && (
          <Dashboard
            accounts={accounts}
            securityScore={securityScore}
            onAccountClick={handleAccountClick}
            onViewSummary={handleViewSummary}
          />
        )}

        {currentScreen === "account-detail" && selectedAccount && (
          <AccountDetail
            account={selectedAccount}
            onStartFix={handleStartFix}
            onBack={handleBackToDashboard}
          />
        )}

        {currentScreen === "fix-flow" && selectedAccount && (
          <FixFlow
            account={selectedAccount}
            onComplete={handleFixComplete}
            onBack={() => {
              setCurrentScreen("account-detail");
              setSavedStepIndex(0);
            }}
            onNavigateToAuthenticator={(stepIndex) =>
              handleViewAuthenticator(selectedAccount.name, stepIndex)
            }
            initialStepIndex={savedStepIndex}
          />
        )}

        {currentScreen === "completion" && (
          <CompletionScreen
            accountName={fixedAccountName}
            oldScore={previousScore}
            newScore={securityScore}
            fixedIssues={fixedIssues}
            onContinue={handleBackToDashboard}
          />
        )}

        {currentScreen === "summary" && (
          <ImprovementSummary
            accounts={accounts}
            securityScore={securityScore}
            onBack={handleBackToDashboard}
          />
        )}

        {currentScreen === "authenticator" && (
          <Authenticator
            onBack={handleBackFromAuthenticator}
            accountName={authenticatorAccountName}
            accounts={authenticatorAccountName ? undefined : accounts}
          />
        )}
      </main>
    </div>
  );
}
