
const mapConfig = {
    "100000":require("./json/china"), //中国
    "340000": require("./json/anhui/anhui"), //安徽省
    "340100": require("./json/anhui/hefei"), //合肥市
    "340200": require("./json/anhui/wuhu"), //芜湖市
    "340300": require("./json/anhui/bengbu"), //蚌埠市
    "340400": require("./json/anhui/huainan"), //淮南市
    "340500": require("./json/anhui/maanshan"), //马鞍山市
    "340600": require("./json/anhui/huaibei"), //淮北市
    "340700": require("./json/anhui/tongling"), //铜陵市
    "340800": require("./json/anhui/anqing"), //安庆市
    "341000": require("./json/anhui/huangshan"), //黄山市
    "341100": require("./json/anhui/chuzhou"), //滁州市
    "341200": require("./json/anhui/fuyang"), //阜阳市
    "341300": require("./json/anhui/suzhou"), //宿州市
    "341500": require("./json/anhui/liuan"), //六安市
    "341600": require("./json/anhui/bozhou"), //亳州市
    "341700": require("./json/anhui/chizhou"), //池州市
    "341800": require("./json/anhui/xuancheng"), //宣城市
};
var divisionMap = {
    "100000":'中国',
    "340000": "安徽省",
    "340100": "合肥市",
    "340200": "芜湖市",
    "340300": "蚌埠市",
    "340400": "淮南市",
    "340500": "马鞍山市",
    "340600": "淮北市",
    "340700": "铜陵市",
    "340800": "安庆市",
    "341000": "黄山市",
    "341100": "滁州市",
    "341200": "阜阳市",
    "341300": "宿州市",
    "341500": "六安市",
    "341600": "亳州市",
    "341700": "池州市",
    "341800": "宣城市",
};
var valueConfig = {
    "100000":[
        {
            name: "安徽省",
            value: 1,
            code: "340000"
        },
    ],
    "340000": [
        //安徽省
        {
            name: "合肥市",
            value: 1,
            code: "340100"
        },
        {
            name: "芜湖市",
            value: 2,
            code: "340200"
        },
        {
            name: "蚌埠市",
            value: 3,
            code: "340300"
        },
        {
            name: "淮南市",
            value: 4,
            code: "340400"
        },
        {
            name: "马鞍山市",
            value: 5,
            code: "340500"
        },
        {
            name: "淮北市",
            value: 6,
            code: "340600"
        },
        {
            name: "铜陵市",
            value: 7,
            code: "340700"
        },
        {
            name: "安庆市",
            value: 8,
            code: "340800"
        },
        {
            name: "黄山市",
            value: 9,
            code: "341000"
        },
        {
            name: "滁州市",
            value: 10,
            code: "341100"
        },
        {
            name: "阜阳市",
            value: 11,
            code: "341200"
        },
        {
            name: "宿州市",
            value: 12,
            code: "341300"
        },
        {
            name: "六安市",
            value: 13,
            code: "341500"
        },
        {
            name: "亳州市",
            value: 14,
            code: "341600"
        },
        {
            name: "池州市",
            value: 15,
            code: "341700"
        },
        {
            name: "宣城市",
            value: 16,
            code: "341800"
        },
    ],

}

export default {
    mapConfig,
    valueConfig,
    divisionMap,
};