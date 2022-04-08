import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any=[];  
  uniqueAddresses :any =[];
  headingData: any=[];
 
  constructor(private cs:CommonService) { }

  ngOnInit() {
    this.cs.getData().subscribe((res: any)=>{
      this.userData = res?.data;
      this.userData.forEach((element:any) => {
        console.log(element.state.name);
        // Object.assign(element,{'stateName':element.state.name,'stateId':element.state._id})
        element['stateName'] = element.state.name;
        element['stateId'] = element.state._id;
      });
      this.headingData = res?.heading;
      console.log("res",res?.heading);
      const addresses = [...this.userData]; 
      this.uniqueAddresses = Array.from(new Set(addresses.map(a => a._id)))
      .map(id => {
        return addresses.find(a => a._id === id)
      });
      console.log("uniqueAddress",this.uniqueAddresses);
    });
  }
  
  

  getResponce(selectedRowData: any){
    console.log(selectedRowData);
  }

}


