import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ViewComponent } from './view.component';
import { CounterDirective } from "./counter.directive";

@NgModule({
	imports: [ModelModule, BrowserModule, FormsModule],
	declarations: [ViewComponent, CounterDirective],
	exports: [ViewComponent]
})
export class ViewModule { }