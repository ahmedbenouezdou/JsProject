angular.module('bookModule', ['panierModule']);

angular.module('bookModule').controller('bookCrt', function ($scope, BooksListService, $cookieStore, OffreService) {


    function init() {
        BooksListService.initListBookServer();
        // $scope.listBook = BooksListService.getList();
        $scope.panier = [];
        $scope.quantite = {};

        BooksListService.setList().then(function (dataBook) {

            $scope.panier = OffreService.nombreProduit();

            dataBook.forEach(function (elementBook, indexBook) {
                $scope.quantite[indexBook] = 0;
                elementBook.disable=true;
            });

            if($scope.panier.length!=0){
                dataBook.forEach(function (elementBook, indexBook) {
                    $scope.panier.forEach(function (elementPanier) {
                        if (angular.equals(elementPanier.book.isbn, elementBook.isbn)) {
                            $scope.quantite[indexBook] = elementPanier.quantiteBook;
                            elementBook.disable=true;
                        }
                    })
                });
            }

            $scope.listBook = dataBook;


        });


    }

    $scope.addPanier = function (index) {
        //index par rapport a la liste des produits et pas par rapport a $rootscope

            var existe = true;
            var position = 0;
            for (var j = 0; j < $scope.panier.length; j++) {
                if (angular.equals($scope.panier[j].book.isbn, BooksListService.getArticle(index).isbn)) {
                    existe = false;
                    position = j;
                }
            }
            //si l'article n'existe pas on ajoute dans le panier
            if (existe) {
                $scope.panier.push({
                    'book': BooksListService.getArticle(index),
                    'quantiteBook': $scope.quantite[index]
                });
                $cookieStore.put('listAddPanier', $scope.panier);
            } else {
                //sinon si l'article existe modifier quantite
                if (!angular.equals($scope.panier[position].quantiteBook, $scope.quantite[index])) {
                    $scope.panier[position].quantiteBook = $scope.quantite[index];
                    $cookieStore.put('listAddPanier', $scope.panier);

                }
            }

    };

    $scope.activePanier=function activePanier(index){
        if ($scope.quantite[index] === 0) {
            $scope.listBook[index].disable=true;
        }else{
            $scope.listBook[index].disable=false;

        }
    };
    init();
});


angular.module('bookModule').service('BooksListService', function ($http, $q) {

    var listBookServer = [];

    this.setList = function setList() {
        var deferred = $q.defer();

        $http.get('listBook/').then(function (data) {
                listBookServer=data.data
                deferred.resolve(data.data);
            },
            function (httpError) {
                deferred.reject(httpError.status + " : " + httpError.data);
            });

        return deferred.promise;
    };

    this.getArticle = function getArticle(index) {
        return listBookServer[index];
    };

    this.getList = function getList() {
        return listBookServer;
    };

    this.initListBookServer = function initListBookServer() {
        listBookServer = [];
    }

});