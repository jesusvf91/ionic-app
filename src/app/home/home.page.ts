import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule, IonButtons, IonIcon],
})
export class HomePage implements OnInit {

  email: string = "";

  constructor(private router: Router) {

    addIcons({ logOutOutline });
  }


  // Metodo que se ejecuta cuando se crea el componente
  ngOnInit() {
    const storedEmail = sessionStorage.getItem('userEmail');

    if (storedEmail) {
      this.email = storedEmail;
    }
  }
}
