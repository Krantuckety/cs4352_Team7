export type AccountStatus = 'safe' | 'needs-work' | 'unsafe';

export interface Issue {
  id: number;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Account {
  name: string;
  status: AccountStatus;
  email: string;
  connectedSince: string;
  lastChecked: string;
  issues: Issue[];
  websiteUrl?: string;
}

export const accountsData: Account[] = [
  {
    name: 'Gmail',
    status: 'safe',
    email: 'user@gmail.com',
    connectedSince: 'January 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://mail.google.com',
    issues: [
      { id: 1, title: 'Strong Password', description: 'Password meets all security requirements', severity: 'low' },
      { id: 2, title: '2FA Enabled', description: 'Two-factor authentication is active', severity: 'low' },
    ],
  },
  {
    name: 'Amazon',
    status: 'needs-work',
    email: 'user@example.com',
    connectedSince: 'March 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://www.amazon.com',
    issues: [
      { id: 1, title: 'Weak Password Strength', description: 'Password is less than 12 characters', severity: 'medium' },
      { id: 2, title: 'Last Password Update', description: 'Password was last changed 18 months ago', severity: 'low' },
    ],
  },
  {
    name: 'Netflix',
    status: 'unsafe',
    email: 'user@example.com',
    connectedSince: 'February 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://www.netflix.com',
    issues: [
      { id: 1, title: 'Reused Password', description: 'This password is used on 3 other accounts', severity: 'high' },
      { id: 2, title: 'No 2FA Enabled', description: 'Two-factor authentication is not active', severity: 'high' },
      { id: 3, title: 'Weak Password Strength', description: 'Password is less than 12 characters', severity: 'medium' },
      { id: 4, title: 'Last Password Update', description: 'Password was last changed 18 months ago', severity: 'low' },
    ],
  },
  {
    name: 'Facebook',
    status: 'safe',
    email: 'user@facebook.com',
    connectedSince: 'April 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://www.facebook.com',
    issues: [
      { id: 1, title: 'Strong Password', description: 'Password meets all security requirements', severity: 'low' },
      { id: 2, title: '2FA Enabled', description: 'Two-factor authentication is active', severity: 'low' },
    ],
  },
  {
    name: 'Banking App',
    status: 'needs-work',
    email: 'user@bank.com',
    connectedSince: 'May 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://www.bankofamerica.com',
    issues: [
      { id: 1, title: 'Weak Password Strength', description: 'Password is less than 12 characters', severity: 'medium' },
      { id: 2, title: 'Last Password Update', description: 'Password was last changed 18 months ago', severity: 'low' },
    ],
  },
  {
    name: 'Spotify',
    status: 'safe',
    email: 'user@spotify.com',
    connectedSince: 'June 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://www.spotify.com',
    issues: [
      { id: 1, title: 'Strong Password', description: 'Password meets all security requirements', severity: 'low' },
      { id: 2, title: '2FA Enabled', description: 'Two-factor authentication is active', severity: 'low' },
    ],
  },
  {
    name: 'LinkedIn',
    status: 'safe',
    email: 'user@linkedin.com',
    connectedSince: 'July 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://www.linkedin.com',
    issues: [
      { id: 1, title: 'Strong Password', description: 'Password meets all security requirements', severity: 'low' },
      { id: 2, title: '2FA Enabled', description: 'Two-factor authentication is active', severity: 'low' },
    ],
  },
  {
    name: 'Twitter',
    status: 'needs-work',
    email: 'user@twitter.com',
    connectedSince: 'August 2023',
    lastChecked: 'Today, 2:30 PM',
    websiteUrl: 'https://www.twitter.com',
    issues: [
      { id: 1, title: 'Weak Password Strength', description: 'Password is less than 12 characters', severity: 'medium' },
      { id: 2, title: 'Last Password Update', description: 'Password was last changed 18 months ago', severity: 'low' },
    ],
  },
];

export const getAccountByName = (name: string): Account | undefined => {
  return accountsData.find(account => account.name === name);
};
