import React, { useCallback } from "react";
import "devextreme/dist/css/dx.light.css";

import { CheckBox } from 'devextreme-react/check-box';
import notify from "devextreme/ui/notify";

function App() {
    const onValueChanged = useCallback((e) => {
        if (e.value) {
            notify("The CheckBox is checked", "success", 500);
        }
    }, []);
    
    return (
        <CheckBox 
            value={null}
            text="Approve"
            hint="Approve"
            iconSize="25"
            onValueChanged={onValueChanged}
        />
    );
}

export default App;
