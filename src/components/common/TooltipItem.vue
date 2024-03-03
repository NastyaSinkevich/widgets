<template>
  <span>
    <span @mouseover="showTooltip" @mouseout="hideTooltip"><TooltipIcon></TooltipIcon></span>
    <div
      v-show="isTooltipVisible"
      class="tooltip"
      :style="{ top: `${position.top}px`, left: `${position.left}px` }"
    >
      <p>{{ tooltipText }}</p>
      <a :href="tooltipLink" class="tooltip-link">{{ tooltipLinkText }}</a>
    </div>
  </span>
</template>

<script>
import { ref } from 'vue'
import TooltipIcon from '@/images/TooltipIcon.vue'

export default {
  components: {
    TooltipIcon
  },
  data() {
    return {
      isTooltipVisible: false,
      position: { top: 0, left: 0 },
      tooltipLink: '#',
      tooltipLinkText: 'View Public Profile',
      tooltipText:
        'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.'
    }
  },
  methods: {
    showTooltip(event) {
      this.isTooltipVisible = true
      this.position = {
        top: event.clientY + 10, // Add an offset for better positioning
        left: event.clientX + 10
      }
    },
    hideTooltip() {
      this.isTooltipVisible = false
    }
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
</style>
