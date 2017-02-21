import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { Mosto }  from './../../app/mosto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public abv;
    public mosto: Mosto;
    submitted = false;
    
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
      this.mosto = new Mosto();
      this.abv = "";
    }

    onSubmit() { 
      this.submitted = true; 
      this.calcularABV();
  }
    
    calcularABV() :void {
        //this.abv = (this.densidadeFinal - this.densidadeInicial) * 131;
        this.abv = (this.mosto.densFinal - this.mosto.densInicial) * 131;
        this.presentAlert();
    }
    
    presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'ABV',
        subTitle: 'A cerveja possui ' + this.abv.toFixed(2) + "% de alcool.",
        buttons: ['OK']
      });
      alert.present();
    }

}
