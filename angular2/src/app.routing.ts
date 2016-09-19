import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent }      from './app/book/book.component';
import { PanierComponent }      from './app/panier/panier.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'book',
        pathMatch: 'full'
    },
    {
        path: 'book',
        component: BookComponent
    },
    {
        path: 'panier',
        component: PanierComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

