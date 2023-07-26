import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojecteditComponent } from './myprojectedit.component';

describe('MyprojecteditComponent', () => {
  let component: MyprojecteditComponent;
  let fixture: ComponentFixture<MyprojecteditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyprojecteditComponent]
    });
    fixture = TestBed.createComponent(MyprojecteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
