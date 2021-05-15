import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafodirigidoComponent } from './grafodirigido.component';

describe('GrafodirigidoComponent', () => {
  let component: GrafodirigidoComponent;
  let fixture: ComponentFixture<GrafodirigidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafodirigidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafodirigidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
