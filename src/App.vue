<template>
  <div id="app">
    <amap></amap>
  </div>
</template>
<script>
import amap from "./components/map/map";
export default {
  components: {
    amap,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="less">
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
