import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      title: [''],
      startYear: ['']
    });
  }

}
