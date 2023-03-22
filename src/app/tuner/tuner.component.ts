import { Component, OnInit, ElementRef } from '@angular/core';
import { faLocationPin, faPlay, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PitchDetector } from 'pitchy';
import { notes } from '../shared/notes';
import { HertzComponent } from '../hertz/hertz.component';
import { TuningComponent } from '../tuning/tuning.component';
import { TuningService } from '../services/tuning.service';
@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss'],
})
export class TunerComponent implements OnInit {
  pitch;
  clarity;
  distance;
  audioContext;
  analyserNode;
  faRotateRight = faRotateRight;
  faPlay = faPlay;
  faLocation = faLocationPin;
  playing = false;
  indicator = false;
  margin;
  note;
  note2;
  standard: number = 440;
  tuningName="Standard"
  tuning =
    ["E2",
      "A2",
      "D3",
      "G3",
      "B3",
      "E4",]
    ;
  strings = {
    string0: false,
    string1: false,
    string2: false,
    string3: false,
    string4: false,
    string5: false,
  };
  notes = notes;
  constructor(
    private el: ElementRef,
    private bottomSheet: MatBottomSheet,
    private tuningService: TuningService
  ) { }

  ngOnInit() {
    /*
      setTimeout(() => {
        this.note = 'A4';
        this.strings.A4 = true;
      }, 1000);
      setTimeout(() => {
        this.note = 'A5';
      }, 4000);
      setTimeout(() => {
        this.note = 'E4';
        this.strings.E4 = true;
  
      }, 8000);
      */

  }
  start() {
    this.audioContext = new window.AudioContext();
    this.analyserNode = this.audioContext.createAnalyser();
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.audioContext.createMediaStreamSource(stream).connect(this.analyserNode);
      const detector = PitchDetector.forFloat32Array(this.analyserNode.fftSize);
      const input = new Float32Array(detector.inputLength);
      this.updatePitch(this.analyserNode, detector, input, this.audioContext.sampleRate);
    });
    this.playing = true;
  }
  refresh() {
    this.playing = false;
    window.location.reload()
  }
  updatePitch(analyserNode, detector, input, sampleRate) {
    analyserNode.getFloatTimeDomainData(input);
    const [pitch, clarity] = detector.findPitch(input, sampleRate);
    setTimeout(
      () => this.updatePitch(analyserNode, detector, input, sampleRate),
      100
    );
    if (pitch * 4 > 200 && pitch * 4 < 2000) {
      this.pitch = Math.round(pitch * 4);
      this.clarity = Math.round(clarity * 100);
      this.getNotes(this.pitch);
      this.detectString();
    }
  }
  getNotes(frequency) {
    if (this.clarity > 95) {
      this.distance =
        Math.round(Math.log2(Math.pow(frequency / this.standard, 12)) * 10) /
        10;
      this.margin =
        Math.round((this.distance - Math.round(this.distance)) * 10) / 10;
      this.note =
        this.notes[(Math.round(this.distance) + 12) % 12] +
        (Math.ceil((this.distance - 2) / 12) + 2);
      if(this.tuning.indexOf(this.note)!=-1 && this.margin == 0){
        this.tuningService.setTuned(true)
      }
      this.note2 = this.notes[(Math.round(this.distance) + 12) % 12];
    } else {
      this.note;
    }
  }
  detectString() {
    if (this.margin == 0) {
      this.indicator = true;
    } else {
      this.indicator = false;
    }
    if (this.margin == 0) {
      //this.strings[this.tuning.indexOf(this.note)] = true;
      this.strings["string" + this.tuning.indexOf(this.note)] = true;
    }
    if (this.margin > 0.1 || this.margin < -0.1) {
      this.strings[this.tuning.indexOf(this.note)] = false;
    }
  }
  openBottomSheet(): void {
    const bottomsheet = this.bottomSheet.open(HertzComponent);
    bottomsheet.afterDismissed().subscribe((Hz) => {
      if (Hz) {
        this.note=null;
        this.standard = Hz;
        this.strings = {
          string0: false,
          string1: false,
          string2: false,
          string3: false,
          string4: false,
          string5: false,
        };
      }
    })
  }
  openTuning() {
    const tuningSheet = this.bottomSheet.open(TuningComponent);
    tuningSheet.afterDismissed().subscribe((tuning) => {
      if (tuning) {
        this.note=null;
        this.tuning = tuning.schema
        this.tuningName = tuning.name
        this.strings = {
          string0: false,
          string1: false,
          string2: false,
          string3: false,
          string4: false,
          string5: false,
        };
      }
    }
    )
  }
}
