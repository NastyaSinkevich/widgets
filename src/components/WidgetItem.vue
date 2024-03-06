<script setup lang="ts">
import GreenSparkLogo from '@/images/GreenSparkLogo.vue'
import type { Widget } from '@/interfaces/Widget'
import CheckboxInput from './common/CheckboxInput.vue'
import ToggleInput from './common/ToggleInput.vue'
import ColorPicker from './common/ColorPicker.vue'
import TooltipItem from './common/TooltipItem.vue'
import { reactive } from 'vue'

const props = defineProps<{
  widget: Widget
}>()

const emit = defineEmits(['changeColor', 'activate', 'link'])
const widgetRef = reactive(props.widget)
const getContrast = (hexcolor: string) => {
  if (!hexcolor.includes('#')) {
    return '';
  }
  const hexToRgb = (hex: string) => [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16)
  ]
  const calculateLuminance = (rgb: number[]) =>
    rgb.map((val: number) =>
      val / 255 <= 0.03928 ? val / 12.92 : Math.pow((val / 255 + 0.055) / 1.055, 2.4)
    )
  const luminance = (rgb: number[]) => 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]

  const whiteContrast = (Math.max(...calculateLuminance(hexToRgb(hexcolor))) + 0.05) / (0.05 + 1)
  const blackContrast =
    (luminance([0, 0, 0]) + 0.05) / (Math.min(...calculateLuminance(hexToRgb(hexcolor))) + 0.05)

  return whiteContrast < blackContrast ? '#ffffff' : '#000000'
}
</script>

<template>
  <div class="widget">
    <div
      class="widget-title"
      :style="{
        'background-color': props.widget.selectedColor,
        color: getContrast(widgetRef.selectedColor)
      }"
    >
      <GreenSparkLogo :fill="getContrast(widgetRef?.selectedColor)" class="logo"></GreenSparkLogo>
      <p>
        This product {{ props.widget.action }} <br />
        <span class="secondary-text">{{ props.widget.amount }} {{ props.widget.type }}</span>
      </p>
    </div>
    <div class="card-row">
      <label :for="`${props.widget.id}-link`">Link to Public Profile<TooltipItem /></label>
      <CheckboxInput
        :id="`${props.widget.id}-link`"
        :value="props.widget.linked"
        @change="emit('link', $event)"
      />
    </div>
    <div class="card-row">
      <span>Badge colour</span>
      <ColorPicker :value="props.widget.selectedColor" @change="emit('changeColor', $event)" />
    </div>
    <div class="card-row">
      <span>Activate badge</span>
      <ToggleInput :value="props.widget.active" @change="emit('activate', $event)" />
    </div>
  </div>
</template>

<style>
.widget {
  height: 167px;
  width: 230px;
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
  color: #3b755f;
  padding: 5px 0;
}

.logo {
  margin-right: 10px;
}
</style>
