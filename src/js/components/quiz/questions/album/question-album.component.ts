import { Component } from '@angular/core';

import { QuizService } from 'app/services';
import { GenericQuestion, QuestionType } from 'app/components';
import { shuffle, randomTracksExcluding } from 'app/helpers';

import template from './question-album.html';
import mainStyle from './question-album.css';
import commonStyle from '../common.css';

@Component({
  selector: 'question-album',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class QuestionAlbumComponent extends GenericQuestion {

  public static type = QuestionType.Album;

  public answers: { title: string, correct: boolean }[] = [];

  constructor(private quizService: QuizService) {
    super();
  }

  public init(): void {
    this.setTitle('Who is the artist of this album?');
    this.setCorrectAnswer(this.question.track.artists[0].name);
  }

}

export default QuestionAlbumComponent;
