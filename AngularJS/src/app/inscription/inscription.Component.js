angular.module('inscriptionModule', []);

angular.module('inscriptionModule').component('inscription', {
    templateUrl: 'app/inscription/inscription.html',
    controller: function loginCtrl() {
        var ctrl=this;


        ctrl.message = "";

        ctrl.user = {
            username: "",
            password: "",
            confirmPassword: "",
            email:""
        };

        ctrl.submitForm=function submitForm(){
            console.log(ctrl.user);

        }
    }
});