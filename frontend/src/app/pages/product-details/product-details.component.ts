import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private activated: ActivatedRoute,private productService: ProductService){}
  single:any[] = [];
  priceAfterDiscount:number = 0;
  rate :any[] = [];
  product: any;
  // clientRate :any[] = [];
  // clientRate2 :any[] = [];
  // reviews :any[]=[];
  ngOnInit(){
    const id =  this.activated.snapshot.paramMap.get('_id');
    if(id){
      this.productService.getSingleProduct(id).subscribe(res => {
        this.product = res.data;
        console.log('Product:', this.product);
        //reting array
        this.rate = Array(Math.floor(this.product.rating)).fill(0);
        //price after discount
        this.priceAfterDiscount = Math.floor(this.product.price -((this.product.discount/100)*this.product.price));
          console.log(this.priceAfterDiscount);
      });
    }
    console.log("this is id from single "+ id);
    // this.productService.getSingleProduct(id).subscribe(res => {
      // console.log('this is rating' + this.rate);
      // this.reviews = res.reviews;
      // this.reviews.map(i =>{
      //   this.clientRate = Array(i.rating).fill(0);
      //   this.clientRate2.push(this.clientRate);
      //   console.log(this.clientRate2);
      // })
      // console.log('this is revies'+this.reviews);
      // this.single.push(res);
      // console.log('this is res from single' + this.single);
      // console.log(typeof(res));
      
      // console.log(res);
    // })
  }

}
