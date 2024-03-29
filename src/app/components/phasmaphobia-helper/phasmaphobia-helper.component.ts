import {Component, OnInit} from "@angular/core";
import {GHOST_TYPES} from "./ghosts";
import {ALL_PRIMARY_EVIDENCE} from "./evidence";
import {EvidenceStatus, PrimaryEvidence} from "./evidence.model";
import {GhostType} from "./ghost-type.model";

@Component({
  selector: "app-phasmaphobia-helper",
  templateUrl: "./phasmaphobia-helper.component.html",
  styleUrls: ["./phasmaphobia-helper.component.scss"]
})
export class PhasmaphobiaHelperComponent implements OnInit {

  public allPrimaryEvidence = ALL_PRIMARY_EVIDENCE;
  public allGhostTypes = GHOST_TYPES;
  public showSecondary = false;

  public get showSecondaryEvidence(): boolean {
    return this.viableGhostTypes.length <= 4;
  }

  public get sortedEvidence(): PrimaryEvidence[] {
    const impossible = this.allPrimaryEvidence.filter((e) => {
      return this.evidenceImpossible(e);
    });
    const confirmed = this.allPrimaryEvidence.filter((e) => {
      return this.evidenceConfirmed(e);
    });
    const other = this.allPrimaryEvidence.filter((e) => {
      return !this.evidenceConfirmed(e) && !this.evidenceImpossible(e);
    });
    return other.concat(confirmed, impossible);
  }

  public get foundEvidence(): PrimaryEvidence[] {
    return ALL_PRIMARY_EVIDENCE.filter((evidence) => {
      return evidence.status === EvidenceStatus.FOUND;
    });
  }

  public get sortedGhostTypes(): GhostType[] {
    return this.viableGhostTypes.concat(this.nonviableGhostTypes);
  }

  public get viableGhostTypes(): GhostType[] {
    return this.allGhostTypes.filter((ghostType) => {
      return this.isGhostTypeViable(ghostType);
    });
  }

  public get nonviableGhostTypes(): GhostType[] {
    return this.allGhostTypes.filter((ghostType) => {
      return !this.isGhostTypeViable(ghostType);
    });
  }

  public ngOnInit() {
    this.reset();
  }

  public getEvidenceMatchCountString(evidence: PrimaryEvidence): string {
    const count = this.getEvidenceMatchCountNumber(evidence);
    const ending = count > 1 ? "es" : "";
    return count + " match" + ending;
  }

  public reset() {
    ALL_PRIMARY_EVIDENCE.forEach((evidence) => {
      evidence.status = EvidenceStatus.UNKNOWN;
    });
    this.showSecondary = false;
  }

  public markFound(evidence: PrimaryEvidence): void {
    evidence.status = EvidenceStatus.FOUND;
  }

  public markEliminated(evidence: PrimaryEvidence): void {
    evidence.status = EvidenceStatus.ELIMINATED;
  }

  public markUnknown(evidence: PrimaryEvidence): void {
    evidence.status = EvidenceStatus.UNKNOWN;
  }

  public isEvidenceViable(evidence: PrimaryEvidence): boolean {
    return this.viableGhostTypes.some((ghostType) => {
      return ghostType.primaryEvidence.includes(evidence);
    });
  }

  public cannotBeEliminated(evidence: PrimaryEvidence): boolean {
    return this.viableGhostTypes.every((ghostType) => {
      return ghostType.primaryEvidence.includes(evidence);
    });
  }

  public evidenceConfirmed(evidence: PrimaryEvidence): boolean {
    return this.foundEvidence.includes(evidence) || this.cannotBeEliminated(evidence);
  }

  public cannotDeselectEvidence(evidence: PrimaryEvidence): boolean {
    return (!this.isEvidenceViable(evidence) || this.cannotBeEliminated(evidence)) && evidence.status === 0;
  }

  public showEvidenceUnknown(evidence: PrimaryEvidence): boolean {
    return evidence.status === EvidenceStatus.UNKNOWN && this.isEvidenceViable(evidence) && !this.cannotBeEliminated(evidence);
  }

  public evidenceImpossible(evidence: PrimaryEvidence): boolean {
    return evidence.status === EvidenceStatus.ELIMINATED || !this.isEvidenceViable(evidence);
  }

  public isGhostCertainly(ghostType: GhostType): boolean {
    return this.isGhostTypeViable(ghostType) && this.viableGhostTypes.length === 1;
  }

  public isGhostTypeViable(ghostType: GhostType): boolean {
    return this.noRequiredEvidenceEliminated(ghostType)
      && this.remainingEvidencePossible(ghostType);
  }

  private noRequiredEvidenceEliminated(ghostType: GhostType): boolean {
    return ghostType.primaryEvidence.every((evidence) => {
      return evidence.status !== EvidenceStatus.ELIMINATED;
    });
  }

  private remainingEvidencePossible(ghostType: GhostType): boolean {
    const requiredEvidenceNotYetFound = ghostType.primaryEvidence.filter((evidence) => {
      return evidence.status !== EvidenceStatus.FOUND;
    });
    return this.foundEvidence.length + requiredEvidenceNotYetFound.length <= 3;
  }

  private getEvidenceMatchCountNumber(evidence: PrimaryEvidence): number {
    const matchingTypes = this.viableGhostTypes.filter((ghostType) => {
      return ghostType.primaryEvidence.includes(evidence);
    });
    return matchingTypes.length;
  }

}
