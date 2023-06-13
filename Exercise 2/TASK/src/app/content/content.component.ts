import { Component } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import { HeadService } from '../service/head.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  navigation:string[]=[]
detail1:any={title:"Content",value:"On 20 December 2014, Flipkart announced its filing application with Singapore-based company regulator ACRA to become a public company. This announcement came after the company received US$700 million in long-term strategic investments from more than 50 Indian investors."}
detail2:any={title:"Subheader",value:"In 2022, the organization started Flipkart Ventures and created a venture fund of $100 Million to be invested in other 6 start-ups selected for Flipkart Leap Ahead, an accelerator program."}
constructor(private obj1:HeadService)
{
}
ngOnInit():void{
 this.navigation=this.obj1.getNavigatorValue()
}
}
