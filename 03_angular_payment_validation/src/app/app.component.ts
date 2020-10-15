import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "payment-form",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public paymentForm: FormGroup;
  public displayMessage: string;

  /**
   * @constructor
   * @description Creates a new instance of this component.
   * @param {FormBuilder} formBuilder - an abstraction class object to create a form group control for the contact form.
   */
  constructor(private formBuilder: FormBuilder) {
    /* Declare Reactive Form Group here */
    this.paymentForm = this.formBuilder.group({
      formControlUserName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]*$"),
        ]),
      ],
      // Could've been more advanced like https://stackoverflow.com/a/61875882/11127383, but it wasn't asked and the sample image is also showing fake number.
      formControlCardNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
      formControlExpirationCardMonth: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern("^(0?[1-9]|1[012])$"),
        ]),
      ],
      formControlExpirationCardYear: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern("^(202[0-9])$"),
        ]),
      ],
      formControlSecurityNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
    });
  }

  /**
   * @access public
   * @async
   * @description Perform certain actions on button submit of the payment form.
   * @function submitForm
   * @param {FormGroupDirective} formDirective - object used to reset validators.
   * @returns {void}
   */
  public submitForm(formDirective: FormGroupDirective): void {
    /* Change the display message on button click / submit form */
    Swal.fire("Success", "Paid, thx!", "success");
    formDirective.resetForm(); // Reset validators, i.e. to workaround #4190 (https://github.com/angular/components/issues/4190).
    this.paymentForm.reset(); // Reset form once user will click "Submit".
  }
}
