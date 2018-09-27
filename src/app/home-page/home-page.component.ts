import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
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

  ngOnInit() {
    this.kebabService.getKebabs().subscribe((data: Kebab[]) => {
      this.kebabs = data;
    });
  }
}

