<template>
  <!-- 홈 페이지 템플릿 -->
  <div class="demo home text-xs-center">
    <!-- 배너 이미지 및 ONNX.JS 정보 표시 -->
    <v-img class="banner" :src="require('@/assets/background.png')">
      <v-container class="onnx-wrapper">
        <v-layout column justify-center align-center>
          <!-- ONNX.JS 제목 및 설명 -->
          <v-flex class="onnx">ONNX.JS</v-flex>
          <v-flex class="run-onnx">브라우저에서 ONNX 모델 실행하기</v-flex>
          <v-flex class="onnx-info">
            브라우저에서 상호작용하는 머신 러닝<br>
            설치 없이 사용 가능하며, 기기에 독립적<br>
            서버-클라이언트 간 통신 지연 시간 감소<br>
            개인 정보와 보안이 보장됨<br>
            GPU 가속화 지원
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <!-- 데모 카드들 표시 -->
    <div class="demo-card-wrapper">
      <div v-for="info in demoInfo" :key="info.path" class="demo-card">
        <!-- 카드 클릭 시 라우터 링크 연결 -->
        <router-link :to="`/${info.path}`">
          <!-- 데모 카드 이미지 및 제목 -->
          <div class="demo-card-image"><img :src="info.imagePath"/></div>
          <div class="demo-card-heading">{{ info.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// 데모 정보 데이터
const DEMO_INFO = [  
  { title: 'ResNet50, trained on ImageNet', path: 'resnet50', imagePath: require('@/assets/resnet50.png') },
  { title: 'Yolo', path: 'yolo', imagePath: require('@/assets/yolo.png') }
];

@Component
export default class HomePage extends Vue {
  // 데모 정보 배열 초기화
  demoInfo: Array<{title: string, path: string, imagePath: string}> = DEMO_INFO;

  // 생성자에서 데모 정보 배열 초기화
  constructor() {
    super();
    this.demoInfo = DEMO_INFO;
  }
}
</script>

<style scoped lang="postcss">
@import '../variables.css';

/* 홈 페이지 스타일 */
.home {
  background: var(--color-blue);
  height: 100%;
  width: 100%;
}

/* 데모 카드 스타일 */
.demo-card-wrapper {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.demo-card {
  width: 90%;
  max-width: 1000px;
  font-family: var(--font-sans-serif);
  height: 90px;
  background: white;
  border: 1px solid whitesmoke;
  cursor: default;
  user-select: none;
  box-shadow: 3px 3px #062D5B;
  transition: box-shadow 0.2s ease-out;
  margin-bottom: 1rem;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    box-shadow: 3px 3px 5px var(--color-blue-light);
    cursor: pointer;

    & .demo-card-heading {
      color: var(--color-blue);
    }
  }
}

/* 데모 카드 내부 스타일 */
.demo-card a {
  display: flex;
  align-items: center;
}

.demo-card-heading {
  color: var(--color-lightgray);
  flex: 1;
  font-size: 1.1em;
  transition: color 0.2s ease-out;
  text-align: center;
}

.demo-card-image {
  height: 90px;

  & img {
    width: auto;
    height: 100%;
  }
}

/* 배너 및 ONNX 정보 스타일 */
.banner {
  color: white;
  height: 33rem;
}

.onnx-wrapper {
  margin-top: 5rem;
}

.onnx {
  font-size: 3em;
}

.run-onnx {
  font-size: 1.5em;
}

.onnx-info {
  font-family: var(--font-sans-serif-regular);
  font-size: 1em;
  margin-top: 5rem;
}

/* 작은 화면용 반응형 스타일 */
@media (max-width: 500px) {
  .banner {
    height: 10rem;
  }

  .onnx-wrapper {
    padding: 0;
    margin: 0;
    background-color: rgba(0,0,0,0.5);
  }

  .onnx {
    display: none;
  }

  .run-onnx {
    font-size: 1em;
    margin-top: 0.5rem;
  }

  .onnx-info {
    margin-top: 0.5rem;
    font-size: 0.8em;
  }

  .demo-card {
    height: auto;
  }

  .demo-card a {
    flex-direction: column;
  }

  .demo-card-heading {
    margin: 1rem 0;
  }

  .demo-card-image  {
    width: 100%;
    height: auto;
  }

  .demo-card-image img {
    width: 100%;
    height: auto;
  }
}
</style>
