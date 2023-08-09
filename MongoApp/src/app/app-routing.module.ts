import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { ReadItemsComponent } from './read-items/read-items.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

const routes: Routes = [
  { path: 'create', component: CreateItemComponent },
  { path: 'read', component: ReadItemsComponent },
  { path: 'update', component: UpdateItemComponent },
  { path: 'delete', component: DeleteItemComponent },
  { path: '', redirectTo: '/read', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
