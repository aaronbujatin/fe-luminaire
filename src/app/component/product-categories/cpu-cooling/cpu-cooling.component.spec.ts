import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuCoolingComponent } from './cpu-cooling.component';

describe('CpuCoolingComponent', () => {
  let component: CpuCoolingComponent;
  let fixture: ComponentFixture<CpuCoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuCoolingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuCoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
