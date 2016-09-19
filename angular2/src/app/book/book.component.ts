import { Component,OnInit } from '@angular/core';

import { BookService } from './book.service';

import { Book } from './book';

@Component({
    selector: 'book-app',
    templateUrl: 'src/app/book/book.html',
})
export class BookComponent implements OnInit{

    listBook:Array<any>;
    quantite:Array<any>;

    constructor() {

    }

    ngOnInit(): void {
        this.listBook = [{
            isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
            title: 'Henri Potter à l\'école des sorciers',
            price: '35',
            cover: 'http://localhost:3000/src/img/hp0.jpg'
        },
            {
                isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
                title: 'Henri Potter et la Chambre des secrets',
                price: '30',
                cover: 'http://localhost:3000/src/img/hp1.jpg'
            }
        ];
        this.quantite=[];
    }

}
