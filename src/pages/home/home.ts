import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expresion: any = '';
  btn:any;
  cantOperatos: number = 0;
  constructor(public navCtrl: NavController) {
    
  }

  getValueButton(event:any){

    let val = event.toElement.textContent
    if(val === "DEL"){
      this.expresion = '';
      console.log('Borrar');
      
    } else if(val === "="){
     this.expresion =  eval(this.expresion);
      
    } else {
      val == "/" || val == "+" || val == "*" || val == "-" ? this.cantOperatos++ : this.cantOperatos = 0;
      if(this.cantOperatos > 1){

      } else {
        this.expresion += val;
      }
    }
  }

}
