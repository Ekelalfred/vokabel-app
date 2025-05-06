import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private stateService: StateService) {
    
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
