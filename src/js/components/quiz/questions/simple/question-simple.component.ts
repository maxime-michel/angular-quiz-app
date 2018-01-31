import { Component } from '@angular/core';
import { GenericQuestion, QuestionType } from 'app/components';

import template from './question-simple.html';
import mainStyle from './question-simple.css';
import commonStyle from '../common.css';

@Component({
  selector: 'question-simple',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class QuestionSimpleComponent extends GenericQuestion {

  public static type = QuestionType.Simple;

  public init(): void {
    this.setTitle('Do you like this quiz?');
    this.setCorrectAnswer('yes');
  }

}
