# POS系统 移动端 React Native 说明

## 目录
1. [特点](#features)
1. [环境需求](#requirements)
1. [目录结构](#application-structure)
1. [Storybook 使用](#storybook)

## 主要技术栈
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [redux-saga](https://github.com/redux-saga/redux-saga)
* [expo](https://github.com/expo/expo)
* [react-native-elements](https://react-native-training.github.io/react-native-elements/)
* [styled-components](https://github.com/styled-components/styled-components)
* [react-router-native](https://github.com/rackt/react-router)
* [babel](https://github.com/babel/babel)
* [Storybook](https://storybooks.js.org/)

## 环境需求
* node `^4.5.0`
* yarn `^0.22.0` or npm `^3.0.0`


### 安装

克隆该项目，建议您使用 [Yarn](https://yarnpkg.com/) 来安装依赖, 当然也可以使用 `npm install` ，但不推荐。

```bash
$ yarn install          # 安装项目依赖
$ flow-typed install    # 安装类型的依赖关系,如果你想使用 flow
$ yarn start            # 编译和发布 (类似于 `npm start`)
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

在开发过程中，主要依靠`npm start`来完成，但还有其他脚本可供使用，如下：

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|用EXPO启动应用，并启动Storybook。 HMR将在开发中启用。|
|`ios`|使用iOS模拟器启动应用程序(限 Mac OS)|
|`android`|使用 android 模拟器启动应用程序 (需要依赖 android studio)|
|`test`|在监视模式下使用 Jest 运行单元测试。|
|`eject`|若不用Expo，该命令可自定义所有依赖|

## 应用程序结构

```
.
├── .expo                    
├── flow-typed               
├── node_modules             # 所有依赖
├── src                      # 应用程序源码
│   ├── components           # 所有应用程序的组件
│   ├── pages                # 应用程序页面
│   │   ├── Home             # 首页
│   │   │   ├── containers   # 页面的容器
│   │   │   ├── reducks      # 与 Redux 相关 (Model, Creators, Reducers)
│   │   │   ├── routes       # 路由相关
│   │   │   ├── sagas        # sagas
│   │   │   └── selectors    # 预留文件夹
│   │   ├── Main             # 第二个页面
│   │   │   ├── containers   
│   │   │   ├── reducks      
│   │   │   ├── sagas       
│   │   │   └── selectors    
│   ├── routes               # 应用程序路由
│   ├── services             # 应用程序接口  API
│   ├── store                # 存储和中间件
│   └── styles               # 书写样式的插件
├── tests                    # 测试工具
├── .babelrc                 # Babel 配置文件
├── .flowconfig              # Flow 配置文件
├── .watchmanconfig          # Watchman 配置文件
├── App.js                   # 应用程序入口
├── app.json                 # Expo 配置文件
├── package.json             # 应用程序依赖配置
├── README.md                # 说明
└── yarn.lock                # Yarn 配置文件
```

## 关于 Styled Components 

- [官方网站](https://www.styled-components.com/)
- [[译] 一个关于 Styled Components 的五分钟介绍](https://github.com/sqrthree/sqrthree.github.io/issues/11)
- [Styled Components：让样式也成为组件](http://www.alloyteam.com/2017/05/guide-styled-components/)

## 关于 Storybook

React Storybook 在构建UI时非常酷。 

Storybook 已经在样板中，当您想要使用它时，需要激活。

To activate it you must go to in `App.js` in the root of the project and comment the ***App*** component and 
uncomment the ***Storybook*** Component
the 

```js
//*********** COMMENT THE CODE BELOW TO USE STORYBOOK *************/
/*import React, { Component } from 'react'
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux'

// all routes
import Routes from './src/routes'

// store redux
import store from './src/store'

// history
import { history } from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Routes />
        </NativeRouter>
      </Provider>
    );
  }
} */
//*********** UNCOMMENT THE CODE BELOW TO USE STORYBOOK *************/

import Storybook from './storybook'
export default Storybook

```

after that, run `npm start` or any other command(ios|android) to run your project then go to `http://localhost:7007`.
***You gonna see some errors in the terminal but it's okey wait the end***

That's it, you have ***Storybook*** in a React Native app with Expo, all need to do now is create your **stories** ;-)

MIT License# pos-mobile
