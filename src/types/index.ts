export type RiskLevel = 'safe' | 'moderate' | 'unsafe';
export type IssueSeverity = 'low' | 'medium' | 'high';

export interface SecurityIssue {
  id: string;
  title: string;
  description: string;
  severity: IssueSeverity;
  fixed: boolean;
}

export interface FixStep {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  estimatedTime: string;
  completed: boolean;
}

export interface Account {
  id: string;
  name: string;
  email: string;
  riskLevel: RiskLevel;
  issues: SecurityIssue[];
  lastChecked: string;
  connectedSince: string;
  websiteUrl?: string;
}

export interface UserProgress {
  totalIssuesFixed: number;
  accountsSecured: string[];
  lastActivity: string;
}
