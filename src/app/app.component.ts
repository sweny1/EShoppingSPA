import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EShopping';

  constructor(private http : HttpClient){ }

  ngOnInit(): void {
    this.http.get('http://localhost:9010/Catalog/GetProductsByBrandName/Adidas').subscribe({
      next: respose => console.log(respose),
      error: Error => console.log(Error),
      complete: () => console.log("all products fetched successfully.")
  });
  }
}
