import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughComponent } from './rough.component';

describe('RoughComponent', () => {
  let component: RoughComponent;
  let fixture: ComponentFixture<RoughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoughComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
