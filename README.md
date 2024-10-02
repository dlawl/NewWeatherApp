

![Animation539](https://github.com/user-attachments/assets/418fa16b-7128-4939-9370-3d84bc629fd4)


---

# Weather App

Weather App은 사용자가 실시간으로 날씨 정보를 조회할 수 있는 플랫폼입니다. 다양한 도시의 기온, 대기 오염 정보, 5일간의 날씨 예보 등을 제공합니다.

## 주요 기능

- **실시간 날씨 정보**: 현재 기온, 습도, 바람 속도, 체감 온도 등을 확인할 수 있습니다.
- **대기 오염 정보**: 실시간 대기 오염 지수를 확인할 수 있습니다.
- **5일 예보**: 사용자가 선택한 도시의 5일간 날씨 예보를 제공합니다.
- **도시 검색**: 사용자가 원하는 도시를 검색하여 날씨 정보를 조회할 수 있습니다.
- **지도 기능**: 검색한 도시의 위치를 지도에서 확인할 수 있습니다.

## 시작 가이드

### 요구 사항

- Node.js 18.x 이상

### 설치

1. 의존성 설치:

   ```bash
   npm install
   ```

2. 루트 디렉토리에 `.env` 파일을 생성하고 OpenWeatherMap API 설정 추가:

   ```bash
   OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
   ```

3. 개발 서버 시작:

   ```bash
   npm run dev
   ```


## 프로젝트 동기 및 목표

사용자에게 실시간 날씨 정보를 제공하여 일상 생활의 계획에 도움을 주는 것을 목표로 합니다. 이 프로젝트는 Next.js와 TailwindCSS를 활용하여 구축되었습니다.

## 개발 환경

### 프론트엔드
TypeScript, React, Next.js, TailwindCSS

### 데이터 제공 API

OpenWeatherMap API

### 통합 및 도구

ESLint, Prettier, axios, lodash.debounce

## 프로젝트를 진행하며 느낀점

- **데이터 연동**: OpenWeatherMap API를 활용하여 다양한 날씨 데이터를 효과적으로 연동할 수 있었습니다.
- **실시간 업데이트**: 실시간 데이터 제공을 통해 동적인 사용자 경험을 구현했습니다.
- **UI/UX 최적화**: TailwindCSS를 사용하여 반응형 디자인을 구현하고, 사용자 친화적인 인터페이스를 제공했습니다.


## 결론

Weather App은 실시간 날씨 정보를 제공하여 사용자에게 유용한 정보를 제공합니다. 이 프로젝트는 최신 웹 기술을 활용하여 사용자 친화적인 인터페이스와 동적인 경험을 제공합니다.

---
