import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KebabPageComponent } from './kebab-page.component';

describe('KebabPageComponent', () => {
  let component: KebabPageComponent;
  let fixture: ComponentFixture<KebabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KebabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KebabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
