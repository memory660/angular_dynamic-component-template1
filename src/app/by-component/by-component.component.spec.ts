import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByComponentComponent } from './by-component.component';

describe('ByComponentComponent', () => {
  let component: ByComponentComponent;
  let fixture: ComponentFixture<ByComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
