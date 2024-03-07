<template>
  <div class="container">
    <input class="checkmark" :id="props.id" type="checkbox" :value="value" @input="emit('change', value)" />
    <div class="checkmark"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  id: string
}>()

const emit = defineEmits(['change'])
const value = ref('')
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 18px;
  width: 18px;
}

.checkmark {
  height: 18px;
  width: 18px;
  background-color: #eee;
}
.container input:not(checked) ~ .checkmark:hover {
  box-shadow: 0 0 0 10px #AFC6BD;
  color: #AFC6BD;
  border-radius: 50%;
}

.container input:checked ~ .checkmark {
  background-color: #3b755f;
}
.container input:not(checked) ~ .checkmark {
  background-color: #ccc;
}
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
  color: #ccc;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  right: 2px;
  top: -3px;
  width: 10px;
  height: 16px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
