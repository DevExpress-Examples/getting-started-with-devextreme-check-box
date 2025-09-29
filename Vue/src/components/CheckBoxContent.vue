<script setup lang="ts">
import DxCheckBox from 'devextreme-vue/check-box';
import type { DxCheckBoxTypes } from 'devextreme-vue/check-box';
import notify from 'devextreme/ui/notify';

function onValueChanged(e: DxCheckBoxTypes.ValueChangedEvent): void {
  if (e.value) {
    notify('The CheckBox is checked', 'success', 500);
  }
}
</script>

<template>
  <div id="container">
    <DxCheckBox
      :value="null"
      :enable-three-state-behavior="true"
      text="Approve"
      hint="Approve"
      icon-size="25"
      @value-changed="onValueChanged"
    />
  </div>
</template>

<style scoped>
#container {
  width: 400px;
  margin: 50px;
}
</style>
