import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponet } from './home.component';

describe('HomeComponet', () => {
  let component: HomeComponet;
  let fixture: ComponentFixture<HomeComponet>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponet],
    });
    fixture = TestBed.createComponent(HomeComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
