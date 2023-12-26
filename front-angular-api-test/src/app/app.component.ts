import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { RenduCaseComponent } from './rendu-case/rendu-case.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    ButtonComponent,
    RenduCaseComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front-angular-api-test';

  onButton1Click(): void {
    console.log('bouton 1 cliqué');
  }

  onButton2Click(): void {
    console.log('bouton 2 cliqué');
  }
}
