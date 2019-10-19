import { TemplateRef } from '@angular/core';

import { GenericQuestion } from 'app/components';
import Track from './track';
import Interval from './interval';
import QuestionType from './question_type';

export interface Question {
  id: number;
  type: QuestionType;
  track?: Track;
  interval: Interval;
  title?: string;
  description?: string;
  answer?: any;
  correctAnswer?: any;
  answered?: boolean;
  wasCorrect?: boolean;
  component?: GenericQuestion;
  statusTemplate?: TemplateRef<any>;
}

export default Question;
