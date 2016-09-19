import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'panier-app',
    templateUrl: 'src/app/panier/panier.html',
})

export class PanierComponent {

    panier:Array<any>;

    constructor( private router: Router) {
        this.panier = [{
            book: {
                title: "blabal bla",
                price: 20
            },
            quantiteBook: 4

        },{
                book: {
                    title: "blabal bla",
                    price: 20
                },
                quantiteBook: 4

            }];
    }


    gotoDetail(): void {
        let link = ['/book'];
        this.router.navigate(link);
    }
}