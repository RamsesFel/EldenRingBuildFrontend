import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBuildsComponent } from './all-builds.component';

describe('AllBuildsComponent', () => {
  let component: AllBuildsComponent;
  let fixture: ComponentFixture<AllBuildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllBuildsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
