import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOnClickComponent } from './input-on-click.component';

describe('InputOnClickComponent', () => {
  let component: InputOnClickComponent;
  let fixture: ComponentFixture<InputOnClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOnClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
