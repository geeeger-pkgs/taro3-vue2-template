## Usage

### 安装项目

```sh
yarn install
```

### 启动项目（测试）

```sh
yarn run dev:weapp
```

### 编译项目

```sh
yarn run build:weapp
```

### sass样式中引入别名文件

```css
.a {
  background: url('~@/src/assets/xxx.png')
}
```

### 路径别名

```js
import { wtf } from '@/src/wtf/wtf.js'
```

### 引用lin-ui中组件

xxxpage.config.js

[lin-ui文档](https://doc.mini.talelin.com/)

```js
export default {
  usingComponents: {
    "l-card": "../../static/lin-ui/card/index"
  }
}
```

### 书写请求

```js
// src/services/moduleA.js

import axios from '@/utils/axios'

export function serviceA(params) {
  return axios.get('/parts-1', params)
}
```

### 新增模块页面

+ 在pages/下新增文件夹
+ 请保证 page.vue 和 page.config.js 一一对应
+ 在app.config.js中新增路径

### 开发文档

- [taro3.x文档](https://taro.zone/)
- [taro3.x中，vue行为与原生vue的区别](https://taro-docs.jd.com/taro/docs/vue)
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [lin-ui文档](https://doc.mini.talelin.com/)
- [windicss文档](https://windicss.org/utilities/flexbox.html)
- [axios文档(中文)](http://axios-js.com/zh-cn/docs/index.html)
- [axios文档(英文)](https://axios-http.com)
- [axios小程序适配器与axios差异文档](https://github.com/bigMeow/axios-miniprogram-adapter/blob/master/doc/api.md)
- [crypto-js模块](https://github.com/brix/crypto-js)
- [js-base64模块](https://github.com/dankogai/js-base64)
- [lodash-es模块](https://lodash.com/docs/4.17.15)


## 常见问题

### windicss

其中类似 w-1/3这样改成了w-1_3

w-1.5这样的带小数点的无法使用

aaaa-bbb_\[calcxxxx\]这样的也无法使用

### 包管理

建议使用yarn

### 样式

> taro3-vue不支持vue style scoped属性

在taro3-vue中，同时支持 css modules这样的写法。

推荐写法: .module-name__sub-modulename--statusOrStyle

```scss
/* 示例 */

.custom-component {
  &__title {
    font-size: 20px;
    &--disabled {
      color: gray;
    }
  }

  &__logo {
    width: 10px;
    height: 10px;
  }

  &--center {
    text-align: center;
  }
}
```

已知 taro3 配合vue单文件并不能很好的使用css modules，所以推荐规范scss写法

