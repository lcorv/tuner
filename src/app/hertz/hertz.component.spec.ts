import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HertzComponent } from './hertz.component';

describe('HertzComponent', () => {
  let component: HertzComponent;
  let fixture: ComponentFixture<HertzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HertzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HertzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
