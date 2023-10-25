<template>
    <!-- 사이드 바 메뉴 템플릿 -->
    <aside class="menu">
      <!-- 로고 -->
      <div class="logo"><a href=".">ONNX.JS</a></div>
      <!-- 데모 항목 라벨 -->
      <p class="menu-label">Demos</p>
      <!-- 데모 항목 목록 -->
      <ul class="menu-list">
        <!-- 라우터 링크로 연결된 데모 항목
        <router-link :to="'/yolo'">
          <span class="menu-item-heading">Yolo</span>
        </router-link> -->
        <!-- 데모 항목 루프 -->
        <li v-for="info in demoInfo" :key="info.path" :class="{ active: currentView === 'resnet50' }">
          <!-- 라우터 링크로 연결된 데모 항목 -->
          <router-link :to="`/${info.path}`">
            <span class="menu-item-heading">{{ info.model }}</span>
          </router-link>
        </li>
      </ul>
      <!-- 링크 라벨 -->
      <p class="menu-label">Links</p>
      <!-- 링크 목록 -->
      <ul class="menu-list github">
        <!-- 링크 항목들 -->
        <li>
          <a href="https://github.com/Microsoft/onnxjs" target="_blank" rel="noopener noreferrer">
            <span class="menu-item-heading"> ONNX.js GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Microsoft/onnxjs-demo" target="_blank" rel="noopener noreferrer">
            <span class="menu-item-heading"> ONNX.js-demo Github</span>
          </a>
        </li>
        <li>
          <a href="https://onnx.ai/" target="_blank" rel="noopener noreferrer">
            <span class="menu-item-heading"> ONNX</span>
          </a>
        </li>
      </ul>
    </aside>
  </template>
  
  <script scoped lang='ts'>
  import {Vue, Component, Prop} from 'vue-property-decorator'; // Vue Property Decorator를 사용하여 Vue 컴포넌트를 정의하기 위한 필요한 모듈
  const DEMO_INFO = [
    { model: 'ResNet50', title: 'ResNet, trained on ImageNet', path: 'resnet50'},  
    { model: 'Yolo', title: 'Yolo', path: 'yolo'},
  ];
  
  @Component
  export default class MainMenu extends Vue {
    @Prop({default: 'home' }) currentView!: string;
    demoInfo: Array<{model: string, title: string, path: string}> = DEMO_INFO;
    constructor() {
      super();
      this.demoInfo = DEMO_INFO;
    }
  }
  </script>
  
  <style lang="postcss">
  @import '../variables.css';
  
  /* 메뉴 스타일 */
  .menu {
    font-family: var(--font-sans-serif);
    padding: 20px 40px;
    background: whitesmoke;
  }
  
  /* 로고 스타일 */
  .logo {
    font-size: 20px;
    
    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  
  /* 라벨 스타일 */
  .menu-label {
    user-select: none;
    cursor: default;
    font-size: 11px;
    color: var(--color-lightgray);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 11px 0;
  }
  
  /* 메뉴 리스트 스타일 */
  .menu-list {
    list-style: none;
  
    & li {
      color: var(--color-lightgray);
      border-left: 2px solid whitesmoke;
      margin-bottom: 5px;
    }
  
    & li.active {
      border-left: 2px solid var(--color-blue);
    }
  
    & a {
      padding: 7px 11px;
      color: var(--color-blue);
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
  
      &:hover {
        color: var(--color-blue);
        background-color: whitesmoke;
      }
  
      & span.menu-item-heading {
        display: flex;
        align-items: center;
        margin-right: 10px;
        font-size: 14px;
      }
  
      & span.menu-item-subheading {
        color: #999999;
        font-size: 10px;
      }
    }
  }
  
  /* 깃허브 및 연락처 링크 스타일 */
  .menu-list.github,
  .menu-list.contact {
    & li {
      padding: 5px 10px;
      font-size: 14px;
    }
  
    & a {
      color: var(--color-blue);
      padding: 0;
      display: inline-flex;
      background-color: none;
      transition: color 0.2s ease-in-out;
  
      & .icon {
        color: var(--color-blue);
        transition: color 0.2s ease-in-out;
        margin-right: 5px;
      }
  
      &:hover {
        color: var(--color-blue-light);
        background: none;
  
        & .icon {
          color: var(--color-blue-light);
        }
      }
    }
  }
  </style>
  