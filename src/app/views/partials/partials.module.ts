import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
// Angular
import { RouterModule } from '@angular/router';

import { NgApexchartsModule } from 'ng-apexcharts';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// NgBootstrap
import {
  NgbDropdownModule,
  NgbTabsetModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

// Core module
import { CoreModule } from '../../core/core.module';
import {
  DemoPortalComponent,
} from './content/antd/demo-portal/demo-portal.component';
import {
  HelloWorldComponent,
} from './content/antd/hello-world/hello-world.component';
// CRUD Partials
import {
  ActionNotificationComponent,
  AlertComponent,
  DeleteEntityDialogComponent,
  FetchEntityDialogComponent,
  UpdateStatusDialogComponent,
} from './content/crud';
import {
  Dropdown1Component,
} from './content/dashboard-widgets/dropdowns/dropdown1/dropdown1.component';
import {
  Dropdown2Component,
} from './content/dashboard-widgets/dropdowns/dropdown2/dropdown2.component';
import {
  Dropdown3Component,
} from './content/dashboard-widgets/dropdowns/dropdown3/dropdown3.component';
import {
  Dropdown4Component,
} from './content/dashboard-widgets/dropdowns/dropdown4/dropdown4.component';
import {
  Dropdown5Component,
} from './content/dashboard-widgets/dropdowns/dropdown5/dropdown5.component';
import {
  Widget1SalesStatComponent,
} from './content/dashboard-widgets/widget1-sales-stat/widget1-sales-stat.component';
import {
  Widget1TasksOverviewComponent,
} from './content/dashboard-widgets/widget1-tasks-overview/widget1-tasks-overview.component';
import {
  Widget12NewUsersComponent,
} from './content/dashboard-widgets/widget12-new-users/widget12-new-users.component';
import {
  Widget2NewArrivalsComponent,
} from './content/dashboard-widgets/widget2-new-arrivals/widget2-new-arrivals.component';
import {
  Widget3NewArrivalsAuthorsComponent,
} from './content/dashboard-widgets/widget3-authors/widget3-authors.component';
import {
  Widget4TodoComponent,
} from './content/dashboard-widgets/widget4-todo/widget4-todo.component';
import {
  Widget7WeeklySalesComponent,
} from './content/dashboard-widgets/widget7-weekly-sales/widget7-weekly-sales.component';
import {
  Widget8TrendsComponent,
} from './content/dashboard-widgets/widget8-trends/widget8-trends.component';
import {
  Widget9RecentActivitiesComponent,
} from './content/dashboard-widgets/widget9-recent-activities/widget9-recent-activities.component';
// General
import { NoticeComponent } from './content/general/notice/notice.component';
import { PortletModule } from './content/general/portlet/portlet.module';
// Extra module
import { WidgetModule } from './content/widgets/widget.module';
// Layout partials
import {
  ContextMenu2Component,
  ContextMenuComponent,
  LanguageSelectorComponent,
  NotificationComponent,
  QuickActionComponent,
  QuickPanelComponent,
  QuickUserPanelComponent,
  ScrollTopComponent,
  SearchDefaultComponent,
  SearchDropdownComponent,
  SearchResultComponent,
  SplashScreenComponent,
  StickyToolbarComponent,
  Subheader1Component,
  Subheader2Component,
  Subheader3Component,
  SubheaderSearchComponent,
  UserProfile2Component,
  UserProfile3Component,
  UserProfile4Component,
  UserProfileComponent,
} from './layout';
import { CartComponent } from './layout/topbar/cart/cart.component';

@NgModule({
  declarations: [
    ScrollTopComponent,
    NoticeComponent,
    ActionNotificationComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent,
    AlertComponent,

    // topbar components
    ContextMenu2Component,
    ContextMenuComponent,
    QuickPanelComponent,
    QuickUserPanelComponent,
    ScrollTopComponent,
    SearchResultComponent,
    SplashScreenComponent,
    StickyToolbarComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    SubheaderSearchComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    QuickActionComponent,
    SearchDefaultComponent,
    SearchDropdownComponent,
    UserProfileComponent,
    UserProfile2Component,
    UserProfile3Component,
    UserProfile4Component,
    CartComponent,
    Widget1SalesStatComponent,
    Widget9RecentActivitiesComponent,
    Widget12NewUsersComponent,
    Widget7WeeklySalesComponent,
    Widget1TasksOverviewComponent,
    Widget2NewArrivalsComponent,
    Widget3NewArrivalsAuthorsComponent,
    Widget4TodoComponent,
    Widget8TrendsComponent,
    Dropdown1Component,
    Dropdown2Component,
    Dropdown3Component,
    Dropdown4Component,
    Dropdown5Component,
    DemoPortalComponent,
    HelloWorldComponent,
  ],
  exports: [
    WidgetModule,
    PortletModule,

    ScrollTopComponent,
    NoticeComponent,
    ActionNotificationComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent,
    AlertComponent,

    // topbar components
    ContextMenu2Component,
    ContextMenuComponent,
    QuickPanelComponent,
    QuickUserPanelComponent,
    ScrollTopComponent,
    SearchResultComponent,
    SplashScreenComponent,
    StickyToolbarComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    SubheaderSearchComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    QuickActionComponent,
    SearchDefaultComponent,
    SearchDropdownComponent,
    UserProfileComponent,
    UserProfile2Component,
    UserProfile3Component,
    UserProfile4Component,
    CartComponent,
    Widget1SalesStatComponent,
    Widget9RecentActivitiesComponent,
    Widget12NewUsersComponent,
    Widget7WeeklySalesComponent,
    Widget1TasksOverviewComponent,
    Widget2NewArrivalsComponent,
    Widget3NewArrivalsAuthorsComponent,
    Widget4TodoComponent,
    Widget8TrendsComponent,
    Dropdown1Component,
    Dropdown2Component,
    Dropdown3Component,
    Dropdown4Component,
    Dropdown5Component,
    DemoPortalComponent,
    HelloWorldComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    InlineSVGModule,
    CoreModule,
    PortletModule,
    WidgetModule,
    NgApexchartsModule,
    // angular material modules
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatIconModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,

    // ng-bootstrap modules
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule,
    PortalModule,
  ],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PartialsModule {
}
