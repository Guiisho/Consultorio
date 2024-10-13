import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'; 


/* Modulos */
import { getAuth, provideAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAINrap-l8ajdQNdlDk2nKYQjSE1kWFugA",
  authDomain: "consultorio-firebase-aut-4c49a.firebaseapp.com",
  projectId: "consultorio-firebase-aut-4c49a",
  storageBucket: "consultorio-firebase-aut-4c49a.appspot.com",
  messagingSenderId: "341509019103",
  appId: "1:341509019103:web:178e9d8e196343a6b0206a"
};

export const appConfig: ApplicationConfig= {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    ([provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())

    ])
  ]
}

@NgModule({
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireAuthModule,
  ],

})
export class AppModule {}