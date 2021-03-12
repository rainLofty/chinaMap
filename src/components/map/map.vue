<template>
  <div class="amap">
    <div class="nav_map tinyTitle">
      行政区：
      <template v-for="(item, index) in areaPath">
        <span v-if="areaPath.length == index + 1" :key="index">
          {{ divisionMap[item] }}
        </span>
        <a href="javascript:;" :key="index" v-else>
          <b @click="pathClicked(item)">{{ divisionMap[item] }}</b>
          <i class="el-icon-arrow-right"></i>
        </a>
      </template>
    </div>
    <div id="china_map" ref="map"></div>
  </div>
</template>
<script>
var echarts = require("echarts");
import "echarts/theme/macarons.js";
import chinaMap from "./mapData.js";
export default {
  name: "amap",
  data() {
    return {
      areaCode: "100000", //340000  当前显示地图的城市行政区划编码
      //颜色配置
      colorData: {
        340100: "#f00",
        340200: "#0f0",
        341800: "#00f",
        341100: "#e0f",
      },
      mapChartObj: null,
      mapData: [],
      areaPath: [],
      divisionMap: {}, //区划代码对应的中文map
      currentXianqu: "",
      colorConfig: {},
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.colorConfig = chinaMap.editColor(this.areaCode, this.colorData); //颜色配置
      this.divisionMap = chinaMap.divisionMap; //区划名称和编码一一对应
      this.mapChartObj = echarts.init(this.$refs.map, "macarons");

      // 下钻功能  不需要直接删除即可
      this.mapChartObj.on("click", (params) => {
        if (params.data && params.data.code) {
          this.mapClick(params.data.code);
        }
      });

      //卸载移入事件,为了不让引入变色加的这个方法，可以删除
      this.mapChartObj.on("mouseover", function (params) {
        this.dispatchAction({ type: "downplay" });
      });

      this.init();
    },
    init() {
      let value = this.areaCode;
      if (value && chinaMap.mapConfig[value]) {
        this.areaPath = [];
        this.areaPath.push(value);
        this.generalMap(value);
      }
    },
    //点击面包屑导航
    pathClicked(areaCode) {
      let index = this.indexOfArr(this.areaPath, areaCode);
      this.areaPath.splice(index + 1);
      this.generalMap(areaCode);
    },
    mapClick(areaCode) {
      //点击地图
      let temp = chinaMap.mapConfig[areaCode];
      if (!temp) {
        return;
      }
      this.areaPath.push(areaCode);

      this.mapData = chinaMap.valueConfig[areaCode] || [];
      this.generalMap(areaCode);
    },
    generalMap(areaCode) {
      if (!areaCode) {
        areaCode = this.areaCode;
      }
      this.colorConfig = chinaMap.editColor(areaCode, this.colorData); //颜色配置
      this.mapData = chinaMap.valueConfig[areaCode] || [];
      this.mapChartObj.clear();
      echarts.registerMap(areaCode, chinaMap.mapConfig[areaCode]);

      let option = {
        series: [
          {
            type: "map", //effectScatter
            map: areaCode,
            roam: true,
            zoom: 1.15,
            label: {
              show: true,
              color: "#333",
              fontSize: 15,
            },
            itemStyle: {
              normal: {
                //正常颜色
                borderColor: "rgba(0, 255, 0, 0.3)", //"#03fb7d",
                borderWidth: 1,
              },
            },
            coordinateSystem: "geo",
            data: this.mapData,
            symbolSize: 16,
          },
        ],
        dataRange: {
          show: false,
          splitList: this.colorConfig || [],
        },
      };
      this.mapChartObj.setOption(option);
    },
    indexOfArr(arr, val) {
      let isArray = arr instanceof Array;
      if (!isArray) {
        return false;
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) return i;
      }
      return -1;
    },
  },
};
</script>
<style lang="less" scoped>
.amap {
  position: relative;
  width: 100%;
  height: 100%;
  color: #333;
  #china_map {
    width: 100%;
    height: 100%;
    & > div {
      width: 100%;
      height: 100%;
    }
  }
  .nav_map {
    margin: 0 0 0 20px !important;
    padding: 0 0px 0 8px;
    font-size: 16px;
    line-height: 22px;
    height: 22px;
    color: #000;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 2;
    width: 90%;
    font-size: 16px;
    box-sizing: border-box;
    background: #fff;
    b {
      font-weight: normal;
    }
    a {
      color: #000;
      padding: 0;
      text-align: left;
    }
    i {
      color: #000;
      font-size: 12px;
      display: inline-block;
      width: 20px;
      text-align: center;
    }
    span {
      color: #000;
      font-size: 16px;
    }
  }
}
</style>

