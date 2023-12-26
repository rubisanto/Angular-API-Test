import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenduCaseComponent } from './rendu-case.component';

describe('RenduCaseComponent', () => {
  let component: RenduCaseComponent;
  let fixture: ComponentFixture<RenduCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenduCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenduCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
