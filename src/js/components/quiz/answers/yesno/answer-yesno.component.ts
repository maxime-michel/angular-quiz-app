import { Component } from '@angular/core';
import { GenericAnswer } from 'app/components';

import template from './answer-yesno.html';
import mainStyle from './answer-yesno.css';
import commonStyle from '../common.css';

@Component({
  selector: 'answer-yesno',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class AnswerYesNoComponent extends GenericAnswer {

  protected init(): void {

  }

}
