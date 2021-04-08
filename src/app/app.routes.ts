import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: "", redirectTo: "/login", pathMatch: "full" },
            { path: '**', pathMatch: 'full', redirectTo: 'home' }
        ]
    },
    { path: 'login', component: LoginComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);