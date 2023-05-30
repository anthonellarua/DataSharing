import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaformComponent } from './vistaform.component';

describe('VistaformComponent', () => {
  let component: VistaformComponent;
  let fixture: ComponentFixture<VistaformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaformComponent]
    });
    fixture = TestBed.createComponent(VistaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
