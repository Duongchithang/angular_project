/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StorePageComponent } from './StorePage.component';

describe('StorePageComponent', () => {
  let component: StorePageComponent;
  let fixture: ComponentFixture<StorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
