import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  loginform?:FormGroup;
  constructor(private fb :FormBuilder) {}

  ngOnInit():void{

    this.loginform = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]]
    })

    

  }

  formvaluecontrol(a)
  {
     return this.loginform.get(a);
  }

 

  datasubmit(){
    console.log(this.loginform.value);
  }

}
