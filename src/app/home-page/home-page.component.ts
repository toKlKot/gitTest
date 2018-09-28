import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Kebab} from '../kebab-page/interface/kebab';
import {KebabService} from '../kebab-page/services/kebab.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  kebabs: Kebab[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private kebabService: KebabService) {

  }

  getPrev(){
    this.kebabs.unshift(this.kebabs[4]);
    this.kebabs.pop();
  }

  getNext(){
    this.kebabs.push(this.kebabs[0]);
    this.kebabs.shift();
  }

  ngOnInit() {
    this.kebabService.getKebabs().subscribe((data: Kebab[]) => {
      this.kebabs = data;
    });
    length = this.kebabs.length;
  }
}

