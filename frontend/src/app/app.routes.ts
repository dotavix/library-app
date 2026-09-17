import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () =>
      import('./components/book-list/book-list.component').then(
        (m) => m.BookListComponent,
      ),
  },
  {
    path: 'books/create',
    loadComponent: () =>
      import('./components/book-form/book-form.component').then(
        (m) => m.BookFormComponent,
      ),
  },
  {
    path: 'books/edit/:id',
    loadComponent: () =>
      import('./components/book-form/book-form.component').then(
        (m) => m.BookFormComponent,
      ),
  },
  {
    path: 'books/detail/:id',
    loadComponent: () =>
      import('./components/book-detail/book-detail.component').then(
        (m) => m.BookDetailComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'books',
  },
];
