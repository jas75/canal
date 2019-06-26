import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonService } from 'src/app/services/json.service';
import { Movie } from 'src/app/interfaces/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private jsonService: JsonService
  ) { }

  searchForm: FormGroup;
  dataSet: Array<Movie>;
  arrayToDisplay: Array<Movie>;

  ngOnInit() {
    this.jsonService.getAll().subscribe(data => {
      this.dataSet = data;
      this.arrayToDisplay = data;
    });

    this.searchForm = this.formBuilder.group({
      title: [''],
      startYear: ['']
    });
  }

  onChange(event) {
    this.arrayToDisplay = this.dataSet;

    const year = this.searchForm.controls.startYear.value;
    const title = this.searchForm.controls.title.value;
    if (title && year) {
      this.arrayToDisplay = this.dataSet.filter(movie => {
        return movie.primaryTitle.includes(title) || movie.originalTitle.includes(title) && movie.startYear == year;
      });
    } else if (title) {
        this.arrayToDisplay = this.dataSet.filter(movie => {
          return movie.primaryTitle.includes(title) || movie.originalTitle.includes(title) ;
        });
    } else if (year) {
        this.arrayToDisplay = this.dataSet.filter(movie => {
          return movie.startYear == year;
        });
    }
  }

}
