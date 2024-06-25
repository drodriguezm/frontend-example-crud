import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
      persons:PersonModel[]=[];
      newPersons:PersonModel[]=[];

  constructor(private personService:PersonService){ }

   ngOnInit() {
    this.getPersons();
   }

    getPersons() {

        this.personService.getAll().subscribe({
          next:(response:PersonModel[]) =>{
            this.persons=response;
        },error:(error:HttpErrorResponse) =>{
            console.log(error.status);
        },});

    }


}
