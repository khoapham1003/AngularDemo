import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocompComponent } from './democomp.component';

describe('DemocompComponent', () => {
  let component: DemocompComponent;
  let fixture: ComponentFixture<DemocompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemocompComponent]
    });
    fixture = TestBed.createComponent(DemocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
