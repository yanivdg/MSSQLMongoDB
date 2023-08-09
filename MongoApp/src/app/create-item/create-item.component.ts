import { Component } from '@angular/core';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
})
export class CreateItemComponent {
  name: string = ''; // Declare name and description properties
  description: string = '';

  createItem() {
    // Your createItem logic
  }
}