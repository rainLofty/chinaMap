# 中国地图
![image.png](https://upload-images.jianshu.io/upload_images/24319978-73315aefe54c7e8e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 首先推荐一个获取地图json文件的地址：
[地图生成器](http://datav.aliyun.com/tools/atlas/#&lat=30.316551722910102&lng=106.75113472219306&zoom=3.5)
![image.png](https://upload-images.jianshu.io/upload_images/24319978-276c344caf219693.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 使用

demo中只有安徽省可以点击，其他的没配置

* npm install 
* demo中的map文件夹直接拿走 就可以使用
* json文件夹里面的json文件直接从上面的网站下载就可以了

## mapData.js 文件
* mapConfig 行政区划编码对应的json文件
* valueConfig 用来告知地图中有哪些区域，value字段不能删除，否则颜色配置失效
* divisionMap 行政区划编码和地名一一对应