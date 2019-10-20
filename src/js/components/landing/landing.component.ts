import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimationService, AnimationBuilder } from 'css-animator';
import { LocaleService } from 'app/services';
import { DifficultyOptions, DIFFICULTY_VALUES } from './difficulty_options';

import template from './landing.html';
import mainStyle from './landing.css';

@Component({
  selector: 'landing-host',
  host: {
    'hidden': 'true'
  },
  template: template,
  styles: [
    mainStyle
  ]
})
export class LandingComponent implements OnInit, AfterViewInit {

  public selectOptions: DifficultyOptions[] = DIFFICULTY_VALUES;
  public submitted = false;

  private _animator: AnimationBuilder;
  private _difficultySelection: any;

  constructor(
    private _elementRef: ElementRef,
    private router: Router,
    private _localeService: LocaleService,
    animationService: AnimationService) {
    this._animator = animationService.builder();
  }

  public ngOnInit() {
    this._difficultySelection = this._localeService.difficulty;
  }

  public ngAfterViewInit() {
    this._animator
      .setType('fadeInUp')
      .setDelay(150)
      .setDuration(700)
      .show(this._elementRef.nativeElement);
  }

  public difficultySelection() {
    return this._difficultySelection;
  }

  set difficultySelection(value) {
    let difficulty;

    for (let level of this.selectOptions) {
      if (level.value === value) {
        difficulty = level;
      }
    }

    this._localeService.difficulty = difficulty || value;
    this._difficultySelection = value;
  }

  public startQuiz(): void {
    if (this.submitted) {
      return;
    }

    this.submitted = true;

    this._animator
      .setType('fadeOutDown')
      .setDelay(350)
      .setDuration(600)
      .hide(this._elementRef.nativeElement.firstChild)
      .then(() => {
        this.router.navigate(['/quiz']);
      });
  }

}

export default LandingComponent;
