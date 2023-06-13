import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
box_content:any=[{title:"About",content:"Indian e-commerce company, headquartered in Bengaluru, and incorporated in Singapore as a private limited company."},
{title:"Company",content:"The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products."},
{title:"Services",content:"The company initially focused on online book sales with country-wide shipping. Flipkart slowly grew in prominence and was receiving 100 orders per day by 2008"}]
}
