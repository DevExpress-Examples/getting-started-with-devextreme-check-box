import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    onValueChanged(e: { value: any; }) {
        if (e.value) {
            notify("The CheckBox is checked", "success", 500);
        }
    }
}

