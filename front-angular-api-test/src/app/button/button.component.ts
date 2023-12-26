import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  constructor(private sharedService: SharedService) {}
  @Input() buttonText: string = 'Cliquez ici';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick(): void {
    console.log('bouton cliqué');
    this.sharedService.setButtonText(this.buttonText);
    this.buttonClick.emit();
  }
}
