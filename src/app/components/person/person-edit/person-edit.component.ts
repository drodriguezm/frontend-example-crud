import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent {
  person: PersonModel = new PersonModel();
  date: Date | undefined;
  es: object;

  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  miForm: FormGroup = this.fb.group({
    firstName: [
      '', //valor asignado
      [Validators.required, Validators.minLength(3)],
    ], //validaciones sincronas
    email: [, [Validators.required, Validators.email]],
  });

  campoInValido(campo: string) {
    return (
      this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
    );
  }

  ngOnInit(): void {
    this.personService
      .get(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (response: PersonModel) => {
          console.log('response', response);
          //seteamos el id de la persona
          const idPerson = this.activatedRoute.snapshot.params['id'];
          localStorage.setItem('idPerson', idPerson);
          this.miForm.patchValue({ firstName: response.firstName, email: response.email });
        },
        error: (error: HttpErrorResponse) => {
          console.log('error ' + error.status);
        },
      });
  }

  public actualizar() {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      console.log(
        'ingrese lo camos',
        this.miForm.markAllAsTouched()
      );
      return;
    }
    //obtenemos el id que esta en el localstorage
    const idPerson = localStorage.getItem('idPerson');

    this.person.id = Number(idPerson);
    //CAPTURAMOS LOS VALORES DEL FORMS REACTIVO PARA SETEAR EL MODELO
    this.person.firstName = this.miForm.value['firstName'];
    this.person.email = this.miForm.value['email'];

    console.log('person actualizar', this.person);

    this.personService.update(this.person).subscribe({
      next: (response: PersonModel) => {
        this.salir();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.salir();
      },
    });
  }

  public eliminar() {
    //obtenemos el id que esta en el localstorage
    const idPerson = localStorage.getItem('idPerson');
    this.person.id = Number(idPerson);

    this.personService.delete(this.person.id).subscribe({
      next: (response) => {
        localStorage.removeItem('idPerson');
        this.salir();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error ' + error.status);
      },
    });
  }

  public salir() {
    this.router.navigate(['persons']);
  }
}
