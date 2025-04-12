import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('username') username!: ElementRef

  public submitUser(): void {
    window.databaseAPI.postUser(this.username.nativeElement.value);
  }
}
