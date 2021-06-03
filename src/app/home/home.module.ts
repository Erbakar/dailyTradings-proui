import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { CalendarsModule } from 'app/calendar/calendar.module';
import { HomeComponent } from './home.component';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChartistModule,
    NgbModule,
    MatchHeightModule,
    NgApexchartsModule,
    AngularResizedEventModule,
    CalendarModule,
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
