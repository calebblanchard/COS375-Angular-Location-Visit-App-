import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { LocationTableComponent } from './locationTable.component';
import { LocationEditorComponent } from './locationEditor.component';
import { TransferTableComponent } from './transferTable.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: 'locations/:mode/:id', component: LocationEditorComponent },
      { path: 'locations/:mode', component: LocationEditorComponent },
      { path: 'locations', component: LocationTableComponent },
      { path: 'transfers', component: TransferTableComponent },
      { path: '**', redirectTo: 'locations' }
    ]
  },
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [AuthComponent, AdminComponent,
    LocationTableComponent, LocationEditorComponent, TransferTableComponent]
})
export class AdminModule { }
