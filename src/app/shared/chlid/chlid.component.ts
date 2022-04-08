import { Component ,Inject , EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

export interface DialogData {
  UserData:any
}


@Component({
  selector: 'app-chlid',
  templateUrl: './chlid.component.html',
  styleUrls: ['./chlid.component.css']
})
export class ChlidComponent implements OnInit {
  @Input() count: any;
  @Input() ChildheadingData:any;
  @Output() rowData:any = new EventEmitter;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  openDialog(item:any) {
    this.rowData.emit(item);
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      data:{
        UserData:item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


