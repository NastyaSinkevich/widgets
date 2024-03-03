<!-- ColorPicker.vue -->

<template>
    <div class="color-picker">
      <label
        v-for="(color, index) in colorOptions"
        :key="index"
        class="color-option-label"
        :style="{ backgroundColor: color }"
        @click="selectColor(color)"
      >
        <input
          type="radio"
          :value="color"
          v-model="selectedColor"
          name="colorPicker"
          class="color-option-input"
        />
      </label>
      </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        colorOptions: ['#2E3A8C', '#3B755F', '#F2EBDB', '#FFFFFF', '#212121'],
        selectedColor: '',
      };
    },
    methods: {
      selectColor(color) {
        this.selectedColor = color;
      },
    },
  });
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
  