<script lang="ts">
import GreenSparkLogo from './images/GreenSparkLogo.vue'
import { Widget } from '@/interfaces/Widget'
import CheckboxInput from './form-controls/CheckboxInput.vue'

export default {
  props: {
    widget: Object as () => Widget
  },
  components: {
    'greenspark-logo': GreenSparkLogo,
    'checkbox-input': CheckboxInput
  },
}
</script>

<template>
  <div class="widget">
    <div class="widget-title" :style="{ 'background-color': widget.selectedColor }">
      <greenspark-logo></greenspark-logo>
      <p>
        This product {{ widget.action }} <br />
        <span class="secondary-text">{{ widget.amount }} {{ widget.type }}</span>
      </p>
    </div>
    <checkbox-input label="Link to Public Profile" v-model="widget.linked"/>
  </div>
</template>

<style>
.widget {
  height: 167px;
  width: 220px;
  border-radius: 6px;

  .widget-title {
    display: flex;
    color: white;
    font-size: 12px;
    padding: 10px;
    height: 66px;

    .secondary-text {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
