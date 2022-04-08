import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  public assignmentForm: FormGroup | any;

  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.assignmentForm = this._fb.group({
      SubjectTeacher: this._fb.array([this.initRows()]),
      
    });
  }
                
  get formArr() {
    return this.assignmentForm.get("SubjectTeacher") as FormArray;
  }

  initRows() {
    return this._fb.group({
      Subjectname: [""],
      Submitted:[''],
      TeacherName:['']
      
    });
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  clearArray(){
    console.log("array clear");
    this.formArr.clear();
    //console.log(this._fb.array.length,"array length");    
}

}
