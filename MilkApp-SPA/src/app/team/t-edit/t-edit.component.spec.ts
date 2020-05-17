/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TEditComponent } from './t-edit.component';

describe('TEditComponent', () => {
  let component: TEditComponent;
  let fixture: ComponentFixture<TEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
