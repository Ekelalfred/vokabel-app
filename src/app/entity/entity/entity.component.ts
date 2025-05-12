import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entity',
  imports: [CommonModule],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent {
  public entity = null;
  public backButtonEnabled = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.backButtonEnabled = this.parseBoolean(this.activatedRoute.snapshot.queryParams['backButton']);
    this.entity = this.activatedRoute.snapshot.queryParams['entity'];
  }

  private parseBoolean(value: string | null | undefined): boolean {
    return value === 'true';
  }

  public rerouteToHome(): void {
    this.router.navigateByUrl("");
  }

  public saveAndClear(): void {
    // TODO: Add code to save
  }

  public saveAndReroute(): void {
    // TODO: Add code to save
    this.router.navigateByUrl("");
  }

}
