<template>
  <!-- 앱 전체 레이아웃 템플릿 -->
  <div id="app">
    <!-- 네비게이션 드로어 -->
    <v-app>
      <v-navigation-drawer v-model="showNav" absolute fixed floating app>
        <main-menu :currentView="currentView"></main-menu>
      </v-navigation-drawer>

      <!-- 툴바 -->
      <v-toolbar app dark flat color="primary">
        <v-toolbar-side-icon @click.stop="showNav = !showNav"></v-toolbar-side-icon>
        <v-toolbar-title>{{ currentTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <!-- 컨텐츠 영역 -->
      <v-content>
        <v-container @click.stop="showNav = false" fluid fill-height class="content-panel">
          <div class="demo">
            <div class="ui-container">
              <!-- 라우터 뷰로 컴포넌트 렌더링 -->
              <router-view :hasWebGL="hasWebGL"></router-view>
              <!-- 푸터 레이블 -->
              <v-layout column justify-center align-center fill-height class="footer-label">
                {{ currentDescription }}
                <a target="_blank" :href="currentLink">{{ currentLink }}</a>
              </v-layout>  
            </div>
          </div>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import MainMenu from './components/MainMenu.vue';
import { DEMO_TITLES, DEMO_DESCRIPTIONS, DEMO_MODEL_LINKS } from './data/demo-titles';
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  components: { MainMenu }
})

export default class App extends Vue {
  showNav: boolean;
  hasWebGL: boolean;

  constructor() {
    super();
    this.showNav = false;
    this.hasWebGL = true;
  }

  // 현재 뷰의 경로 반환
  get currentView() {
    const path = this.$route.path;
    return path.replace(/^\//, '') || 'home';
  }

  // 현재 뷰의 제목 반환
  get currentTitle() {
    const title = DEMO_TITLES[this.currentView];
    if (title) {
      return title;
    } else {
      return 'ONNX.JS';
    }
  }

  // 현재 뷰의 설명 반환
  get currentDescription() {
    const description = DEMO_DESCRIPTIONS[this.currentView];
    if (description) {
      return description;
    } else {
      return '';
    }
  }

  // 현재 뷰의 링크 반환
  get currentLink() {
    const link = DEMO_MODEL_LINKS[this.currentView];
    if (link) {
      return link;
    } else {
      return '';
    }
  }
}
</script>

<style lang="postcss">
/* 외부에서 불러온 스타일 및 변수 */

/* 앱 스타일 */
.application {
  font-family: var(--font-sans-serif)!important;
  font-size: 18px;
}

/* 라이트 테마 스타일 */
.application.theme--light {
  background: linear-gradient(0deg, #cccccc, #f0f0f0) !important;
  color: var(--color-darkgray);
}

/* 푸터 스타일 */
footer {
  background: #cccccc !important;
}

/* 푸터 레이블 스타일 */
.footer-label {
  font-family: var(--font-sans-serif);
  font-size: 16px;
  color: var(--color-lightgray);
  text-align: left;
  user-select: none;
  cursor: default;
}

/* 하이퍼링크 스타일 */
a {
  text-decoration: none;
}

/* 데모 영역 스타일 */
.demo {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Vuetify 컴포넌트 오버라이딩 스타일 */

/* 네비게이션 드로어 스타일 */
.navigation-drawer {
  background-color: whitesmoke !important;
}

/* 입력 필드 및 레이블 스타일 */
.input-group--select .input-group__selections__comma,
.input-group input,
.input-group textarea {
  font-size: 20px !important;
  color: var(--color-black) !important;
}

.input-group:not(.input-group--error) label {
  font-size: 20px !important;
  color: var(--color-lightgray) !important;
}

/* 리스트 아이템 스타일 */
.list .list__tile:not(.list__tile--active) {
  color: var(--color-darkgray) !important;
}

.list__tile {
  font-size: 16px !important;
  height: 35px !important;
  font-family: var(--font-monospace);
}

/* 컨텐츠 패널 스타일 */
.content-panel {
  padding: 0 !important;
}

/* 백엔드 선택 스타일 */
.select-backend {
  text-align: center;
  font-family: var(--font-sans-serif);
  font-size: 20px;
  color: var(--color-black);
  margin-right: 10px;
}

/* 오류 메시지 스타일 */
.error-message {
  color: var(--color-error);
  font-size: 15px;
  text-align: center;
}
</style>
