import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlingPComponent } from './landling-p.component';

describe('LandlingPComponent', () => {
  let component: LandlingPComponent;
  let fixture: ComponentFixture<LandlingPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlingPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlingPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
