import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  books: any;
  filters = {}

  constructor(public bookService: BooksService, public router: Router) {}

  ngOnInit() {
    this.getBooks(this.filters);
  }

  filterChanged(filters: any) {
    this.filters = filters;
  }

  getBooks(filter: any) {
    this.bookService.get(filter).subscribe((books) => {
      this.books = books;
    });
  }

  
}
