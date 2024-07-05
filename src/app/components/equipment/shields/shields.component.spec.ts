import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldsComponent } from './shields.component';

describe('ShieldsComponent', () => {
  let component: ShieldsComponent;
  let fixture: ComponentFixture<ShieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
