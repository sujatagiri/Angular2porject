import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VisitorFormComponent } from './Visitors/visitor-form/visitor-form.component';
import { VisitorNavigationComponent } from './Visitors/visitor-navigation/visitor-navigation.component';
import { VisitorSearchComponent } from './visitors/visitor-search/visitor-search.component';
import { VisitorDetailPageComponent } from './visitor-detail-page/visitor-detail-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ResearchComponent } from './Research/research/research.component';
import { DataService } from './Services/data.service';


const ROUTES: Routes = [
  { path: '', component: VisitorFormComponent },
  { path: 'search/:pageType', component: VisitorSearchComponent },
  { path: 'visitordetail/:pageType/:id', component: VisitorDetailPageComponent }
  
]


@NgModule({
  declarations: [
    AppComponent,
    VisitorFormComponent,
    VisitorNavigationComponent,
    VisitorSearchComponent,
    VisitorDetailPageComponent,
    ResearchComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AlertModule.forRoot(),
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
