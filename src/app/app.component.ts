import { Component, ViewChild } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
// import { navigationConfig } from './navigate.config';
import { SearchListConfiguration } from '@gsa-sam/layouts';
import { FilterService } from './filter.service';
import { SideNavigationModel } from '@gsa-sam/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('resultList') resultList;

  fields: FormlyFieldConfig[] = [];
  form;
  filterModel = {};
  options;
  filtersExpanded: boolean = true;
  public filterChange$ = new Subject<object>();
  // public navigationModel: SideNavigationModel = navigationConfig;

  listConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

  /* Sort config change demo */
  defaultListConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

  updatedListConfig: SearchListConfiguration = {
    defaultSortValue: 'cageCode',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Cage Code', value: 'cageCode' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

  constructor(
    public service: DataService,
    public filterService: FilterService
  ) {}
  ngOnInit() {
    this.fields = this.filterService.fields;
    this.filterModel = this.filterService.model;
    this.form = this.filterService.form;
    this.options = this.filterService.options;
  }
  ngAfterViewInit() {
    this.filterChange$.subscribe(res => {
      this.resultList.updateFilter(res);
    });
  }

  updateConfig(update: boolean) {
    if(update) {
      this.listConfig = { ...this.updatedListConfig };
    }
    else {
      this.listConfig = { ...this.defaultListConfig };
    }

  }
}
