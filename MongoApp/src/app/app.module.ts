import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ReadItemsComponent } from './read-items/read-items.component';

const appRoutes: Routes = [
  // Define your routes here
  { path: 'create', component: CreateItemComponent },
  { path: 'read', component: ReadItemsComponent },
  // Add more routes as needed
  { path: '', redirectTo: '/read', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)], // Add RouterModule with routes here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
