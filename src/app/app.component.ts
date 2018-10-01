import { Component } from '@angular/core';
import {Kebab} from './kebab-page/interface/kebab';
import {KebabService} from './kebab-page/services/kebab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fastFood';

  kebabs: Kebab[] = [];

  constructor(private kebabService: KebabService) {
  }

  ngOnInit() {
    this.kebabService.getKebabs().subscribe((data: Kebab[]) => {
      this.kebabs = data;

    });
  }
}
