# 💎 프리온보딩 백엔드 인턴십 10월 선발 과제
</br>

## 목차
#### [1. 개요](#개요)
##### [&nbsp;&nbsp;1-1. 실행 환경](#실행-환경)
##### [&nbsp;&nbsp;1-2. 기술 스택](#기술-스택)
#### [2. ERD 및 디렉토리 구조](#ERD-및-디렉토리-구조)
##### &nbsp;&nbsp;2-1. ERD
##### &nbsp;&nbsp;2-2. 디렉토리 구조
#### [3. 기능구현](#기능구현)
#### [4. API 명세](#API-명세)

</br>

## 개요
* 프리온보딩 백엔드 인턴십에 들어가기 위한 기술 과제를 수행한다.
* 원티드팅에서 제시한 서비스 개요를 읽고 요구사항을 만족하는 API 서버를 구현해야 한다.
* 본 서비스는 기업의 채용을 위한 서비스로 회사는 채용공고를 생성하고, 이에 사용자는 지원합니다.

</br>

### 실행 환경
* .env 파일
```
PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=

JWT_SECRET_KEY=
```

* 실행시
```
npm run start
```

### 기술 스택
<img src="https://img.shields.io/badge/TypeScript-version 5-3178C6">&nbsp;
<img src="https://img.shields.io/badge/Nest.js-version 10-E0234E">&nbsp;
<img src="https://img.shields.io/badge/TypeORM-version 0.3-fcad03">&nbsp;
<img src="https://img.shields.io/badge/MySQL-version 8-00758F">&nbsp;

</br>

## ERD 및 디렉토리 구조
<details>
<summary><strong>ERD</strong></summary>
<div markdown="1">
 
<img src="https://github.com/kangssu/wanted-pre-onboarding-backend/assets/83870420/3d4ea0a8-a6d7-4d2c-8c92-963ed02eacbf">
</div>
</details>

<details>
<summary><strong>디렉토리 구조</strong></summary>
<div markdown="1">
 
```bash
src
 ┣ custom
 ┃ ┗ customException.ts
 ┣ decorator
 ┃ ┗ userDecorator.ts
 ┣ entity
 ┃ ┣ company.entity.ts
 ┃ ┣ jobVacancy.entity.ts
 ┃ ┣ supportHistory.entity.ts
 ┃ ┗ user.entity.ts
 ┣ enum
 ┃ ┗ errorCode.enum.ts
 ┣ feature
 ┃ ┣ auth
 ┃ ┃ ┣ guard
 ┃ ┃ ┃ ┗ jwt.guard.ts
 ┃ ┃ ┣ strategy
 ┃ ┃ ┃ ┗ jwt.strategy.ts
 ┃ ┃ ┣ auth.app.module.ts
 ┃ ┃ ┣ auth.controller.ts
 ┃ ┃ ┗ auth.service.ts
 ┃ ┣ company
 ┃ ┃ ┣ company.app.module.ts
 ┃ ┃ ┣ company.controller.ts
 ┃ ┃ ┣ company.dto.ts
 ┃ ┃ ┣ company.lib.ts
 ┃ ┃ ┗ company.service.ts
 ┃ ┣ job_vacancy
 ┃ ┃ ┣ support_history
 ┃ ┃ ┃ ┣ supportHistory.app.module.ts
 ┃ ┃ ┃ ┣ supportHistory.controller.ts
 ┃ ┃ ┃ ┣ supportHistory.dto.ts
 ┃ ┃ ┃ ┗ supportHistory.service.ts
 ┃ ┃ ┣ jobVacancy.app.module.ts
 ┃ ┃ ┣ jobVacancy.controller.ts
 ┃ ┃ ┣ jobVacancy.dto.ts
 ┃ ┃ ┣ jobVacancy.lib.ts
 ┃ ┃ ┗ jobVacancy.service.ts
 ┃ ┣ search
 ┃ ┃ ┣ search.app.module.ts
 ┃ ┃ ┣ search.controller.ts
 ┃ ┃ ┣ search.dto.ts
 ┃ ┃ ┗ search.service.ts
 ┃ ┗ user
 ┃ ┃ ┣ user.app.module.ts
 ┃ ┃ ┣ user.controller.ts
 ┃ ┃ ┣ user.dto.ts
 ┃ ┃ ┗ user.service.ts
 ┣ app.controller.spec.ts
 ┣ app.controller.ts
 ┣ app.module.ts
 ┣ app.service.ts
 ┗ main.ts
```
</div>
</details>

</br>

## 기능구현
### 회원가입
* 이메일, 닉네임 중복체크 및 이메일 형식 유효성 체크
* 패스워드 BCrypt 암호화 처리 (패스워드 불일치 시 등록 불가능)

### 로그인
* 이메일, 패스워드 일치 여부 유효성 체크
* 로그인 시 JWT(Json Web Token) 발급 -> 모든 API 요청시 JWT 인가

### 회사
* 회사는 사용자 아이디당 1개만 등록(단, 이름 중복 불가)
* 유저 1명이 이미 회사 1개를 등록되었거나 회사 이름 중복일 경우 예외처리

### 채용 공고
* 회사를 등록한 유저만 생성, 수정, 삭제 가능
* 채용공고 조회는 누구나 접근 가능 및 회사 이름,국가,지역,내용,포지션,스킬 선택하여 자유롭게 검색 가능
* A 채용공고를 등록한 회사의 다른 채용공고의 ID 값 조회 가능(단, 현재 보고 있는 A 채용공고 ID는 제외)

### 채용 지원
* 채용공고 상세에서 지원하며 한명의 유저는 1개의 채용공고 지원, 지원취소 가능
* 만약, 삭제된 채용공고에 지원한 경우/이미 지원한 채용공고에 중복 지원할 경우 예외처리

</br>

## API 명세
|No|Title|Method|Path|Authorization|
|------|------|------|------|------|
|1|사용자 회원가입|POST|/user/sign-up|X|
|2|사용자 로그인|POST|/auth/login|X|
|3|회사 등록|POST|/company|O|
|4|채용공고 등록|POST|/job-vacancy|O|
|5|채용공고 수정|PATCH|/job-vacancy/:id|O|
|6|채용공고 삭제|DELETE|/job-vacancy/:id|O|
|7|채용공고 전체 조회|GET|/job-vacancy|X|
|8|채용공고 검색|GET|/search/job-vacancy?companyName=원티드&area=서울...|X|
|9|채용공고 상세 조회|GET|/job-vacancy/:id|X|
|10|채용공고 지원내역 등록|POST|/job-vacancy/:jobVacancyId/support-history|O|
|11|채용공고 지원내역 취소|DELETE|/job-vacancy/:jobVacancyId/support-history|O|

</br>

[🌟🌟🌟 API 명세 상세보기 🌟🌟🌟](https://github.com/kangssu/wanted-pre-onboarding-backend/blob/main/docs/api.md)

</br>
