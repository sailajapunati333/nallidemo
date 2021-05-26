import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasentComponent } from './prasent.component';

describe('PrasentComponent', () => {
  let component: PrasentComponent;
  let fixture: ComponentFixture<PrasentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrasentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
