import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from 'ng-monaco-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    MonacoEditorModule.forRoot({
      /**
       * optional, load monaco by yourself, you'd prefer loading esm for example
       */
      //dynamicImport: () => import('monaco-editor'),

      /**
       * optional, use amd loader to load monaco if present, lower priority than `dynamicImport`
       *
       * Angular CLI currently does not handle assets with hashes. We manage it by manually adding
       * version numbers to force library updates:
       */
      baseUrl: 'lib',

      defaultOptions: {},
    }),
  ],
  exports: [
    MonacoEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
