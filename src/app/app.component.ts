import { Component, OnInit } from '@angular/core';
import { WorldbankService } from './worldbank/worldbank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private wbs_: WorldbankService) {
  }

  public ngOnInit() {
    this.wbs_.get().subscribe(console.log);
  }
}
