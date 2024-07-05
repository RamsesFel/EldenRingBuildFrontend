import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorceriesComponent } from './sorceries.component';

describe('SorceriesComponent', () => {
  let component: SorceriesComponent;
  let fixture: ComponentFixture<SorceriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorceriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
