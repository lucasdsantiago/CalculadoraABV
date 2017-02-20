import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public densidadeInicial;
    public densidadeFinal;
    public abv;
    
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
    }
    
    calcularABV() :void {
        
        this.abv = (this.densidadeFinal - this.densidadeInicial) * 131;
        this.presentAlert();
    }
    
    presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'ABV',
        subTitle: 'A cerveja possui ' + this.abv.toFixed(2) + "% de alcool.",
        buttons: ['OK']
      });
      alert.present();
      this.densidadeInicial = "";
      this.densidadeFinal = "";
      this.abv = "";
    }

}
