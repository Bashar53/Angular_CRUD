import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  nameofp:string='';
  phone?:string='';

  onsubmit()
  {
    console.log('event fire');
    alert(this.nameofp);
  }
  onadd()
  {
    console.log('phone event fire')
  }
  onchange(ev:any)
  {
    this.nameofp=ev.target.value;
    console.log(this.nameofp);
  }
  

}
