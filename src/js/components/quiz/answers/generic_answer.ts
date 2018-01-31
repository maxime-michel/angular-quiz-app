import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Question } from 'app/contracts';

export abstract class GenericAnswer implements OnInit {

  @Input() public question: Question;
  @Output() public onAnswerChange: EventEmitter<any> = new EventEmitter();

  public ngOnInit(): void {
    this.buildAnswers();
  }

  public answerChanged(answer: any, removed: boolean): void {
    this.onAnswerChange.emit({ answer, removed });
  }

  public hasAnswer(): boolean {
    return this.question.answer !== undefined;
  }

  protected abstract buildAnswers(): void;

}

export default GenericAnswer;
