

const inscription = {
    templateURL:'./inscription.html',
    controller: function () {

        constructor(){
        }

        init(){
            this.message = "";

            this.user = {
                username: "",
                password: "",
                confirmPassword: "",
                email:""
            };
        }

        submitForm(){
            console.log(this.user);
        }
    }
};



angular.module('inscriptionModule')
    .component('inscription', inscription);