angular.module('loginModule', ['inscriptionModule']);

angular.module('loginModule').component('login', {

    controller: function loginCtrl() {
        var ctrl=this;

console.log("je suis la");
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