import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceSelectionRowComponent } from './evidence-selection-row.component';

describe('EvidenceSelectionRowComponent', () => {
  let component: EvidenceSelectionRowComponent;
  let fixture: ComponentFixture<EvidenceSelectionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenceSelectionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceSelectionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
