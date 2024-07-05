import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalismansComponent } from './talismans.component';

describe('TalismansComponent', () => {
  let component: TalismansComponent;
  let fixture: ComponentFixture<TalismansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalismansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalismansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
