import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjisktraComponent } from './djisktra.component';

describe('DjisktraComponent', () => {
  let component: DjisktraComponent;
  let fixture: ComponentFixture<DjisktraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjisktraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjisktraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
