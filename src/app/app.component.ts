import { Component } from '@angular/core';
import { ServiceService } from '../app/spaceX.service';
import { ISpacexSummary } from '../app/spaceXSummary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceLaunchAngularApp';

  spaceSummary: ISpacexSummary[];
  isSelected: boolean;
  isSelect: boolean;
  isSelectedAgain: boolean;
  btnLaunchSuccessStyle: string;
  btnLaunchFailStyle: string;
  btnLandSuccessStyle: string;
  btnLandFailStyle: string;
  btnDateStyle: string;


  constructor(private _SpaceSummaryService: ServiceService ) {
    this.btnLaunchSuccessStyle = "btn";
    this.btnLaunchFailStyle = "btn";
    this.btnLandSuccessStyle = "btn";
    this.btnLandFailStyle = "btn";
    this.btnDateStyle = "btn";
   }


   ngOnInit() {
    // {
    // this.title.setTitle('this.pageTitle');
    // this.meta.addTag({ keywords: 'single page application, ssr ,angular' });
    // this.meta.addTag({ description: 'list og Space X launch Program App' });
    // this.meta.addTag({ content: 'list of Space X launch Program App with launch dates' });
    // }
    this._SpaceSummaryService.getSelectedEventDetails()
      .subscribe(data => this.spaceSummary = data);
  }
  public getUpdatedValue() {
    if (this.isSelect && !this.isSelected && !this.isSelectedAgain) {
      this.spaceSummary = null;
      this._SpaceSummaryService.getLaunchEventDetails()
        .subscribe(data => this.spaceSummary = data);
    }
    else if (this.isSelect && this.isSelected && !this.isSelectedAgain) {
      this.spaceSummary = null;
      this._SpaceSummaryService.getLandEventDetails()
        .subscribe(data => this.spaceSummary = data);
    }
    else if (this.isSelect && this.isSelected && this.isSelectedAgain) {
      this.spaceSummary = null;
      this._SpaceSummaryService.getAllEventDetails()
        .subscribe(data => this.spaceSummary = data);
    }
    else {
      this.ngOnInit();
    }
  }
  public isLauchSuccess() {
    this.isSelect = true;
    this.btnLaunchSuccessStyle = "btn-change";
    this.btnLaunchFailStyle = "btn";
    this.getUpdatedValue();
  }
  public isLandSuccess() {
    this.isSelected = true;
    this.btnLandSuccessStyle = "btn-change";
    this.btnLandFailStyle = "btn";
    this.getUpdatedValue();
  }
  public isDateSelected() {
    this.isSelectedAgain = true;
    this.btnDateStyle = "btn-change";
    this.getUpdatedValue();
  }
  public isLauchFailed() {
    this.isSelect = false; 
    this.btnLaunchFailStyle = "btn-change";
    this.btnLaunchSuccessStyle = "btn";  
    this.getUpdatedValue();
  }
  public isLandFailed() {
    this.isSelected = false;
    this.btnLandFailStyle = "btn-change";
    this.btnLandSuccessStyle = "btn";
    this.getUpdatedValue();
  }

}
