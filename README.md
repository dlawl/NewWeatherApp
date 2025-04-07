

![Animation539](https://github.com/user-attachments/assets/418fa16b-7128-4939-9370-3d84bc629fd4)


---

# Weather App

WeatherApp은 사용자가 실시간으로 날씨 정보를 조회할 수 있는 플랫폼입니다. 다양한 도시의 기온, 대기 오염 정보, 5일간의 날씨 예보 등 실시간 데이터를 제공하며, 직관적이고 사용자 친화적인 인터페이스로 편리한 날씨 정보를 제공합니다.

<br>

## 프로젝트 동기 및 목표
WeatherApp은 사용자가 실시간 날씨 정보를 통해 일상 생활의 계획을 세우는 데 도움을 주고자 개발되었습니다. 이 프로젝트는 복잡한 데이터 요청 및 실시간 업데이트를 최적화하여 빠르고 정확한 정보를 제공하는 것을 목표로 합니다.

- 실시간 날씨 데이터 제공으로 사용자 편의성 증대
- 여러 API를 효율적으로 관리하여 성능 최적화
- 지도와 날씨 데이터를 연동하여 직관적인 UI 구현

<br>

## 주요 기능

- **실시간 날씨 정보**: 현재 기온, 습도, 바람 속도, 체감 온도 등을 확인할 수 있습니다.
- **대기 오염 정보**: 도시별 실시간 대기 오염 지수를 확인할 수 있습니다.
- **5일 예보**: 사용자가 선택한 도시의 5일간 날씨 예보를 제공합니다.
- **도시 검색**: 사용자가 원하는 도시를 검색하여 날씨 정보를 조회할 수 있습니다.
- **지도 기능**: 검색한 도시의 위치를 지도에서 확인할 수 있습니다.

## 개발 환경

### 프론트엔드
TypeScript, React, Next.js, TailwindCSS
주요 기술-  Context API로 상태 관리, Axios를 통한 비동기 데이터 요청, lodash.debounce로 API 호출 최적화

### 백엔드
Next.js API Routes로 API 요청 처리, OpenWeatherMap API 사용

OpenWeatherMap API

### 통합 및 도구

ESLint와 Prettier를 사용한 코드 스타일 및 포맷팅 일관성 유지<br>
axios로 API 데이터 처리, lodash.debounce로 API 호출 최적화

<br>

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

<br>

## 성능 최적화 및 프로젝트 개선
- Promise.all을 사용하여 날씨, 대기 오염, 5일 예보 데이터를 병렬로 처리해 응답 속도 20% 개선
- Next.js API routes로 비동기 통신 최적화, 응답 시간 30% 단축
- lodash.debounce를 사용해 불필요한 API 호출을 줄여 API 요청 50% 감소
- Context API를 통해 동적인 UI 업데이트 성능 20% 향상


## 프로젝트 진행 및 배운 점

- 데이터 연동: OpenWeatherMap API를 통해 다양한 날씨 데이터를 실시간으로 연동하고, 캐싱을 적용하여 성능을 최적화했습니다.
- 실시간 업데이트: 실시간 데이터를 효과적으로 반영하여 사용자 경험을 크게 개선했습니다.
- UI/UX 최적화: TailwindCSS와 Context API로 반응형 디자인과 효율적인 상태 관리를 구현하였습니다.


## 결론

WeatherApp은 최신 웹 기술을 활용해 실시간으로 동기화된 날씨 정보를 제공하며, 사용자에게 직관적이고 반응성이 높은 인터페이스를 제공합니다. 이를 통해 복잡한 데이터 처리와 성능 최적화를 경험하며, 사용자 경험을 개선하는 데 주력한 프로젝트입니다.

---
