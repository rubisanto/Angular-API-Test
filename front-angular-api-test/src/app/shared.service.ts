import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  buttonText: string = '';

  setButtonText(text: string): void {
    this.buttonText = text;
  }

  getButtonText(): string {
    return this.buttonText;
  }
}
