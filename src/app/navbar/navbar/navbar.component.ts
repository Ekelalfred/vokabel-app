import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownService } from '../../services/dropdown.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentUser: string | null = null;
  options: string[] = ["Option 1", "A lot more text in this one", "Option 3"];

  constructor(private dropdownService: DropdownService) {
    this.dropdownService.selectedOption$.subscribe(option => {
      this.currentUser = option;
    });
  }

  public selectUser(username: string): void {
    this.dropdownService.setSelectedOption(username);
  }
}
