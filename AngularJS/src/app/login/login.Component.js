angular.module('loginModule', ['inscriptionModule']);

angular.module('loginModule').component('login', {
    templateUrl: 'app/login/login.html',
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