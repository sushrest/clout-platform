import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// modules
import { CoreModule } from '../core/core.module';
import { IcoRoutingModule } from './ico-routing.module';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

// components
import { IcoComponent } from './ico.component';
import {
  // filters
  FiltersComponent,
  CalendarComponent,
  CheckboxComponent,
  RangeComponent,
  // ICO detail
  IcoDetailComponent,
  FeatureListComponent,
  FeatureTabsComponent,
  LinksComponent,
  SocialNetworksComponent,
  // ICO list
  IcoListComponent,
  IcoItemComponent,
  // search
  SearchComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    NgbModule,
    IcoRoutingModule,
    MultiselectDropdownModule
  ],
  declarations: [
    IcoComponent,
    // filters
    FiltersComponent,
    CalendarComponent,
    CheckboxComponent,
    RangeComponent,
    // ICO detail
    IcoDetailComponent,
    FeatureListComponent,
    FeatureTabsComponent,
    LinksComponent,
    SocialNetworksComponent,
    // ICO list
    IcoListComponent,
    IcoItemComponent,
    // search
    SearchComponent
  ]
})
export class IcoModule { }
