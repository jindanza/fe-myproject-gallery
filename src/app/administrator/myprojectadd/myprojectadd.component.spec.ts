import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectaddComponent } from './myprojectadd.component';

describe('MyprojectaddComponent', () => {
  let component: MyprojectaddComponent;
  let fixture: ComponentFixture<MyprojectaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyprojectaddComponent]
    });
    fixture = TestBed.createComponent(MyprojectaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
