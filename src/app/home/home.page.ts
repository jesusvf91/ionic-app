import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonSpinner, IonLabel, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { Post, PostService } from '../services/post-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonSpinner, CommonModule, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule, IonButtons, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage implements OnInit {

  email: string = "";
  listadoPosts: Post[] = [];

  constructor(private router: Router,
              private postService: PostService) {

    addIcons({ logOutOutline });
  }


  // Metodo que se ejecuta cuando se crea el componente
  ngOnInit() {
    const storedEmail = sessionStorage.getItem('userEmail');

    if (storedEmail) {
      this.email = storedEmail;
    }

    setTimeout(()=> {
      this.postService.getPosts().subscribe(posts => {
        this.listadoPosts = posts;
      })
    }, 2000)
  }
}
