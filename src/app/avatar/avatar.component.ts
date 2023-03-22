import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { TuningService } from '../services/tuning.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  palpebre: SVGElement;
  corvo : HTMLDivElement;
  piedeDx: SVGElement;
  piedeSx: SVGElement 
  alaDx: SVGElement;
  alaSx: SVGElement;
  occhioSxC: SVGElement;
  occhioDxC: SVGElement;
  tuned: boolean;
  constructor(
    private el:ElementRef,
    private tuninisService: TuningService
  ) { }

  ngOnInit(): void {
    this.tuninisService.tuned.subscribe((tuned)=>{
      if (tuned && !this.tuned){
        this.happycorvo();
        this.tuned = true
        setTimeout(()=>{
          this.resetcorvo();
          this.tuned = false;
        },2000)
      }
    })
  }
  ngAfterViewInit(){
    this.corvo = this.el.nativeElement.querySelector("#corvo");
    this.palpebre = this.el.nativeElement.querySelector("#palpebre");
    this.piedeDx = this.el.nativeElement.querySelector("#piedeDx");
    this.piedeSx = this.el.nativeElement.querySelector("#piedeSx");  
    this.alaDx = this.el.nativeElement.querySelector("#alaDx");
    this.alaSx = this.el.nativeElement.querySelector("#alaSx");
    this.occhioDxC = this.el.nativeElement.querySelector("#occhioDxC");
    this.occhioSxC = this.el.nativeElement.querySelector("#occhioSxC") 
  }
  @HostListener('pointerdown') onmousedown(){
    this.happycorvo()
  }
  @HostListener('pointerup') onmouseup(){
    this.resetcorvo()
  }

  happycorvo(){
    this.corvo.style.animationDuration = "0.1s"
    this.palpebre.style.animation = "close .2s 1";
    this.palpebre.style.animationFillMode = "forwards";
    this.piedeDx.style.animation = "movePDx 0.1s 1"
    this.piedeSx.style.animation = "movePSx 0.1s 1"
    this.piedeDx.style.animationFillMode = "forwards";
    this.piedeSx.style.animationFillMode = "forwards";
    this.alaSx.style.animationDuration = "0.1s";
    this.alaDx.style.animationDuration = "0.1s";
    this.occhioDxC.style.display = "block";
    this.occhioSxC.style.display = "block";
    this.occhioDxC.style.animation = "sorrisoOcchioDx 0.2s 1";
    this.occhioSxC.style.animation = "sorrisoOcchioSx 0.2s 1";
    this.occhioDxC.style.animationFillMode = "forwards";
    this.occhioSxC.style.animationFillMode = "forwards";
}

resetcorvo(){
  this.corvo.style.animationDuration = "0.4s"
  this.palpebre.style.animation = "blink 4s infinite";
  this.piedeDx.style.animation = "movePDx 0.4s infinite ease-in";
  this.piedeSx.style.animation = "movePSx 0.4s infinite ease-in";
  this.piedeDx.style.animationDirection = "alternate";
  this.piedeSx.style.animationDirection = "alternate";
  this.alaSx.style.animationDuration = "0.4s";
  this.alaDx.style.animationDuration = "0.4s";
  this.occhioDxC.style.display = "none";
  this.occhioSxC.style.display = "none";
}

}
