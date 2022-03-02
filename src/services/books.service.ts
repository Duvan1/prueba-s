import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  get(filters?: any): Observable<any[]> {
    return this.http
      .get<any[]>('https://fakerestapi.azurewebsites.net/api/v1/Books', {
        params: filters as any,
      })
      .pipe(
        map((books) => books.sort((a, b) => a.title.localeCompare(b.title)))
      );
  }
}
