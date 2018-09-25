import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Kebab} from '../kebab';
import {KebabService} from '../kebab.service';
import {divTrigger} from '../kebab-page/kebab.animations';

@Component({
  selector: 'app-info-kebab-page',
  templateUrl: './info-kebab-page.component.html',
  styleUrls: ['./info-kebab-page.component.css'],
  animations:[divTrigger]
})
export class InfoKebabPageComponent implements OnInit {

  id:string;
  name: string;
  price: string;
  hash: string;


  isHide = false;


  kebabs: Kebab[];


  constructor(private route: ActivatedRoute, private kebabService: KebabService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.price = this.route.snapshot.queryParams['price'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params) => {

      this.name = params['name'];
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.price = params['price'];
    });
  }

  changeKebab(id) {
    this.kebabService.changeKebab(id, this.name, this.price).subscribe((data) => {

    });
    this.isHide = false;
  }
  removeKebab(id) {
    this.kebabService.deleteKebab(id).subscribe((data) => {
      
    });
  }
}
