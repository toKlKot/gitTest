import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-info-kebab-page',
  templateUrl: './info-kebab-page.component.html',
  styleUrls: ['./info-kebab-page.component.css']
})
export class InfoKebabPageComponent implements OnInit {

  id: string;
  name: string;
  price: string;
  hash: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  this.name = this.route.snapshot.params['name'];
  this.price = this.route.snapshot.queryParams['price'];
  this.hash = this.route.snapshot.fragment;

  this.route.params.subscribe((params: Params) => {
    this.id = params['id'];
    this.name = params['name'];
  });
  this.route.queryParams.subscribe((params: Params) => {
    this.price = params['price'];
  });
  }

}
