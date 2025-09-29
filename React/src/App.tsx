import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { CheckBox } from 'devextreme-react/check-box';
import type { CheckBoxTypes } from 'devextreme-react/check-box';
import notify from 'devextreme/ui/notify';

function App(): JSX.Element {
  const onValueChanged = useCallback((e: CheckBoxTypes.ValueChangedEvent) => {
    if (e.value) {
      notify('The CheckBox is checked', 'success', 500);
    }
  }, []);

  return (
    <CheckBox
      value={null}
      enableThreeStateBehavior={true}
      text="Approve"
      hint="Approve"
      iconSize="25"
      onValueChanged={onValueChanged}
    />
  );
}

export default App;
