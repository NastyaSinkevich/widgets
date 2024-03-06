<template>
  <span>
    <span @mouseover="showTooltip($event)" @mouseout="hideTooltip()"><TooltipIcon></TooltipIcon></span>
    <div
      v-show="isTooltipVisible"
      class="tooltip"
      :style="{ top: `${position.top}px`, left: `${position.left}px` }"
    >
      <p>{{ props.tooltipText }}</p>
      <a :href="props.tooltipLink" class="tooltip-link">{{ props.tooltipLinkText }}</a>
    </div>
  </span>
</template>

<script setup lang="ts">
import TooltipIcon from '@/images/TooltipIcon.vue'
export interface TooltipProps {
  tooltipText?: string
  tooltipLinkText?: string
  tooltipLink?: string
}

const props = withDefaults(defineProps<TooltipProps>(), {
  tooltipText:
    'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.',
  tooltipLinkText: 'View Public Profile',
  tooltipLink: '#'
})
let position = { top: 0, left: 0 }
let isTooltipVisible = false

const showTooltip = (event: MouseEvent) => {
  isTooltipVisible = true
  position = {
    top: event.clientY + 10,
    left: event.clientX + 10
  }
}
const hideTooltip = () => {
  isTooltipVisible = false
}
</script>

<style scoped>
span {
  cursor: pointer;
}
.tooltip {
  position: absolute;
  z-index: 1000;
  color: #333;
  background-color: #fff;
  padding: 25px;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  width: 248px;
}
.tooltip-link {
  padding-top: 15px;
  color: #3b755f;
  font-weight: 700;
}
</style>
