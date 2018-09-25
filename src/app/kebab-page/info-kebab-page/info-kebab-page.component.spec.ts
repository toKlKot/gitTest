import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoKebabPageComponent } from './info-kebab-page.component';

describe('InfoKebabPageComponent', () => {
  let component: InfoKebabPageComponent;
  let fixture: ComponentFixture<InfoKebabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoKebabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoKebabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
