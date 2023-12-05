import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { LandlingPComponent } from './landling-p/landling-p.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'home', component: LandlingPComponent},
  {path: 'operate', component: UserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LandlingPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
