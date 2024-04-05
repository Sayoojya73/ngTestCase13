
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Reactive Form';
 
  bookForm: FormGroup = this.formBuilder.group({
    bookName: ['', Validators.required],
    author: ['', Validators.required],
    publication: [''],
    price: ['', Validators.required],
    genre: [''],
    publishedDate: [''],
    country: [''],
    description: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value); // You can replace this with sending data to your backend or storing in local storage
      this.bookForm.reset(); // Reset the form after submission
    } else {
      // Handle form validation errors
      console.log("Form is not valid");
    }
  }
}
