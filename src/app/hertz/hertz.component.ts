import { Component } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-hertz',
  templateUrl: './hertz.component.html',
  styleUrls: ['./hertz.component.scss']
})
export class HertzComponent{

  constructor(
    private bottomSheetRef: MatBottomSheetRef<HertzComponent>
    ) { 
      
    }

  ngOnInit(): void {
    console.log(this.bottomSheetRef)
  }
  selectHz(Hz:number, event:PointerEvent){
    this.bottomSheetRef.dismiss(Hz);
    event.preventDefault();
  }
}
