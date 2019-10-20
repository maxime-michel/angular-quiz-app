import { Component } from '@angular/core';

import { QuizService } from 'app/services';
import { GenericAnswer } from 'app/components';

import template from './answer-choice-interval.html';
import mainStyle from './answer-choice-interval.css';
import commonStyle from '../common.css';

@Component({
  selector: 'answer-choice-interval',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class AnswerChoiceIntervalComponent extends GenericAnswer {

  public answers: { title: string, correct: boolean, enabled: boolean }[] = [];

  constructor(private quizService: QuizService) {
    super();
  }

  protected init(): void {
    const answers = [];

    for (let interval of this.quizService.intervals) {
      if (interval.name === this.question.interval.name) {
        answers.push({title: interval.name, correct: true, enabled: true});
      } else {
        answers.push({title: interval.name, correct: false, enabled: interval.difficulty <= this.quizService.getDifficulty()});
      }
    }

    this.answers = answers;
  }

}

export default AnswerChoiceIntervalComponent;
