import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
     provideFirebaseApp(() => initializeApp({
      "projectId":"consultorio-firebase-aut-4c49a",
      "appId":"1:341509019103:web:178e9d8e196343a6b0206a",
      "storageBucket":"consultorio-firebase-aut-4c49a.appspot.com",
      "apiKey":"AIzaSyAINrap-l8ajdQNdlDk2nKYQjSE1kWFugA",
      "authDomain":"consultorio-firebase-aut-4c49a.firebaseapp.com",
      "messagingSenderId":"341509019103"})),
       provideAuth(() => getAuth())]
};
