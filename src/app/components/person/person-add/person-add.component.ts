import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css'],
})
export class PersonAddComponent {
  person: PersonModel = new PersonModel();

  constructor(
    private personService: PersonService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  miForm: FormGroup = this.fb.group({
    firstName: [
      ,[Validators.required, Validators.minLength(3)],
    ], //validaciones sincronas
    email: [, [Validators.required, Validators.email]],
  });

  campoInValido(campo: string) {
    return (
      this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
    );
  }

  public agregar() {

      if (this.miForm.invalid) {
        this.miForm.markAllAsTouched();
        console.log('ingrese lo camos', this.miForm.markAllAsTouched());
        return;
      }

    this.person.firstName = this.miForm.value['firstName'];
    this.person.email = this.miForm.value['email'];

    this.personService.add(this.person).subscribe({
      next: (response: PersonModel) => {
        console.log(response.id);
        this.salir();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.status);
        this.salir();
      },
    });
  }

  public salir() {
    this.router.navigate(['persons']);
  }
}

