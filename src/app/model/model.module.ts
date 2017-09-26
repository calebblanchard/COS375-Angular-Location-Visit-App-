import { NgModule } from '@angular/core';
import { LocationRepository } from './location.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
	providers: [LocationRepository, StaticDataSource]
})
export class ModelModule { }