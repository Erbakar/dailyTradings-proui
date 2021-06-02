import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DetailRoutingModule } from "./detail-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatchHeightModule } from "../shared/directives/match-height.directive";



@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    ChartistModule,
    NgbModule,
    MatchHeightModule,
    NgApexchartsModule,
    AngularResizedEventModule,
  ],
  exports: [],
  declarations: [
  ],
  providers: [],
})
export class DetailModule { }
