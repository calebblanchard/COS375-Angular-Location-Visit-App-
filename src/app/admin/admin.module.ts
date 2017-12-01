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

/*
The main difference when creating a dynamically loaded module is that the feature module must be
self-contained and include all the information that Angular requires, including the routing URLs that are
supported and the components they display.

The RouterModule.forChild method is used to define the routing configuration for the feature module,
which is then included in the module’s imports property.

The prohibition on exporting classes from a dynamically loaded module doesn’t apply to imports. This
module relies on the functionality in the model feature module, which has been added to the module’s
imports so that components can access the model classes and the repositories.

Individual routes can be extended using the children property, which is used to define routes that will
target a nested router-outlet element, which I describe in Chapter 25. As you will see shortly, components
can get details of the active route from Angular so they can adapt their behavior. Routes can include route
parameters, such as :mode or :id, that match any URL segment and that can be used to provide information
to components that can be used to change their behavior.

When all the changes have been saved, click the Admin button and authenticate as admin with the
password secret. You will see the new layout, as shown in Figure 9-4. Clicking the Products and Orders
buttons will change the component displayed by the router-outlet element from Listing 9-20, and clicking
the Logout button will exit the administration area.
*/
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
