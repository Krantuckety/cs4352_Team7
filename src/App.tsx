import { useState } from "react";
import { DashboardScreen } from "./components/DashboardScreen";
import { AccountDetailsScreen } from "./components/AccountDetailsScreen";
import { FixStepsScreen } from "./components/FixStepsScreen";
import { ConfirmationScreen } from "./components/ConfirmationScreen";
import { UpdatedDashboardScreen } from "./components/UpdatedDashboardScreen";
import { SummaryScreen } from "./components/SummaryScreen";
import Authenticator from "./screens/Authenticator";
import { getAccountByName } from "./data/accountsData";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    | "dashboard"
    | "account-details"
    | "fix-steps"
    | "confirmation"
    | "updated-dashboard"
    | "summary"
    | "authenticator"
  >("dashboard");
  const [previousScreen, setPreviousScreen] = useState<
    | "dashboard"
    | "account-details"
    | "fix-steps"
    | "confirmation"
    | "updated-dashboard"
    | "summary"
    | "authenticator"
  >("dashboard");
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [selectedAccountStatus, setSelectedAccountStatus] = useState<
    "safe" | "needs-work" | "unsafe"
  >("safe");
  const [score, setScore] = useState(72);
  const [previousScore, setPreviousScore] = useState(72);
  const [savedStepIndex, setSavedStepIndex] = useState<number>(1);

  const navigateToAccountDetails = (
    accountName: string,
    status: "safe" | "needs-work" | "unsafe",
  ) => {
    setSelectedAccount(accountName);
    setSelectedAccountStatus(status);
    setCurrentScreen("account-details");
  };

  const navigateToFixSteps = () => {
    setCurrentScreen("fix-steps");
  };

  const navigateToConfirmation = () => {
    setPreviousScore(score);
    setScore(80);
    setCurrentScreen("confirmation");
  };

  const navigateToUpdatedDashboard = () => {
    setCurrentScreen("updated-dashboard");
  };

  const navigateToDashboard = () => {
    setCurrentScreen("dashboard");
  };

  const navigateToSummary = () => {
    setCurrentScreen("summary");
  };

  const navigateToAuthenticator = (currentStepIndex?: number) => {
    setPreviousScreen(currentScreen);
    if (currentStepIndex !== undefined) {
      setSavedStepIndex(currentStepIndex);
    }
    setCurrentScreen("authenticator");
  };

  const navigateBackFromAuthenticator = () => {
    setCurrentScreen(previousScreen);
  };

  const getScreenTitle = () => {
    switch (currentScreen) {
      case "dashboard":
        return "Dashboard";
      case "account-details":
        return "Account Details";
      case "fix-steps":
        return "Fix Steps";
      case "confirmation":
        return "Confirmation";
      case "updated-dashboard":
        return "Updated Dashboard";
      case "summary":
        return "Summary";
      case "authenticator":
        return "Authenticator";
    }
  };

  return (
    <div className="min-h-screen bg-sky-600">
      {/* Header */}
      <header className="border-b-4 border-sky-900 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-sky-900 bg-sky-800 rounded" />
              <h1>ShieldHub Dashboard</h1>
            </div>
            <nav className="flex gap-6">
              <button
                className={`px-4 py-2 border-2 ${currentScreen === "dashboard" || currentScreen === "updated-dashboard" ? "bg-sky-800 text-white" : "bg-white text-gray-800 border-sky-600 hover:bg-sky-50"}`}
                onClick={navigateToDashboard}
              >
                Dashboard
              </button>
              <button
                className={`px-4 py-2 border-2 ${currentScreen === "authenticator" ? "bg-sky-800 text-white" : "bg-white text-gray-800 border-sky-600 hover:bg-sky-50"}`}
                onClick={navigateToAuthenticator}
              >
                Authenticator
              </button>
              <button className="px-4 py-2 border-2 bg-white text-gray-800 border-sky-600 hover:bg-sky-50">
                Settings
              </button>
              <button className="px-4 py-2 border-2 bg-white text-gray-800 border-sky-600 hover:bg-sky-50">
                Help
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="text-sm">
            <span className="cursor-pointer" onClick={navigateToDashboard}>
              Home
            </span>
            <span className="mx-2">/</span>
            <span>{getScreenTitle()}</span>
          </div>
        </div>

        {currentScreen === "dashboard" && (
          <DashboardScreen
            score={score}
            onViewDetails={navigateToAccountDetails}
            onStartCheckup={navigateToSummary}
          />
        )}
        {currentScreen === "account-details" && (
          <AccountDetailsScreen
            accountName={selectedAccount}
            accountStatus={selectedAccountStatus}
            onFixNow={navigateToFixSteps}
            onBack={navigateToDashboard}
          />
        )}
        {currentScreen === "fix-steps" && (
          <FixStepsScreen
            accountName={selectedAccount}
            onMarkAsDone={navigateToConfirmation}
            onBack={() => {
              setCurrentScreen("account-details");
              setSavedStepIndex(1);
            }}
            onNavigateToAuthenticator={navigateToAuthenticator}
            initialStep={savedStepIndex}
          />
        )}
        {currentScreen === "confirmation" && (
          <ConfirmationScreen
            oldScore={previousScore}
            newScore={score}
            onBackToDashboard={navigateToUpdatedDashboard}
          />
        )}
        {currentScreen === "updated-dashboard" && (
          <UpdatedDashboardScreen
            score={score}
            previousScore={previousScore}
            onViewSummary={navigateToSummary}
            onViewDetails={navigateToAccountDetails}
          />
        )}
        {currentScreen === "summary" && (
          <SummaryScreen onBackToDashboard={navigateToDashboard} />
        )}
        {currentScreen === "authenticator" && (
          <Authenticator
            onBack={navigateBackFromAuthenticator}
            accountName={previousScreen === "fix-steps" ? selectedAccount : undefined}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-gray-800 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div>© 2025 SecureGuard. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Terms of Service
              </a>
              <a href="#" className="underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
