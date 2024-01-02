import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket-card.component.html',
  styleUrl: './basket-card.component.scss'
})
export class BasketCardComponent implements OnInit {
  products:Product[]=[];
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.productService.getAll().subscribe(res =>{
      this.products =res;
    })
  }
  getProductById(id:number){
    console.log(id)
    return this.productService.getById(id);
  }


}
