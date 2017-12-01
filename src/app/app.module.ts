import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { ViewComponent } from './view/view.component';
import { TransferComponent } from './view/transfer.component';
import { VisitDetailComponent } from './view/visitDetail.component';
import { RouterModule } from '@angular/router';
import { ViewFirstGuard } from './viewFirst.guard';

/*
Dynamically loaded modules are managed through the routing configuration, which triggers the loading
process when the application navigates to a specific URL. Listing 9-6 extends the routing configuration of the
application so that the /admin URL will load the administration feature module.

The new route tells Angular that when the application navigates to the /admin URL, it should load a
feature module defined by a class called AdminModule from the /app/admin/admin.module.ts file. When
Angular processes the admin module, it will incorporate the routing information it contains into the overall
set of routes and complete the navigation.
 */

@NgModule({
  imports: [BrowserModule, ViewModule,
    RouterModule.forRoot([
      {
        path: 'view', component: ViewComponent,
        canActivate: [ViewFirstGuard]
      },
      {
        path: 'visit', component: VisitDetailComponent,
        canActivate: [ViewFirstGuard]
      },
      {
        path: 'transfer', component: TransferComponent,
        canActivate: [ViewFirstGuard]
      },
      {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [ViewFirstGuard]
      },
      { path: '**', redirectTo: '/view' }
      ]
    )
  ],
  providers: [ViewFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
