import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entity',
  imports: [CommonModule],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent implements AfterViewInit {
  @ViewChild('wordInputs') wordInputs!: TemplateRef<any>;
  @ViewChild('languageInputs') languageInputs!: TemplateRef<any>;
  @ViewChild('userInputs') userInputs!: TemplateRef<any>;

  public entity: null | string = null;
  public backButtonEnabled = true;
  public activeTemplate: TemplateRef<any> | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.backButtonEnabled = this.parseBoolean(this.activatedRoute.snapshot.queryParams['backButton']);
    this.entity = this.activatedRoute.snapshot.queryParams['entity'];
  }

  ngAfterViewInit(): void {
    this.activeTemplate = this.getActiveTemplate();
  }

  private getActiveTemplate(): TemplateRef<any> {
    switch(this.entity) {
      case 'word':
        return this.wordInputs;
      case 'language':
        return this.languageInputs;
      case 'user':
        return this.userInputs;
      default:
        return this.wordInputs;
    }
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
