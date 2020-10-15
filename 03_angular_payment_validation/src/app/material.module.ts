import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  exports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
