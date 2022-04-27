import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleTestsProgressComponent } from './simple-tests-progress.component';

describe('SimpleTestsProgressComponent', () => {
  let component: SimpleTestsProgressComponent;
  let fixture: ComponentFixture<SimpleTestsProgressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleTestsProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTestsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
