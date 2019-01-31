import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { productComponent } from './product.component';

describe('productComponent', () => {
  let component: productComponent;
  let fixture: ComponentFixture<productComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ productComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
