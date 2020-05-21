import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';	
import { AppComponent } from './app.component';
import { VisitorFormComponent } from './Visitors/visitor-form/visitor-form.component';
import { VisitorNavigationComponent } from './Visitors/visitor-navigation/visitor-navigation.component';
import { VisitorSearchComponent } from './visitors/visitor-search/visitor-search.component';
import { VisitorDetailPageComponent } from './visitor-detail-page/visitor-detail-page.component';


const ROUTES: Routes=[
  {path:'', component: VisitorFormComponent},
  {path:'search/:pageType', component: VisitorSearchComponent},
  {path:'search/:pageType', component: VisitorSearchComponent},
  {path:'search/:pageType', component: VisitorSearchComponent},
  {path:'visitordetail/:pageType/:id', component: VisitorDetailPageComponent}
 
]


@NgModule({
  declarations: [    
    HttpClientModule,
    AppComponent,
    VisitorFormComponent,
    VisitorNavigationComponent,
    VisitorSearchComponent,
    VisitorDetailPageComponent,   
   ],
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
