import { NgModule, ErrorHandler, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutes } from 'app/routes';
import { AppErrorHandler } from 'app/facades';

import { AnimatorModule } from 'css-animator';
import { MaterializeModule } from 'angular2-materialize';

import { ContainerRefDirective } from 'app/directives';
import { QUESTION_COMPONENTS, ANSWER_COMPONENTS } from 'app/components';

const base = window.env === 'production' ? document.querySelector('base') : void 0;

import {
  AppComponent,
  LandingComponent,
  QuizComponent,
  QuestionComponent,
  QuizDoneComponent,
  QuizNavComponent,
  QuizStatusComponent
} from 'app/components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    MaterializeModule,
    AnimatorModule
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    QuizComponent,
    QuizNavComponent,
    QuestionComponent,
    QuizDoneComponent,
    QuizStatusComponent,
    ContainerRefDirective,
    ...QUESTION_COMPONENTS,
    ...ANSWER_COMPONENTS
  ],
  entryComponents: QUESTION_COMPONENTS,
  providers: [
    { provide: APP_BASE_HREF, useValue: base && base.href || '/' },
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export default AppModule;
