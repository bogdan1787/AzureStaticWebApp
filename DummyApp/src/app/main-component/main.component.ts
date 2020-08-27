import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  resultApi: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }


  click(): void {
    this.httpClient.get<any>('/api/function?name=test').subscribe(result =>
      {
          this.resultApi = result?.message?.toString();
      });
  }
}
