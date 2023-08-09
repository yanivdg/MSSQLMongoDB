import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
})
export class CreateItemComponent {
  constructor(private http: HttpClient) {}

  name = '';
  description = '';

  createItem() {
    const newItem = {
      name: this.name,
      description: this.description,
    };

    this.http.post('/api/items', newItem).subscribe(() => {
      alert('Item created successfully');
      this.name = '';
      this.description = '';
    });
  }
}
