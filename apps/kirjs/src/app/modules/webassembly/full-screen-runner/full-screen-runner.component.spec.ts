import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullScreenRunnerComponent } from './full-screen-runner.component';

describe('FullScreenRunnerComponent', () => {
  let component: FullScreenRunnerComponent;
  let fixture: ComponentFixture<FullScreenRunnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenRunnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
