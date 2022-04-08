import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  subscription: any;
  private destroy$ = new Subject();

  constructor(private cs:CommonService) { }

  ngOnInit() {
    console.log("calling oninit a api");
    this.cs.getDataforA().pipe(takeUntil(this.destroy$))
    .subscribe((res: any)=>{
      console.log("calling a api");
      console.log(res);
      
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(this.destroy$);  // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }


}
