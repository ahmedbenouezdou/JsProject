
class loginCtrl {

    constructor() {
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

export default AddBookController;
