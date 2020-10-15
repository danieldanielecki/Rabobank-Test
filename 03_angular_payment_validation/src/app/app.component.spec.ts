import { TestBed, async } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ControlContainer, FormGroupDirective } from "@angular/forms";
import { MaterialModule } from "./material.module";

describe("AppComponent", () => {
  const formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
      ],
      providers: [
        FormGroupDirective,
        { provide: ControlContainer, useValue: formGroupDirective },
      ],
    }).compileComponents();
  }));

  it("form should be invalid when empty", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.paymentForm.valid).toBeFalsy();
  });

  it("card number validation should work", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls["formControlCardNumber"].setValue(
      "1234123412345678"
    );
    expect(
      app.paymentForm.controls["formControlCardNumber"].valid
    ).toBeTruthy();
  }));

  it("expiration date validation should work", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls["formControlExpirationCardMonth"].setValue("134");
    app.paymentForm.controls["formControlExpirationCardYear"].setValue("2020");
    expect(
      app.paymentForm.controls["formControlExpirationCardMonth"].valid
    ).toBeFalsy();
    expect(
      app.paymentForm.controls["formControlExpirationCardYear"].valid
    ).toBeTruthy();
  }));

  it("cvv/cvc validation should work", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls["formControlSecurityNumber"].setValue("677");
    expect(
      app.paymentForm.controls["formControlSecurityNumber"].valid
    ).toBeTruthy();
  }));

  it("form should be valid", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls["formControlUserName"].setValue("Mathew Jerome");
    app.paymentForm.controls["formControlCardNumber"].setValue(
      "3456234567854567"
    );
    app.paymentForm.controls["formControlExpirationCardMonth"].setValue("11");
    app.paymentForm.controls["formControlExpirationCardYear"].setValue("2020");
    app.paymentForm.controls["formControlSecurityNumber"].setValue("677");
    expect(app.paymentForm.valid).toBeTruthy();
  }));

  it("form should be invalid", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls["formControlUserName"].setValue("Mathew Jerome");
    app.paymentForm.controls["formControlCardNumber"].setValue(
      "345623456784567"
    );
    app.paymentForm.controls["formControlExpirationCardMonth"].setValue("15");
    app.paymentForm.controls["formControlExpirationCardYear"].setValue("2017");
    app.paymentForm.controls["formControlSecurityNumber"].setValue("6776");
    expect(app.paymentForm.valid).toBeFalsy();
  }));
});
