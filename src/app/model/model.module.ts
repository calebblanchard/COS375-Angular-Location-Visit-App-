import { NgModule } from '@angular/core';
import { LocationRepository } from './location.repository';
import { StaticDataSource } from './static.datasource';
import { VisitContainer } from './visitContainer.model';
import { Transfer } from './transfer.model';
import { TransferRepository } from './transfer.repository';
import { RestDataSource } from './rest.datasource';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

/*
Listing 9-10 registers the new service with the model feature module. It also adds a providers entry for
the RestDataSource class, which has been used only as a substitute for the StaticDataSource class in earlier
chapters. Since the AuthService class has a RestDataSource constructor parameter, it needs its own entry in
the module
 */
@NgModule({
  imports: [HttpModule],
  providers: [LocationRepository, VisitContainer, Transfer, TransferRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
   RestDataSource, AuthService]
})
export class ModelModule { }
