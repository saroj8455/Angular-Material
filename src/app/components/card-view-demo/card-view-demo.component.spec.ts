import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewDemoComponent } from './card-view-demo.component';

describe('CardViewDemoComponent', () => {
  let component: CardViewDemoComponent;
  let fixture: ComponentFixture<CardViewDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
