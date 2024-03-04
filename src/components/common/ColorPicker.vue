<!-- ColorPicker.vue -->

<template>
    <div class="color-picker">
      <span
          v-for="(color, index) in colorOptions"
          :key="index+color"
          class="color-option-label"
          :style="{ backgroundColor: color }"
          @click="emit('change', color)"
        ></span>
      </div>
  </template>
  
  <script setup lang="ts">

  const colorOptions = ['#2E3A8C', '#3B755F', '#F2EBDB', '#FFFFFF', '#212121'];

  const emit = defineEmits(['change']);

  </script>
  
  <style scoped>
  .color-picker {
    display: flex;
    flex-wrap: wrap;
  }
  
  .color-option-label {
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    margin: 3px;
    cursor: pointer;
  }
  
  .color-option-input {
    position: absolute;
    left: -9999px;
  }
  </style>
  