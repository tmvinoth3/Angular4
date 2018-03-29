import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsXDetailComponent } from './products-x-detail.component';

describe('ProductsXDetailComponent', () => {
  let component: ProductsXDetailComponent;
  let fixture: ComponentFixture<ProductsXDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsXDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsXDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
