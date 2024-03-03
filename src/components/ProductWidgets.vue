<script lang="ts">
import axios from 'axios'
import WidgetItem from './WidgetItem.vue'

export default {
  components: {
    WidgetItem
  },
  data() {
    return {
      widgets: []
      // how make a strict typization Widget[]
    }
  },
  mounted() {
    axios.get('https://api.mocki.io/v2/016d11e8/product-widgets').then((response) => {
      this.widgets = response.data
    })
  }
}
</script>

<template>
  <div class="wrapper">
    <h1>Per product widgets</h1>
    <hr style="background-color: #B0B0B0;"/>
    <div class="widgets-list">
      <WidgetItem v-for="(widget, index) in widgets" :key="index" :widget="widget"></WidgetItem>
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
  .widgets-list {
    flex-direction: column;
    min-height: auto;
    min-width: auto;
  }
}
</style>
