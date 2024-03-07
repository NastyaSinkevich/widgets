<template>
  <div class="color-picker">
    <span
      v-for="(color, index) in props.colorOptions"
      :key="index + color"
      class="color-option-label"
      :class="{ selected: color === selectedColor }"
      :style="{ backgroundColor: color }"
      @click="selectColor(color)"
    ></span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ colorOptions?: string[], selected?: string }>(), {
  colorOptions: () => ['#2E3A8C', '#3B755F', '#F2EBDB', '#FFFFFF', '#212121']
});

const emit = defineEmits(['change']);

let selectedColor = props.selected ?? '' ;

const selectColor = (color: string) => {
  selectedColor = color;
  emit('change', color);
}
</script>

<style scoped>
.color-picker {
  display: flex;
  flex-wrap: wrap;
}

.color-option-label {
  width: 16px;
  height: 16px;
  margin: 3px;
  cursor: pointer;
}

.color-option-label:hover {
  opacity: 0.8;
}

.selected {
  border: #b0b0b0 2px solid;
}
</style>
