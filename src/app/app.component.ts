import { Component, OnInit } from '@angular/core';
import * as monaco from "monaco-editor";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
  <ng-monaco-editor 
  style="height: 300px" 
  [modelUri]="modelUri"
  [(ngModel)]="jsonCode" 
  [options]="options"
  (editorChange)="editorChange($event)"
  ></ng-monaco-editor>`,
})
export class AppComponent {
    jsonCode = [
    '{',
    '    "p1": "v3",',
    '    "p2": false',
    "}"
  ].join('\n');

  options = {
    language: "json"
  };

  modelUri = "a://b/foo.json";

  editorChange(editor: monaco.editor.IStandaloneCodeEditor): void {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [{
        uri: "http://myserver/foo-schema.json",
        fileMatch: [this.modelUri],
        schema: {
          type: "object",
          properties: {
            p1: {
              enum: ["v1", "v2"]
            },
            p2: {
              enum: ["x1", "x2"]
            }
          }
        }
      }],
    });
  }
}
