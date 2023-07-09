import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardDiskComponent } from './hard-disk.component';

describe('HardDiskComponent', () => {
  let component: HardDiskComponent;
  let fixture: ComponentFixture<HardDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardDiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
