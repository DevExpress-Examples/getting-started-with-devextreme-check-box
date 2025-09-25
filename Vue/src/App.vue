<template>
    <DxCheckBox
        :value="null"
        :enable-three-state-behavior="true"
        text="Approve"
        hint="Approve"
        icon-size="25"
        @value-changed="onValueChanged"
    />
</template>

<script>
import 'devextreme/dist/css/dx.light.css';
import { DxCheckBox } from 'devextreme-vue/check-box';
import notify from "devextreme/ui/notify";

export default {
    components: {
        DxCheckBox
    },
    methods: {
        onValueChanged(e) {
            if (e.value) {
                notify("The CheckBox is checked", "success", 500);
            }
        }
    }
}
</script>