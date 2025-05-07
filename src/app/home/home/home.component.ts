import { Component } from '@angular/core';
import { StateService, StateServiceKeys } from '../../services/state.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../../modules/user.entity';
import { Language } from '../../../modules/language.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();
  public currentUser: User | null = null;
  public currentLanguage: Language | null = null;

  constructor(private stateService: StateService, private router: Router) {
    this.stateService.getProperty<User>(StateServiceKeys.SELECTED_USER).pipe(takeUntil(this.unsubscribe$)).subscribe(user => this.currentUser = user);
    this.stateService.getProperty<Language>(StateServiceKeys.SELECTED_LANGUAGE).pipe(takeUntil(this.unsubscribe$)).subscribe(language => this.currentLanguage = language);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public rerouteToNewSession(): void {
    this.router.navigateByUrl("/");
  }

  public rerouteToNewEntity(params = null): void {
    this.router.navigateByUrl("/entities");
  }

  public rerouteToSessionHistory(): void {
    this.router.navigateByUrl("/");
  }
}
