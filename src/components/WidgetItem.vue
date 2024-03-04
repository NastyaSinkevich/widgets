<script setup lang="ts">
import GreenSparkLogo from '@/images/GreenSparkLogo.vue';
import { Widget } from '@/interfaces/Widget';
import CheckboxInput from './common/CheckboxInput.vue';
import ToggleInput from './common/ToggleInput.vue';
import ColorPicker from './common/ColorPicker.vue';
import TooltipItem from './common/TooltipItem.vue';

const props = defineProps<{
  widget: Widget;
}>();

const emit = defineEmits(['changeColor','activate','link']);

</script>

<template>
  <div class="widget">
    <div class="widget-title" :style="{ 'background-color': props.widget.selectedColor }">
      <GreenSparkLogo class="logo"></GreenSparkLogo>
      <p>
        This product {{ props.widget.action }} <br />
        <span class="secondary-text">{{ props.widget.amount }} {{ props.widget.type }}</span>
      </p>
    </div>
    <div class="card-row">
      <label :for="props.widget.id.toString()">Link to Public Profile<TooltipItem /></label>
      <CheckboxInput :id="props.widget.id.toString()" :value="widget.linked" @change="emit('link')" />
    </div>
    <div class="card-row">
      <label>Badge colour</label><ColorPicker :value="widget.selectedColor" @change="emit('changeColor', $event)" />
    </div>
    <div class="card-row">
      <label>Activate badge</label><ToggleInput :value="widget.active" @change="emit('activate')" />
    </div>
  </div>
</template>

<style>
.widget {
  height: 167px;
  width: 220px;
  border-radius: 6px;
  box-shadow: 1px 1px 2px rgba(183, 182, 182, 0.1);

  .widget-title {
    display: flex;
    color: white;
    font-size: 12px;
    padding: 10px;
    height: 66px;
    border-radius: 6px;

    .secondary-text {
      font-size: 18px;
      font-weight: 700;
    }
  }
}

.card-row {
  display: flex;
  justify-content: space-between;
  color: #3B755F;
  padding: 5px 0;
}

.logo {
  margin-right: 10px;
}
</style>
