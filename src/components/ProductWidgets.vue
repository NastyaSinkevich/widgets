<script lang="ts" setup>
import axios from 'axios';
import WidgetItem from './WidgetItem.vue';
import type { Widget } from '@/interfaces/Widget';
import { onBeforeMount, ref } from 'vue';

const widgets = ref<Widget[]>([]);

onBeforeMount(() => {
  axios.get('https://api.mocki.io/v2/016d11e8/product-widgets').then((response) => {
    widgets.value = response.data;
  })
})

const handleChangeColor = (color: string, index: number) => {
  widgets.value[index].selectedColor = color;
}

const handleChangeLinkToProfile = (isLinked: boolean, index: number) => {
  widgets.value[index].linked = isLinked;
}

const handleChangeActive = (isActive: boolean, index: number) => {
  widgets.value.forEach(widget => {
    widget.active= false;
  });
  widgets.value[index].active = isActive;
}
</script>

<template>
  <div class="wrapper">
    <h1>Per product widgets</h1>
    <hr style="background-color: #b0b0b0" />
    <div class="widgets-list">
      <WidgetItem
        v-for="(widget, index) in widgets"
        :key="index"
        :widget="widget"
        @change-color="handleChangeColor($event, index)"
        @link="handleChangeLinkToProfile($event, index)"
        @activate="handleChangeActive($event, index)"
      ></WidgetItem>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 420px;
  min-width: 850px;
  background-color: #f9f9f9;
  border-radius: 9px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 25px 20px;
}

.widgets-list {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

@media only screen and (max-width: 896px) {
  .wrapper {
    min-height: 0;
    min-width: 0;
  }
  .widgets-list {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
