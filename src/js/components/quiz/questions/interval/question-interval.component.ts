import { interval } from 'rxjs';
import { timeInterval, take } from 'rxjs/operators';

import { Component } from '@angular/core';

import { note, transpose } from '@tonaljs/tonal';

import { GenericQuestion, QuestionType } from 'app/components';
import { QuizService } from 'app/services';
import { randomNote } from 'app/helpers';

import template from './question-interval.html';
import mainStyle from './question-interval.css';
import commonStyle from '../common.css';

@Component({
  selector: 'question-interval',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class QuestionIntervalComponent extends GenericQuestion {

  public static type = QuestionType.Interval;

  private static _audioContext = new (<any>window.AudioContext || <any>window.webkitAudioContext)();

  private _startNote = randomNote();
  private _isPlaying: boolean = false;

  constructor(private _quizService: QuizService) {
    super();
  }

  public init(): void {
    this.setTitle('Quel est cet intervalle ?');
    this.setCorrectAnswer(this.question.interval.name);
    this.subscribeToClose();
    this.subscribeToRefresh();
  }

  public activate(): void {
    super.activate();
  }

  public deactivate(): void {
    super.deactivate();
  }

  public playInterval(button: HTMLElement): void {
    if (!this._isPlaying) {
      this._isPlaying = true;
      button.classList.add('disabled');

      this.playNote(0, note(this._startNote).freq, undefined);
      this.playNote(1, note(transpose(this._startNote, this.question.interval.id)).freq, button);
    }
  }

  public playNote(startTime: number, frequency: string, button?: HTMLElement): void {
    let ctx = QuestionIntervalComponent._audioContext;

    let gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.05);
    gainNode.connect(ctx.destination);

    let oscillator = ctx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    oscillator.connect(gainNode);
    oscillator.start(startTime + ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0, 1 + startTime + ctx.currentTime - 0.05);
    oscillator.stop(1 + startTime + ctx.currentTime);

    if (button) {
      oscillator.onended = e => {
        this._isPlaying = false;
        button.classList.remove('disabled');
      };
    }
  }

  public isPlaying(): boolean {
    return this._isPlaying;
  }

  private subscribeToClose(): void {
    let subscription = this._quizService
      .onClose
      .subscribe(() => {
        // QuestionIntervalComponent._players = [];
      });

    this.subscriptions.push(subscription);
  }

  private subscribeToRefresh(): void {
    let subscription = this._quizService
      .onRefresh
      .subscribe(() => {
        // QuestionIntervalComponent._players = [];
      });

    this.subscriptions.push(subscription);
  }

}

export default QuestionIntervalComponent;
