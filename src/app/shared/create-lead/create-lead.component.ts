import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})
export class CreateLeadComponent implements OnInit {

  public profileForm:FormGroup;
  aliases: any;

  constructor(private fb:FormBuilder,) {
    this.profileForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      age:  ['', [Validators.required, Validators.minLength(2)]],
      course:['',[Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      AssignmentData: this.fb.array([this.fb.control(''),this.initRows()]),    
      address: this.fb.group({
      city: ['', [Validators.required,Validators.minLength(2)]],
      states:['', [Validators.required,Validators.minLength(2)]],  
    }),  
    });
     
      

   }

  ngOnInit() {
  }

  get firstname() {
    return this.profileForm.get('firstname');
  }
  get age() {
    return this.profileForm.get('age');
  }  
  get course() {
    return this.profileForm.get('course');
  }
  get phone() {
    return this.profileForm.get('phone');
  }
  get city() {
    return this.profileForm.get("address")?.get('city')
  }
  get states() {
    return this.profileForm.get("address")?.get('states')
  }


  get formArr() {
    return this.profileForm.get("AssignmentData") as FormArray;
  }
  
  initRows() {
    return this.fb.group({
      subjectname:[],
      teacherName:[""],
      iSsubmitted:[""]
    }); 
  
  }
  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  submit(){
    console.log("",this.profileForm.value )
}


}
