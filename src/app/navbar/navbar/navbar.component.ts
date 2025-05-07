import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { StateService, StateServiceKeys } from '../../services/state.service';
import { User } from '../../../modules/user.entity';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  currentUser: User | null = null;
  options: User[] = [{ username: "Option 1" }, { username: "A lot more text in this one" }, { username: "Option 3" }] as User[];

  constructor(private stateService: StateService) {
    this.stateService.getProperty<User>(StateServiceKeys.SELECTED_USER).pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
      this.currentUser = user;
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public selectUser(user: User): void {
    this.stateService.setProperty<User>(StateServiceKeys.SELECTED_USER, user);
  }
}
