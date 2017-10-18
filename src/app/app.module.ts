import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { ViewComponent } from './view/view.component';
import { TransferComponent } from './view/transfer.component';
import { VisitDetailComponent } from './view/visitDetail.component';
import { RouterModule } from '@angular/router';
import { ViewFirstGuard } from './viewFirst.guard';

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
      { path: '**', redirectTo: '/view' }
      ]
    )
  ],
  providers: [ViewFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
