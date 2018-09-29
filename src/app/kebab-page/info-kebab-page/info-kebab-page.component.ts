import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {KebabService} from '../services/kebab.service';
import {divTrigger} from '../kebab.animations';
import {Kebab} from '../interface/kebab';
import {KebabPageComponent} from '../kebab-page.component';


@Component({
  selector: 'app-info-kebab-page',
  templateUrl: './info-kebab-page.component.html',
  styleUrls: ['./info-kebab-page.component.css'],
  animations:[divTrigger]
})
export class InfoKebabPageComponent implements OnInit {

  id:number;
  name: string;
  price: number;
  img:string;


  isHide = false;


  kebabs: Kebab[] = [];

  constructor(private route: ActivatedRoute, private kebabService: KebabService, private compNg1: KebabPageComponent) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.price = this.route.snapshot.queryParams['price'];

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.price = params['price'];
    });
  }

  changeKebab(id) {
    this.kebabService.changeKebab(this.id, this.name, this.price).subscribe((data) => {
      this.kebabs.push(data);
      this.compNg1.ngOnInit();

    });
    this.isHide = false;
  }
  removeKebab(id) {
    this.kebabService.deleteKebab(this.id).subscribe((data) => {
      this.compNg1.ngOnInit();

    });
  }
}
