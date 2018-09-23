import { Component, OnInit } from '@angular/core';
import {KebabService} from '../kebab.service';
import {Kebab} from '../kebab';



@Component({
  selector: 'app-kebab-page',
  templateUrl: './kebab-page.component.html',
  styleUrls: ['./kebab-page.component.css']
})
export class KebabPageComponent implements OnInit {

  kebabs: Kebab[];
  kebabName: string;
  kebabPrice: number;

  constructor(private kebabService: KebabService) {}

  ngOnInit() {
    this.kebabService.getKebabs().subscribe((data: Kebab[]) => {
      this.kebabs = data;
    });
  }
  addKebab() {
    this.kebabService.addKebab(this.kebabName, this.kebabPrice).subscribe((data: Kebab[]) => {
      this.kebabs.push(data);
      console.log(data);
    });
    this.kebabName = '';
  }

}
