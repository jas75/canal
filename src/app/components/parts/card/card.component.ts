import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieEdit = new EventEmitter<Movie>();

// tslint:disable-next-line: no-inferrable-types
  editMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  editForm: FormGroup;
  wellSaved = false;


  ngOnInit() {
    this.editForm = this.formBuilder.group({
      genres: [this.movie.genres],
      startYear: [this.movie.startYear]
    });
  }

  onSubmit() {

    this.movie.genres = this.editForm.controls.genres.value;
    this.movie.startYear = this.editForm.controls.startYear.value;

    this.movieEdit.emit(this.movie);

    this.editMode = false;

    this.wellSaved = true;

    setTimeout(() => {
      this.wellSaved = false;
    }, 2000);
  }

}
