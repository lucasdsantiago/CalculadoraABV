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
    public correcao;
    submitted = false;
    
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
      this.mosto = new Mosto();
      //this.mosto.densInicial = 0.012;
      //this.mosto.densFinal = 0.052;
      this.mosto.tempInicial = 20;
      this.mosto.tempFinal = 20;
      this.correcao = require('./../../../resources/json/correcao.json');
      this.abv = "";
    }

    onSubmit() { 
      this.submitted = true; 
      this.calcularABV();
    }
    
    calcularABV() :void {
        let correcaoFinal   = this.correcao.temperatura[this.mosto.tempFinal - 1];
        let correcaoInicial = this.correcao.temperatura[this.mosto.tempInicial - 1];
        let densFinalCorr   = parseFloat(this.mosto.densFinal) + (correcaoFinal);
        let densInicialCorr = parseFloat(this.mosto.densInicial) + (correcaoInicial);

        this.abv = (densFinalCorr - densInicialCorr) * 131;
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
