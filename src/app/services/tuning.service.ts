import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TuningService {
tuned : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
actualTuned = this.tuned.asObservable();
  constructor() { }
setTuned(tuned:boolean){
  this.tuned.next(tuned)
  setTimeout(()=>{
    this.tuned.next(false)
  },500)
}
}
