import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule} from '@angular/material/list';

import { TuningService } from './services/tuning.service';
import { AppComponent } from './app.component';
import { ChordsComponent } from './chords/chords.component';
import { TunerComponent } from './tuner/tuner.component';
import { SplashDirective } from './directives/splash.directive';
import { HertzComponent } from './hertz/hertz.component';
import { TuningComponent } from './tuning/tuning.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, ChordsComponent, TunerComponent, SplashDirective, HertzComponent, TuningComponent, AvatarComponent],
  providers: [TuningService],
  bootstrap: [AppComponent],
})
export class AppModule {}

