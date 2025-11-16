import { Account, SecurityIssue, UserProgress } from "../types";

// Initial accounts data
export const initialAccounts: Account[] = [
  {
    id: "1",
    name: "Gmail",
    email: "user@gmail.com",
    riskLevel: "safe",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "January 2023",
    websiteUrl: "https://mail.google.com",
    issues: [],
  },
  {
    id: "2",
    name: "Amazon",
    email: "user@example.com",
    riskLevel: "moderate",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "March 2023",
    websiteUrl: "https://www.amazon.com",
    issues: [
      {
        id: "2-1",
        title: "Weak Password Strength",
        description: "Password is less than 12 characters",
        severity: "medium",
        fixed: false,
      },
      {
        id: "2-2",
        title: "Last Password Update",
        description: "Password was last changed 18 months ago",
        severity: "low",
        fixed: false,
      },
    ],
  },
  {
    id: "3",
    name: "Netflix",
    email: "user@example.com",
    riskLevel: "unsafe",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "February 2023",
    websiteUrl: "https://www.netflix.com",
    issues: [
      {
        id: "3-1",
        title: "Reused Password",
        description: "This password is used on 3 other accounts",
        severity: "high",
        fixed: false,
      },
      {
        id: "3-2",
        title: "No 2FA Enabled",
        description: "Two-factor authentication is not active",
        severity: "high",
        fixed: false,
      },
      {
        id: "3-3",
        title: "Weak Password Strength",
        description: "Password is less than 12 characters",
        severity: "medium",
        fixed: false,
      },
      {
        id: "3-4",
        title: "Last Password Update",
        description: "Password was last changed 18 months ago",
        severity: "low",
        fixed: false,
      },
    ],
  },
  {
    id: "4",
    name: "Facebook",
    email: "user@facebook.com",
    riskLevel: "safe",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "April 2023",
    websiteUrl: "https://www.facebook.com",
    issues: [],
  },
  {
    id: "5",
    name: "Banking App",
    email: "user@bank.com",
    riskLevel: "unsafe",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "May 2023",
    websiteUrl: "https://www.bankofamerica.com",
    issues: [
      {
        id: "5-1",
        title: "Reused Password",
        description:
          "This password is identical to your email account password",
        severity: "high",
        fixed: false,
      },
      {
        id: "5-2",
        title: "No 2FA Enabled",
        description:
          "Two-factor authentication is not active on this financial account",
        severity: "high",
        fixed: false,
      },
      {
        id: "5-3",
        title: "Last Password Update",
        description: "Password was last changed 24 months ago",
        severity: "medium",
        fixed: false,
      },
    ],
  },
  {
    id: "6",
    name: "Spotify",
    email: "user@spotify.com",
    riskLevel: "safe",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "June 2023",
    websiteUrl: "https://www.spotify.com",
    issues: [],
  },
  {
    id: "7",
    name: "LinkedIn",
    email: "user@linkedin.com",
    riskLevel: "safe",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "July 2023",
    websiteUrl: "https://www.linkedin.com",
    issues: [],
  },
  {
    id: "8",
    name: "Twitter",
    email: "user@twitter.com",
    riskLevel: "moderate",
    lastChecked: "Today, 2:30 PM",
    connectedSince: "August 2023",
    websiteUrl: "https://www.twitter.com",
    issues: [
      {
        id: "8-1",
        title: "Weak Password Strength",
        description: "Password is less than 12 characters",
        severity: "medium",
        fixed: false,
      },
      {
        id: "8-2",
        title: "Last Password Update",
        description: "Password was last changed 18 months ago",
        severity: "low",
        fixed: false,
      },
    ],
  },
];

export const calculateSecurityScore = (accounts: Account[]): number => {
  const totalAccounts = accounts.length;
  const safeAccounts = accounts.filter((a) => a.riskLevel === "safe").length;
  const moderateAccounts = accounts.filter(
    (a) => a.riskLevel === "moderate",
  ).length;
  const unsafeAccounts = accounts.filter(
    (a) => a.riskLevel === "unsafe",
  ).length;

  // Calculate base score
  let score =
    (safeAccounts * 100 + moderateAccounts * 70 + unsafeAccounts * 30) /
    totalAccounts;

  return Math.round(score);
};

export const updateAccountAfterFix = (
  accounts: Account[],
  accountId: string,
  completedIssueIds: string[],
): Account[] => {
  return accounts.map((account) => {
    if (account.id === accountId) {
      // Mark only completed issues as fixed
      const updatedIssues = account.issues.map((issue) => ({
        ...issue,
        fixed: completedIssueIds.includes(issue.id) ? true : issue.fixed,
      }));

      // Calculate risk level based on remaining issues
      const remainingIssues = updatedIssues.filter((i) => !i.fixed);
      let newRiskLevel = account.riskLevel;

      if (remainingIssues.length === 0) {
        newRiskLevel = "safe";
      } else {
        const hasHighSeverity = remainingIssues.some(
          (i) => i.severity === "high",
        );
        const hasMediumSeverity = remainingIssues.some(
          (i) => i.severity === "medium",
        );

        if (hasHighSeverity) {
          newRiskLevel = "unsafe";
        } else if (hasMediumSeverity) {
          newRiskLevel = "moderate";
        } else {
          newRiskLevel = "safe";
        }
      }

      return {
        ...account,
        issues: updatedIssues,
        riskLevel: newRiskLevel,
        lastChecked: new Date().toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
      };
    }
    return account;
  });
};

export const getImprovementSummary = (
  oldAccounts: Account[],
  newAccounts: Account[],
) => {
  const fixedIssuesCount =
    oldAccounts.reduce((total, account) => {
      const oldIssues = account.issues.filter((i) => !i.fixed).length;
      return total + oldIssues;
    }, 0) -
    newAccounts.reduce((total, account) => {
      const newIssues = account.issues.filter((i) => !i.fixed).length;
      return total + newIssues;
    }, 0);

  const accountsSecured = newAccounts
    .filter(
      (account, idx) =>
        oldAccounts[idx].riskLevel !== "safe" && account.riskLevel === "safe",
    )
    .map((a) => a.name);

  return {
    issuesFixed: fixedIssuesCount,
    accountsSecured,
    oldScore: calculateSecurityScore(oldAccounts),
    newScore: calculateSecurityScore(newAccounts),
  };
};
