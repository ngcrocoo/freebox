import createCookie from "./index.js"
import { LoginCall } from "./index.js";

export class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit() {
        let self = this; // setup calls to the "this" values of the class described in the constructor

        // add a "submit" event listener to the form
        this.form.addEventListener("submit", (e) => {
            // remove default functionality 
            e.preventDefault(); 
            var error = 0;
            // loop through the fields and check them against a function for validation
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) == false) {
                    // if a field does not validate, auto-increment our error integer
                    error++;
                }
            });
            // if everything validates, error will be 0 and can continue
            if (error == 0) {
                LoginCall(this.form[0].value, this.form[1].value)
            }
        });
    }

    validateFields(field) {
        // remove any whitespace and check to see if the field is blank, if so return false
        if (field.value.trim() === "") {
            // set the status based on the field, the field label, and if it is an error message
            this.setStatus(
                field,
                `
                                                    $ { field.previousElementSibling.innerText }
                                                    darf nicht leer sein `,
                "error"
            );
            return false;
        } else {
            // if the field is not blank, check to see if it is password
            if (field.type == "password") {
                // if it is a password, check to see if it meets our minimum character requirement
                if (field.value.length < 5) {
                    // set the status based on the field, the field label, and if it is an error message
                    this.setStatus(
                        field,
                        `
                                                    $ { field.previousElementSibling.innerText }
                                                    mindestens fünf Zeichen `,
                        "error"
                    );
                    return false;
                } else {
                    // set the status based on the field without text and return a success message
                    this.setStatus(field, null, "success");
                    return true;
                }
            } else {
                // set the status based on the field without text and return a success message
                this.setStatus(field, null, "success");
                return true;
            }
        }
    }
    setStatus(field, message, status) {
        // create variable to hold message
        const errorMessage = field.parentElement.querySelector(".error-message");

        // if success, remove messages and error classes
        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }
        // if error, add messages and add error classes
        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }

}