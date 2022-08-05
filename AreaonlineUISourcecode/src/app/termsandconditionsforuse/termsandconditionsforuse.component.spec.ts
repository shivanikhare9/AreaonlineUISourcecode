import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconditionsforuseComponent } from './termsandconditionsforuse.component';

describe('TermsandconditionsforuseComponent', () => {
  let component: TermsandconditionsforuseComponent;
  let fixture: ComponentFixture<TermsandconditionsforuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsandconditionsforuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconditionsforuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
