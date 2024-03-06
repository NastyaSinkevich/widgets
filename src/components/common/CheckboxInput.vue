<template>
  <div class="container">
    <input :id="props.id" type="checkbox" :value="value" @input="emit('change', value)" />
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
  height: 25px;
  width: 25px;
}

.checkmark {
  height: 25px;
  width: 25px;
  background-color: #eee;
}
.checkmark :hover {
  background-color: #AFC6BD;
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
  right: 5px;
  top: 0px;
  width: 14px;
  height: 20px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

/*//////////////////

.checkbox-custom {
  display: none;
}

/* Style for the label that represents the checkbox */
.checkbox-custom-label {
  display: inline-block;
  height: 25px;
  width: 25px;
  background: #AFC6BD;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
}

/* Style when the checkbox is checked */
.checkbox-custom:checked + .checkbox-custom-label {
  background: #3b755f;
}

/* Style for the checkmark */
.checkbox-custom:checked + .checkbox-custom-label:after {
  content: '✓';
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}
</style>
