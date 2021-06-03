import { Component, OnInit } from '@angular/core';
import { lineChartMulti} from '../shared/data/ngxChart';
import * as chartsData from '../shared/configs/ngx-charts.config';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  showStories = false;

  lineChartMulti = lineChartMulti;
  //Line Charts

  lineChartView: any[] = chartsData.lineChartView;

  // options
  lineChartShowXAxis = chartsData.lineChartShowXAxis;
  lineChartShowYAxis = chartsData.lineChartShowYAxis;
  lineChartGradient = chartsData.lineChartGradient;
  lineChartShowLegend = false;
  lineChartShowXAxisLabel = false;
  lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
  lineChartShowYAxisLabel = false;
  lineChartYAxisLabel = chartsData.lineChartYAxisLabel;

  lineChartColorScheme = chartsData.lineChartColorScheme;

  // line, area
  lineChartAutoScale = chartsData.lineChartAutoScale;
  lineChartLineInterpolation = chartsData.lineChartLineInterpolation;

  constructor() {
      Object.assign(this, { lineChartMulti })
  }

  onSelect(event) {
      console.log(event);
  }

  ngOnInit(): void {
  }

}
