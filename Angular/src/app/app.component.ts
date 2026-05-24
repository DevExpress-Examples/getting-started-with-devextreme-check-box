import { Component } from '@angular/core';
import { DxCheckBoxTypes } from 'devextreme-angular/ui/check-box';
import notify from 'devextreme/ui/notify';

import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';

@Component({
    selector: 'app-root',
    imports: [DxCheckBoxModule],
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
