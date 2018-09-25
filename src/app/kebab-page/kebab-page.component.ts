import { Component, OnInit } from '@angular/core';
import {KebabService} from '../kebab.service';
import {Kebab} from '../kebab';
import {divTrigger} from './kebab.animations';


@Component({
  selector: 'app-kebab-page',
  templateUrl: './kebab-page.component.html',
  styleUrls: ['./kebab-page.component.css'],
  animations:[divTrigger]
})
export class KebabPageComponent implements OnInit {

  isVisible = false;

  kebabs: Kebab[];
  kebabName: string;
  kebabPrice: string;

  constructor(private kebabService: KebabService) {}



  ngOnInit() {
    this.kebabService.getKebabs().subscribe((data: Kebab[]) => {
      this.kebabs = data;
    });
  }
  addKebab() {
    this.kebabService.addKebab(this.kebabName, this.kebabPrice).subscribe((data) => {
      this.kebabs.push(data);
    });
    this.kebabName = '';
    this.kebabPrice = '';

  }

}
