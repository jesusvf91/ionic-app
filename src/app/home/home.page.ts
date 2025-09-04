import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule],
})
export class HomePage implements OnInit {

  email: string = "";

  constructor(private activateRoute: ActivatedRoute, 
              private router: Router) {}

  // Metodo que se ejecuta cuando se crea el componente
  ngOnInit() {
    this.email = localStorage.getItem("email")!;

    if (this.email == null || this.email === "") {
      this.router.navigateByUrl("/login");
    }
  }
}
