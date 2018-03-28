import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./prouct.service";

@Component({
    selector: `pm-products`,
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    //productList = [{'name':'Mi A1','description':'Smartphone'}, {'name':'Dell','description':'Laptop'}];
    filteredProducts : IProduct[];

    constructor(private _productServie: ProductService) {
        
    }

    pageTitle: string = 'Product List';
    showImage: boolean = false;

    _listFilter: string;

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    products: IProduct[] ;


    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) >= 0);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this.products = this._productServie.getProducts();
        console.log('In OnInit');
    }

}