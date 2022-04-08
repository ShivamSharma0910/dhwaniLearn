import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  subscription: any;
  constructor(private cs:CommonService) { }

  ngOnInit() {
    console.log("calling oninit b api");
    this.subscription = this.cs.getDataforB().subscribe(res => {res});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
