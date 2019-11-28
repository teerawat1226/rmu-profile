import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder } from '@angular/forms';


@Injectable()
export class SharedService {
  private data = new BehaviorSubject([]);

  constructor(
    
  ) {
  }

  public subscribeReserveStock() {
    return this.data.asObservable();
  }

  set reserveStockData(value: any) {
    this.data.next(value);
  }

  
}
