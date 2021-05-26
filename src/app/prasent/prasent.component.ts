import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-prasent',
  templateUrl: './prasent.component.html',
  styleUrls: ['./prasent.component.css']
})
export class PrasentComponent implements OnInit {

  constructor(private api: ApiService,private _route:Router) { }
     dressDesc:any=[];
     cartItems:any=[];
     
  ngOnInit() {
    this.getDresses();
  }
  getDresses() {
    this.api.getDress().subscribe
      (data => {
        for (const d of (data as any)) {
          this.dressDesc.push({
            name: d.name,
            price: d.price,
            category:d.category,
            images:d.images,
            brand:d.brand
          });
        }
        
      });

      
      
  }
  cartData(selectedObj:any){
    this.cartItems.push(selectedObj);
    alert(this.cartItems.length);
    }
    itemList()
    {
      
    }

}
