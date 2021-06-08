export interface PrimaryEvidence {
  name: string;
  details: string;
  icon: string;
  status?: EvidenceStatus;
}

export const enum EvidenceStatus {
  UNKNOWN,
  FOUND,
  ELIMINATED
}
