"user strict"

exports.getAllList = function getAllList(req, response) {

    var listBookServer = [
        {
            "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
            "title": "Harry Potter à l'école des sorciers",
            "price": 35,
            "cover": "http://localhost:8085//img/hp0.jpg",
            "auteur": "J. K. Rowling",
            genre: "Roman Fantasy",
            resume: "Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent," +
            "voit son existence bouleversée. Un géant vient le chercher pour l'emmener à Poudlard, la célèbre école de " +
            "sorcellerie où une place l'attend depuis toujours. Voler sur des balais, jeter des sorts, combattre " +
            "les Trolls : Harry Potter se révèle un sorcier vraiment doué. Mais quel mystère entoure donc " +
            "sa naissance et qui est l'effroyable V..., le mage dont personne n'ose prononcer le nom ?"
        },
        {
            "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
            "title": "Harry Potter et la Chambre des secrets",
            "price": 30,
            "cover": "http://localhost:8085/img/hp1.jpg",
            auteur: "J.K. Rowling",
            genre: "Roman Fantasy",
            resume: "Une rentrée fracassante en voiture volante, une étrange malédiction qui s’abat sur les élèves, cette deuxième année à l’école des sorciers ne s’annonce pas de tout repos ! Une rentrée fracassante en voiture volante, une étrange malédiction qui s'abat sur les élèves, cette deuxième année à l'école des sorciers ne s'annonce pas de tout repos ! Entre les cours de potions magiques, les matches de Quidditch et les combats de mauvais sorts, Harry et ses amis Ron et Hermione trouveront-ils le temps de percer le mystère de la Chambre des Secrets ? Le deuxième volume des aventures de Harry Potter : un livre magique pour sorciers confirmés."
        },
        {
            "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
            "title": "Harry Potter et le Prisonnier d'Azkaban",
            "price": 30,
            "cover": "http://localhost:8085/img/hp2.jpg",
            auteur: "J.K. Rowling",
            genre: "Roman Fantasy",
            resume: "Sirius Black, le dangereux criminel qui s'est échappé de la forteresse d'Azkaban, recherche Harry Potter. C'est donc sous bonne garde que l'apprenti sorcier fait sa troisième rentrée à Poudlard. Au programme : des cours de divination, la fabrication d'une potion de ratatinage, le dressage des hippogriffes... Mais Harry est-il vraiment à l'abri du danger qui le menace ?"
        },
        {
            "isbn": "c30968db-cb1d-442e-ad0f-80e37c077f89",
            "title": "Harry Potter et la Coupe de feu",
            "price": 29,
            "cover": "http://localhost:8085/img/hp3.jpg",
            auteur: "J.K. Rowling",
            genre: "Roman Fantasy",
            resume: "Harry Potter a quatorze ans et entre en quatrième année au collège de Poudlard. Une grande nouvelle attend Harry, Ron et Hermione à leur arrivée : la tenue d'un tournoi de magie exceptionnel entre les plus célèbres écoles de sorcellerie. Déjà les délégations étrangères font leur entrée. Harry se réjouit... Trop vite. Il va se trouver plongé au cœur des évènements les plus dramatiques qu'il ait jamais eu à affronter."
        },
        {
            "isbn": "78ee5f25-b84f-45f7-bf33-6c7b30f1b502",
            "title": "Herry Potter et l'Ordre du phénix",
            "price": 28,
            "cover": "http://localhost:8085/img/hp4.jpg",
            auteur: "J.K. Rowling",
            genre: "Roman Fantasy",
            resume: "À quinze ans, Harry entre en cinquième année à Poudlard mais il n'a jamais été aussi anxieux. L'adolescence, la perspective des examens et ces étranges cauchemars... Car Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom est de retour. Le ministère de la Magie ne semble pas prendre cette menace au sérieux, contrairement à Dumbledore, le directeur du collège de Poudlard. La résistance s'organise alors autour de Harry qui va devoir compter sur le courage et la fidélité de ses amis de toujours..."
        },
        {
            "isbn": "cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6",
            "title": "Harry Potter et le Prince de sang-mélé",
            "price": 30,
            "cover": "http://localhost:8085/img/hp5.jpg",
            auteur: "J.K. Rowling",
            genre: "Roman Fantasy",
            resume: "Dans un monde de plus en plus inquiétant, Harry se prépare à retrouver Ron et Hermione. Bientôt, ce sera la rentrée à Poudlard, avec les autres étudiants de sixième année. Mais pourquoi Dumbledore vient-il en personne chercher Harry chez les Dursley ? Dans quels extraordinaires voyages au cœur de la mémoire va-t-il l'entraîner ?"
        },
        {
            "isbn": "bbcee412-be64-4a0c-bf1e-315977acd924",
            "title": "Harry Potter et les Reliques de la Mort",
            "price": 35,
            "cover": "http://localhost:8085/img/hp6.jpg",
            auteur: "J.K. Rowling",
            genre: "Roman Fantasy",
            resume: "Cette année, Harry a dix-sept ans et ne retourne pas à Poudlard. Avec Ron et Hermione, il se consacre à la dernière mission confiée par Dumbledore. Mais le Seigneur des Ténèbres règne en maître. Traqués, les trois fidèles amis sont contraints à la clandestinité. D'épreuves en révélations, le courage, le choix et les sacrifices de Harry seront déterminants dans la lutte contre les forces du Mal."
        }
    ];

    response.end(JSON.stringify(listBookServer));
};


exports.getOffre = function getOffre(req, response) {
    console.log(req.params.idisbn);
    var offreBook = [{
        "offers": [{
            "type": "percentage",
            "value": 8
        },
            {
                "type": "minus",
                "value": 30
            },
            {
                "type": "slice",
                "sliceValue": 80,
                "value": 14
            }
        ]
    }, {
        "offers": [
            {
                "type": "percentage",
                "value": 4
            },
            {
                "type": "minus",
                "value": 15
            },
            {
                "type": "slice",
                "sliceValue": 100,
                "value": 12
            }
        ]
    }, {
        "offers": [
            {
                "type": "percentage",
                "value": 4
            }
        ]
    }];
    var nbIdIsbn = req.params.idisbn.split(",").length;
    if (nbIdIsbn == 1) {
        response.end(JSON.stringify(offreBook[2]));
    } else {
        if (nbIdIsbn > 1 && nbIdIsbn < 4) {
            response.end(JSON.stringify(offreBook[1]));

        } else {
            if (nbIdIsbn > 3) {
                response.end(JSON.stringify(offreBook[0]));
            }
        }
    }
};
