import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ViewComponent } from './view.component';
import { CounterDirective } from './counter.directive';
import { VisitSummaryComponent } from './visitSummary.component';
import { VisitDetailComponent } from './visitDetail.component';
import { TransferComponent } from './transfer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [ViewComponent, CounterDirective, VisitSummaryComponent,
    VisitDetailComponent, TransferComponent],
  exports: [ViewComponent, VisitDetailComponent, TransferComponent]
})
export class ViewModule { }
