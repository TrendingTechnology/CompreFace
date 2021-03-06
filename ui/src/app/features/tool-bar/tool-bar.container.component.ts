/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolBarFacade } from './tool-bar.facade';

@Component({
  selector: 'app-tool-bar-container',
  template: `
    <app-tool-bar
      [userAvatarInfo]="userAvatarInfo$ | async"
      [userName]="userName$ | async"
      (logout)="logout()">
    </app-tool-bar>`,
})
export class ToolBarContainerComponent implements OnInit {
  userAvatarInfo$: Observable<string>;
  userName$: Observable<string>;

  constructor(private toolBarFacade: ToolBarFacade) {}

  ngOnInit() {
    this.userAvatarInfo$ = this.toolBarFacade.userAvatarInfo$;
    this.userName$ = this.toolBarFacade.userName$;
  }

  logout() {
    this.toolBarFacade.logout();
  }
}
