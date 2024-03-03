<script lang="ts">
import GreenSparkLogo from '@/images/GreenSparkLogo.vue'
import { Widget } from '@/interfaces/Widget'
import CheckboxInput from './common/CheckboxInput.vue'
import ToggleInput from './common/ToggleInput.vue'
import ColorPicker from './common/ColorPicker.vue'
import TooltipItem from './common/TooltipItem.vue'

export default {
  props: {
    widget: Object as () => Widget
  },
  components: {
    GreenSparkLogo,
    CheckboxInput,
    ToggleInput,
    ColorPicker,
    TooltipItem
  }
}
</script>

<template>
  <div class="widget">
    <div class="widget-title" :style="{ 'background-color': widget.selectedColor }">
      <GreenSparkLogo class="logo"></GreenSparkLogo>
      <p>
        This product {{ widget.action }} <br />
        <span class="secondary-text">{{ widget.amount }} {{ widget.type }}</span>
      </p>
    </div>
    <div class="card-row">
      <label :for="widget.id">Link to Public Profile<TooltipItem></TooltipItem></label>
      <CheckboxInput :id="widget.id" v-model="widget.linked"></CheckboxInput>
    </div>
    <div class="card-row">
      <label>Badge colour</label><ColorPicker v-model="widget.selectedColor"></ColorPicker>
    </div>
    <div class="card-row">
      <label>Activate badge</label><ToggleInput v-model="widget.active"></ToggleInput>
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
