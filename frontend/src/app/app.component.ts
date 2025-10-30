import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class AppComponent implements OnInit {
  title = 'photofolio-frontend';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/hello', { responseType: 'text' }).subscribe(data => {
      this.message = data;
    });
  }
}
