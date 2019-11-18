import { NgModule } from '@angular/core';
import { LocationRepository } from './location.repository';
import { StaticDataSource } from './static.datasource';
import { VisitContainer } from './visitContainer.model';
import { Transfer } from './transfer.model';
import { TransferRepository } from './transfer.repository';
import { RestDataSource } from './rest.datasource';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpModule],
  providers: [LocationRepository, VisitContainer, Transfer, TransferRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
   RestDataSource, AuthService]
})
export class ModelModule { }
