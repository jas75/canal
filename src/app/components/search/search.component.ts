import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/Movie';
import { JsonService } from 'src/app/services/json.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private jsonService: JsonService
  ) { }

  dataSet: Array<Movie>;

  ngOnInit() {
    this.jsonService.getAll().subscribe(data => {
      this.dataSet = data;
    });
  }


}
