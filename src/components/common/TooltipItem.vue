<template>
  <span  ref="tooltip">
    <span @mouseover="showTooltip($event)" @mouseout="hideTooltip($event)"
      ><TooltipIcon></TooltipIcon
    ></span>
    <div
      v-show="isTooltipVisible"
      :class="{ 'fade-in': isTooltipVisible, 'fade-out': !isTooltipVisible }"
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
import { ref } from 'vue'
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
const tooltip = ref(null);

let position = { top: 0, left: 0 }
let isTooltipVisible = ref<boolean>(false)

const showTooltip = (event: MouseEvent) => {
  isTooltipVisible.value = true
  position = {
    top: event.clientY,
    left: event.clientX
  }
}
const hideTooltip = (event: MouseEvent) => {
  if (event.target !== tooltip?.value) {
    isTooltipVisible.value = false
  }
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
.fade-in {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

.fade-out {
  opacity: 0;
  transition: opacity 200ms ease-out;
}
</style>
