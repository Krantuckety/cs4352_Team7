import { useState } from 'react';
import { Account } from './types';
import { initialAccounts, calculateSecurityScore, updateAccountAfterFix } from './store/securityStore';
import Dashboard from './screens/Dashboard';
import AccountDetail from './screens/AccountDetail';
import FixFlow from './screens/FixFlow';
import CompletionScreen from './screens/CompletionScreen';
import ImprovementSummary from './screens/ImprovementSummary';
import Authenticator from './screens/Authenticator';

type Screen = 'dashboard' | 'account-detail' | 'fix-flow' | 'completion' | 'summary' | 'authenticator';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [securityScore, setSecurityScore] = useState(calculateSecurityScore(initialAccounts));
  const [previousScore, setPreviousScore] = useState(securityScore);
  const [fixedAccountName, setFixedAccountName] = useState<string>('');
  const [fixedIssues, setFixedIssues] = useState<Account['issues']>([]);
  const [authenticatorAccountName, setAuthenticatorAccountName] = useState<string | undefined>(undefined);

  const selectedAccount = accounts.find(a => a.id === selectedAccountId);

  const handleAccountClick = (accountId: string) => {
    setSelectedAccountId(accountId);
    setCurrentScreen('account-detail');
  };

  const handleStartFix = () => {
    setCurrentScreen('fix-flow');
  };

  const handleFixComplete = (completedIssueIds: string[]) => {
    if (!selectedAccountId) return;

    // Store old score before update
    setPreviousScore(securityScore);

    // Get the issues that were fixed
    const account = accounts.find(a => a.id === selectedAccountId);
    if (account) {
      setFixedAccountName(account.name);
      const fixed = account.issues.filter(issue => completedIssueIds.includes(issue.id));
      setFixedIssues(fixed);
    }

    // Update account status - only fix completed issues
    const updatedAccounts = updateAccountAfterFix(accounts, selectedAccountId, completedIssueIds);
    setAccounts(updatedAccounts);

    // Calculate new score
    const newScore = calculateSecurityScore(updatedAccounts);
    setSecurityScore(newScore);

    setCurrentScreen('completion');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setSelectedAccountId(null);
  };

  const handleViewSummary = () => {
    setCurrentScreen('summary');
  };

  const handleViewAuthenticator = (accountName?: string) => {
    setAuthenticatorAccountName(accountName);
    setCurrentScreen('authenticator');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ShieldHub</h1>
            <nav className="flex gap-4">
              <button
                className={`px-4 py-2 border-2 border-gray-800 transition ${
                  currentScreen === 'dashboard' ? 'bg-gray-800 text-white' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={handleBackToDashboard}
              >
                Dashboard
              </button>
              <button
                className={`px-4 py-2 border-2 border-gray-800 transition ${
                  currentScreen === 'authenticator' ? 'bg-gray-800 text-white' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => handleViewAuthenticator()}
              >
                Authenticator
              </button>
              <button className="px-4 py-2 border-2 border-gray-800 bg-white hover:bg-gray-100 transition">
                Settings
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {currentScreen === 'dashboard' && (
          <Dashboard
            accounts={accounts}
            securityScore={securityScore}
            onAccountClick={handleAccountClick}
            onViewSummary={handleViewSummary}
          />
        )}

        {currentScreen === 'account-detail' && selectedAccount && (
          <AccountDetail
            account={selectedAccount}
            onStartFix={handleStartFix}
            onBack={handleBackToDashboard}
          />
        )}

        {currentScreen === 'fix-flow' && selectedAccount && (
          <FixFlow
            account={selectedAccount}
            onComplete={handleFixComplete}
            onBack={() => setCurrentScreen('account-detail')}
            onNavigateToAuthenticator={() => handleViewAuthenticator(selectedAccount.name)}
          />
        )}

        {currentScreen === 'completion' && (
          <CompletionScreen
            accountName={fixedAccountName}
            oldScore={previousScore}
            newScore={securityScore}
            fixedIssues={fixedIssues}
            onContinue={handleBackToDashboard}
          />
        )}

        {currentScreen === 'summary' && (
          <ImprovementSummary
            accounts={accounts}
            securityScore={securityScore}
            onBack={handleBackToDashboard}
          />
        )}

        {currentScreen === 'authenticator' && (
          <Authenticator
            onBack={handleBackToDashboard}
            accountName={authenticatorAccountName}
            accounts={authenticatorAccountName ? undefined : accounts}
          />
        )}
      </main>
    </div>
  );
}
