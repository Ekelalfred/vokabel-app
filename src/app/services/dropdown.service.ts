import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private selectedOptionSource = new BehaviorSubject<string | null>(null);

  selectedOption$ = this.selectedOptionSource.asObservable();

  setSelectedOption(option: string): void {
    this.selectedOptionSource.next(option);
  }

  getSelectedOption(): string | null {
    return this.selectedOptionSource.value;
  }
}
