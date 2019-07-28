import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCommentsComponent } from './request-comments.component';

describe('RequestCommentsComponent', () => {
  let component: RequestCommentsComponent;
  let fixture: ComponentFixture<RequestCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
