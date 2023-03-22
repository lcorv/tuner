import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { tunings } from '../shared/tuning';

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.scss']
})
export class TuningComponent implements OnInit {
  tunings=tunings;
  constructor(
    private tuningSheetRef: MatBottomSheetRef<TuningComponent>

  ) { }

  ngOnInit(): void {
  }
  selectTuning(tuning, event:MouseEvent){
    this.tuningSheetRef.dismiss(tuning)
    event.preventDefault()
  }
}
