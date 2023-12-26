import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-rendu-case',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './rendu-case.component.html',
  styleUrl: './rendu-case.component.scss',
})
export class RenduCaseComponent {
  buttonText: string = '';
  constructor(private sharedService: SharedService) {
    this.buttonText = this.sharedService.getButtonText();
  }
}
