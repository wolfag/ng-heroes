import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTagComponent } from './hero-tag.component';

describe('HeroTagComponent', () => {
  let component: HeroTagComponent;
  let fixture: ComponentFixture<HeroTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
