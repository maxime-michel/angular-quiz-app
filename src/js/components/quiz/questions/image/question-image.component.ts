import { Component } from '@angular/core';

import { QuizService } from 'app/services';
import { GenericQuestion, QuestionType } from 'app/components';
import { shuffle, randomTracksExcluding } from 'app/helpers';

import template from './question-image.html';
import mainStyle from './question-image.css';
import commonStyle from '../common.css';

@Component({
  selector: 'question-image',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class QuestionImageComponent extends GenericQuestion {

  public static type = QuestionType.Image;

  public answers: { title: string, correct: boolean }[] = [];

  constructor(private quizService: QuizService) {
    super();
  }

  public init(): void {
    this.setTitle('What is the name of this album?');
    this.setCorrectAnswer(this.question.track.album.name);
  }

}

export default QuestionImageComponent;
