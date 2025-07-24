import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatNavList, MatListItem, MatIcon, RouterLink, MatIcon, MatIcon, MatSidenav, MatSidenavContent, MatToolbar, MatIconButton, MatSidenavContainer],
  templateUrl: './app.component.html',
})
export class App {
}
