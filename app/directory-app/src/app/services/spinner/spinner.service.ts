import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {


  isLoadding$ = new Subject<boolean>();
  constructor() { }

  show():void{
    this.isLoadding$.next(true)
  }
  hide():void{
    this.isLoadding$.next(false)
  }

}
