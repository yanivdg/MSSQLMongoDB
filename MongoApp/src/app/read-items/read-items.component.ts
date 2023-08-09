import { Component } from '@angular/core';

@Component({
  selector: 'app-read-items',
  templateUrl: './read-items.component.html',
})
export class ReadItemsComponent {
  items: any[] = []; // Initialize items property

  // Fetch items from your backend and assign them to the items property
}
