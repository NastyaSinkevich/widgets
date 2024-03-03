<template>
    <div class="toggle-switch" :class="{ 'on': value }" @click="toggle">
      <div :class="{ 'switch-on': value, 'switch-off': !value }"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      value: Boolean as PropType<boolean>,
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const toggle = () => {
        emit('update:modelValue', !props.value);
      };
  
      return {
        toggle,
      };
    },
  });
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
    background-color: #3B755F;
  }
  
  .switch-on {
    transform: translateX(26px);
  }
  
  .switch-off {
    transform: translateX(0);
  }
  
  div {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
  }
  </style>
  