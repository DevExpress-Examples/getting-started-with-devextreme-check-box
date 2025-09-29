import { Component } from '@angular/core';
import { DxCheckBoxTypes } from 'devextreme-angular/ui/check-box';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onValueChanged(e: DxCheckBoxTypes.ValueChangedEvent): void {
    if (e.value) {
      notify('The CheckBox is checked', 'success', 500);
    }
  }
}
