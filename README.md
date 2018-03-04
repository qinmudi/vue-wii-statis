# wii.statis

> 平台组前端统计插件

## 安装

```
npm i vue-wii-statis --save
```

## 引入

```javascript
import WiiStatis from 'vue-wii-statis'

Vue.use(WiiStatis,options)
```

### options
参数名 | 参数说明 | 是否必填
- | :-: | -:
 sid | 统计appid | 必填
 cid | 如果开启自定义事件，此项目为必填，否则不填 | 选填
 autoReport | 是否开启自动上报，1:init完成则上报一次,0:使用pgv方法才上报 | 选填
 senseHash | hash锚点是否进入url统计 | 选填
 senseQuery | url参数是否进入url统计 | 选填
 performanceMonitor | 是否开启性能监控 | 选填
 ignoreParams | 开启url参数上报时，可忽略部分参数拼接上报 | 选填

## 指令形式

### 字面量形式

```html
<button type="button" v-statis="{evtId:'ios_download', value: { color: 'block', text: 'ok' }}" @click="test">字面量统计</button>
```

### 变量形式
```html
<button type="button" v-statis="mystatis" @click="test">变量统计</button>
```

```javascript
data:{
    mystatis:{
        evtId: 'android_download',
        value: {
          color: 'red',
          text: 'yes'
        }
    }
}
```

## 函数调用

```javascript
this.$statis.traceEvent(evtId,value);
```

### 参数说明
参数名 | 参数说明
- | :-:
 evtId | mta 的事件ID
 value | 自定义参数