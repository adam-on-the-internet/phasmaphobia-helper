import {Component, Input, OnInit} from '@angular/core';
import {PrimaryEvidence} from "../phasmaphobia-helper/evidence.model";

@Component({
  selector: 'app-evidence-selection-row',
  templateUrl: './evidence-selection-row.component.html',
  styleUrls: ['./evidence-selection-row.component.scss']
})
export class EvidenceSelectionRowComponent {
  @Input() public evidence: PrimaryEvidence;

}
