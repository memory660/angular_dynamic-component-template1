import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTemplateComponent } from './by-template.component';

describe('ByTemplateComponent', () => {
  let component: ByTemplateComponent;
  let fixture: ComponentFixture<ByTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
