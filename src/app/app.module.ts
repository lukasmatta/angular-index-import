import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './ads/hero-job-ad.component';
import { AdBannerComponent } from './ads/ad-banner.component';
import { HeroProfileComponent } from './ads/hero-profile.component';
import { AdDirective } from './ads';
import { AdService } from './ads';

@NgModule({
  imports: [ BrowserModule ],
  providers: [ AdService ],
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/