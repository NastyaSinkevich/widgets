<template>
  <div class="toggle-switch" :class="{ on: props.value }" @click="toggle">
    <div :class="{ 'switch-on': props.value, 'switch-off': !props.value }"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: Boolean
})
const emit = defineEmits(['change'])
const toggle = () => {
  emit('change', !props.value)
}
</script>

<style scoped>
.toggle-switch {
  width: 50px;
  height: 24px;
  background-color: #ccc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}
.toggle-switch.on {
  background-color: #3b755f;
}

.switch-on {
  transform: translateX(26px);
}

.switch-off {
  transform: translateX(0);
}
.switch-off:hover {
  box-shadow: 0 0 0 6px #afc6bd;
}

div {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.2s;
}
</style>
