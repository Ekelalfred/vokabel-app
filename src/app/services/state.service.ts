import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private store = new Map<StateServiceKeys, BehaviorSubject<any>>();

  setProperty<T>(key: StateServiceKeys, property: T): void {
    if (!this.store.has(key)) {
      this.store.set(key, new BehaviorSubject<T>(property));
    } else {
      (this.store.get(key) as BehaviorSubject<T>).next(property);
    }
  }

  getProperty<T>(key: StateServiceKeys): Observable<T> {
    if (!this.store.has(key)) {
      this.setProperty(key, null);
      return this.getProperty(key);
    } else {
      return this.store.get(key)?.asObservable() as Observable<T>;
    }
  }
}

export enum StateServiceKeys {
  SELECTED_USER = 'selected_user',
  SELECTED_LANGUAGE = 'selected_language'
}