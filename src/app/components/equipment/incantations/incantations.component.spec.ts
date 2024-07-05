import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncantationsComponent } from './incantations.component';

describe('IncantationsComponent', () => {
  let component: IncantationsComponent;
  let fixture: ComponentFixture<IncantationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncantationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncantationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
