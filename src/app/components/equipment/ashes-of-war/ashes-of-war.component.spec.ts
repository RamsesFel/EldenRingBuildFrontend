import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshesOfWarComponent } from './ashes-of-war.component';

describe('AshesOfWarComponent', () => {
  let component: AshesOfWarComponent;
  let fixture: ComponentFixture<AshesOfWarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AshesOfWarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshesOfWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
