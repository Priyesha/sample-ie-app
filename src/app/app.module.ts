import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsSearchResultListModule,
  SdsToolbarModule,
  SdsSideNavigationModule,
  SdsAccordionModule,
  SdsSelectionPanelModule
} from '@gsa-sam/components';
import {
  SdsFiltersModule
} from '@gsa-sam/sam-formly';

import { SearchListServiceModule, SideToolbarModule } from '@gsa-sam/layouts';
import { FilterService } from './filter.service';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSideNavigationModule,
    SdsFiltersModule,
    SdsSearchResultListModule,
    SearchListServiceModule,
    SideToolbarModule,
    SdsSelectionPanelModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot([]),
    FormsModule,
  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
  }
}
