import { Routes } from '@angular/router';
import { TunerComponent } from '../tuner/tuner.component';
import { ChordsComponent } from '../chords/chords.component';

export const routes:Routes = [
  {path:'tuner', component: TunerComponent },
  {path:'chords', component: ChordsComponent },
  {path:'', redirectTo:'tuner', pathMatch:'full'}
]