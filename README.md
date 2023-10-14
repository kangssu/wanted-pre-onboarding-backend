# 프리온보딩 백엔드 인턴십 선발 과제
</br>

## 💎 목적
* 프리온보딩 백엔드 인턴십 100명 안에 들어가기 위한 기술 과제를 수행한다.
* 원티드팅에서 제시한 서비스 개요를 읽고 요구사항을 만족하는 API 서버를 구현해야 한다.
</br>

## 💎 기술과제에 사용한 언어 및 프레임워크
* 언어 : TypeScript
* 프레임워크 : nestJS
* ORM : typeORM
</br>

## 💎 서비스 개요
* 본 서비스는 기업의 채용을 위한 웹 서비스 입니다.
* 회사는 채용공고를 생성하고, 이에 사용자는 지원합니다.
</br>

## 💎 요구사항
### 1. 채용공고를 등록합니다.
회사는 아래 데이터와 같이 채용공고를 등록합니다.
```
{
  "회사_id":회사_id,
  "채용포지션":"백엔드 주니어 개발자",
  "채용보상금":1000000,
  "채용내용":"원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
  "사용기술":"Python"
}
```

### 2. 채용공고를 수정합니다.
회사는 아래 데이터와 같이 채용공고를 수정합니다. (회사 id 이외 모두 수정 가능합니다.)
```
{
  "채용포지션":"백엔드 주니어 개발자",
  "채용보상금":1500000, # 변경됨
  "채용내용":"원티드랩에서 백엔드 주니어 개발자를 '적극' 채용합니다. 자격요건은..", # 변경됨
  "사용기술":"Python"
}

or

{
  "채용포지션":"백엔드 주니어 개발자",
  "채용보상금":1000000,
  "채용내용":"원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
  "사용기술":"Django" # 변경됨
}
```

### 3. 채용공고를 삭제합니다.
DB에서 삭제됩니다.

#### 4. 채용공고 목록을 가져옵니다.
**(1) 사용자는 채용공고 목록을 아래와 같이 확인할 수 있습니다.**
```
[
  {
    "채용공고_id": 채용공고_id,
    "회사명":"원티드랩",
    "국가":"한국",
    "지역":"서울",
    "채용포지션":"백엔드 주니어 개발자",
    "채용보상금":1500000,
    "사용기술":"Python"
  },
  {
    "채용공고_id": 채용공고_id,
    "회사명":"네이버",
    "국가":"한국",
    "지역":"판교",
    "채용포지션":"Django 백엔드 개발자",
    "채용보상금":1000000,
    "사용기술":"Django"
  },
  ...
]
```

**(2) 채용공고 검색 기능 구현** (선택사항 및 가산점요소)
```
# Example - 1) some/url?search=원티드
[
  {
    "채용공고_id": 채용공고_id,
    "회사명":"원티드랩",
    "국가":"한국",
    "지역":"서울",
    "채용포지션":"백엔드 주니어 개발자",
    "채용보상금":1500000,
    "사용기술":"Python"
  },
  {
    "채용공고_id": 채용공고_id,
    "회사명":"원티드코리아",
    "국가":"한국",
    "지역":"부산",
    "채용포지션":"프론트엔드 개발자",
    "채용보상금":500000,
    "사용기술":"javascript"
  }
]

# Example - 2) some/url?search=Django
[
  {
    "채용공고_id": 채용공고_id,
    "회사명":"네이버",
    "국가":"한국",
    "지역":"판교",
    "채용포지션":"Django 백엔드 개발자",
    "채용보상금":1000000,
    "사용기술":"Django"
  },
  {
    "채용공고_id": 채용공고_id,
    "회사명":"카카오",
    "국가":"한국",
    "지역":"판교",
    "채용포지션":"Django 백엔드 개발자",
    "채용보상금":500000,
    "사용기술":"Python"
  }
  ...
]
```

### 5. 채용 상세 페이지를 가져옵니다.
사용자는 채용상세 페이지를 아래와 같이 확인할 수 있습니다.
"채용내용"이 추가적으로 담겨있고 해당 회사가 올린 다른 채용곡고가 추가적으로 포함됩니다. (선택사항 및 가산점요소)
```
{
  "채용공고_id": 채용공고_id,
  "회사명":"원티드랩",
  "국가":"한국",
  "지역":"서울",
  "채용포지션":"백엔드 주니어 개발자",
  "채용보상금":1500000,
  "사용기술":"Python",
  "채용내용": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
  "회사가올린다른채용공고":[채용공고_id, 채용공고_id, ..] # id List (선택사항 및 가산점요소).
}
```

### 6. 사용자는 채용공고에 지원합니다. (선택사항 및 가산점요소)
사용자는 채용공고에 아래와 같이 지원하며 사용자는 1회만 지원 가능합니다.
```
{
  "채용공고_id": 채용공고_id,
  "사용자_id": 사용자_id
}
```
</br>

## 💎💎💎 완료된 API 문서
### 전체 API 리스트

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

### 1. 사용자 회원가입
* 이메일과 닉네임은 중복될 수 없기 때문에 기존에 이메일과 닉네임이 등록되어 있다면 중복되었다는 에러를 발생 시키고 회원가입이 되지 않습니다.
* 비밀번호는 bcrypt 암호화 처리로 저장됩니다.
</br>

#### (1) URL
```
POST /user/sign-up
```

#### (2) REQUEST (JSON)
```
{
    "email":"kay2023@gmail.com",
    "name":"kay",
    "nickname":"kay",
    "password":"kay2023^"
}
```

#### (3) RESPONSE
```
{
    "email": "kang2023@gmail.com",
    "name": "강수",
    "nickname": "kangssu",
    "password": "$2b$10$T27Kpt5pPRmzclwIBLZfIeAdFeVRXBv1IFd1SFXn7xqOrWQKaG5X6",
    "deletedAt": null,
    "id": 4,
    "createdAt": "2023-10-14T00:10:39.000Z"
}
```

#### (4) ERROR RESPONSE
```
{
    "statusCode": 409,
    "message": "이메일이 중복되었습니다."
}
{
    "statusCode": 409,
    "message": "닉네임이 중복되었습니다."
}
```
</br>

### 2. 사용자 로그인
* 회원가입이 되어있는 사용자라면 로그인이 가능합니다.
* 로그인시 인증 토큰이 발급되어 인증이 필요한 곳에서 사용할 수 있습니다.
* 이메일과 비밀번호가 기존에 등록된 정보와 일치하지 않는다면 로그인 되지 않습니다.
</br>

#### (1) URL
```
POST /auth/login
```

#### (2) REQUEST (JSON)
```
{
    "email":"kang2023@gmail.com",
    "password":"kangssu2023^"
}
```

#### (3) RESPONSE
```
{
    "accessToken": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjk3MjQzMDE1LCJleHAiOjE2OTc0MTU4MTV9.p_XOSpkpvoROsHT7hKCQh7_6g0xO0-3-QLyS1ahq3SByBEwzcTz5uuUWHcglwI7uA4_L2fmrWgNY_mlrxt3uJA",
    "user": {
        "id": 4,
        "email": "kang2023@gmail.com",
        "name": "강수",
        "nickname": "kangssu",
        "password": "$2b$10$T27Kpt5pPRmzclwIBLZfIeAdFeVRXBv1IFd1SFXn7xqOrWQKaG5X6",
        "createdAt": "2023-10-14T00:10:39.000Z",
        "deletedAt": null
    }
}
```

#### (4) ERROR RESPONSE
```
{
    "statusCode": 404,
    "message": "이메일을 찾을 수 없습니다."
}
{
    "statusCode": 400,
    "message": "비밀번호가 일치하지 않습니다."
}
```
</br>

### 3. 회사 등록
* 로그인한 사용자만 회사를 등록할 수 있습니다.
* 회사는 사용자 아이디당 1개만 등록할 수 있고 이름이 중복되면 안됩니다.
* 사용자 아이디로 이미 1개의 회사가 등록되어 있거나 이름이 중복되었다면 에러를 발생 시킵니다.
</br>

#### (1) URL
```
POST /company
```

#### (2) REQUEST (JSON)
```
{
    "name":"원티드",
    "nation":"한국",
    "area":"서울"
}
```

#### (3) RESPONSE
```
{
    "name": "원티드",
    "nation": "한국",
    "area": "서울",
    "userId": 4,
    "deletedAt": null,
    "id": 1,
    "createdAt": "2023-10-14T00:38:58.000Z"
}
```

#### (4) ERROR RESPONSE
```
{
    "statusCode": 409,
    "message": "회사는 1개만 등록가능합니다. 이미 중복된 유저 아이디로 등록되어 있습니다."
}
{
    "statusCode": 409,
    "message": "회사 이름이 중복되었습니다."
}
```
</br>

### 4. 채용공고 등록
* 로그인한 사용자만 등록이 가능합니다.
* 로그인한 사용자가 회사를 등록하지 않았다면 채용공고는 등록할 수 없습니다.

#### (1) URL
```
POST /job-vacancy
```

#### (2) REQUEST (JSON)
```
{
    "position":"백엔드 신입 개발자",
    "rewardPay":"1000000",
    "contents":"원티드에서 신입 개발자를 채용중입니다. 많은 관심 부탁드립니다!",
    "skill":"TypeScript"
}
```

#### (3) RESPONSE
```
{
    "position": "백엔드 신입 개발자",
    "rewardPay": "1000000",
    "contents": "원티드에서 신입 개발자를 채용중입니다. 많은 관심 부탁드립니다!",
    "skill": "TypeScript",
    "companyId": 1,
    "deletedAt": null,
    "id": 7,
    "createdAt": "2023-10-14T06:26:57.000Z"
}
```

#### (4) ERROR RESPONSE
```
{
    "statusCode": 404,
    "message": "등록된 회사가 없으므로 채용공고를 등록할 수 없습니다."
}
```
</br>

### 5. 채용공고 수정
* 회사 ID를 제외하고 전부 수정되고 특정 항목 몇개만 수정할 수도 있습니다.
* 즉, 수정할 프로퍼티들은 선택적 프로퍼티 입니다.
</br>

#### (1) URL

```
PATCH /job-vacancy/:id
```

#### (2) REQUEST (JSON)
```
// 예시: position과 rewardPay만 수정
{
    "position":"백엔드 주니어 개발자",
    "rewardPay":"1500000"
}
```

#### (3) RESPONSE
```
{
    "id": 7,
    "companyId": 1,
    "position": "백엔드 주니어 개발자",
    "rewardPay": "1500000",
    "contents": "원티드에서 신입 개발자를 채용중입니다. 많은 관심 부탁드립니다!",
    "skill": "TypeScript",
    "createdAt": "2023-10-14T06:26:57.000Z",
    "deletedAt": null
}
```
</br>

### 6. 채용공고 삭제
#### (1) URL
```
DELETE /job-vacancy/:id
```

#### (2) RESPONSE
```
{
    "id": 6,
    "deletedAt": "2023-10-14T06:42:50.000Z"
}
```
</br>

### 7. 채용공고 전체 조회
* 로그인 하지 않은 사용자들도 채용공고를 전체 볼 수 있어야 합니다.
* 채용공고를 등록한 회사의 정보도 같이 가져올 수 있어야 합니다.
</br>

#### (1) URL
```
GET /job-vacancy
```

#### (2) RESPONSE
```
[
    {
        "id": 7,
        "companyId": 1,
        "position": "백엔드 주니어 개발자",
        "rewardPay": "1500000",
        "contents": "원티드에서 신입 개발자를 채용중입니다. 많은 관심 부탁드립니다!",
        "skill": "TypeScript",
        "createdAt": "2023-10-14T06:26:57.000Z",
        "deletedAt": null,
        "company": {
            "id": 1,
            "userId": 4,
            "name": "원티드",
            "nation": "한국",
            "area": "서울",
            "createdAt": "2023-10-14T00:38:58.000Z",
            "deletedAt": null
        }
    },
    {
        "id": 5,
        "companyId": 3,
        "position": "백엔드 주니어 개발자",
        "rewardPay": "1000000",
        "contents": "원티드랩에서 2년차 이상 백엔드 주니어 개발자를 채용중입니다.",
        "skill": "TypeScript",
        "createdAt": "2023-10-13T17:23:39.000Z",
        "deletedAt": null,
        "company": null
    },
    ...이하 생략
]
```
</br>

### 8. 채용공고 검색
* 회사 이름, 국가, 지역, 내용, 포지션, 스킬에 대해 자유롭게 검색할 수 있어야 합니다.
* 1개만 검색할 수도 있고 2개 이상으로 검색할 수도 있습니다.
* 예를 들어 회사 이름을 주식회사로 넣는다면 회사 이름에 주식회사가 들어있는 회사들이 조회 됩니다.
</br>

#### (1) URL

```
GET /search/job-vacancy?companyName=원티드&area=서울...
```

#### (2) RESPONSE
```
[
    {
        "id": 7,
        "companyId": 1,
        "position": "백엔드 주니어 개발자",
        "rewardPay": "1500000",
        "contents": "원티드에서 신입 개발자를 채용중입니다. 많은 관심 부탁드립니다!",
        "skill": "TypeScript",
        "createdAt": "2023-10-14T06:26:57.000Z",
        "deletedAt": null,
        "company": {
            "id": 1,
            "userId": 4,
            "name": "원티드",
            "nation": "한국",
            "area": "서울",
            "createdAt": "2023-10-14T00:38:58.000Z",
            "deletedAt": null
        }
    }
]
```
</br>

### 9. 채용공고 상세 조회
* 하나의 채용공고에 대해 세부적인 내용을 조회할 수 있어야 합니다.
* 채용공고를 등록한 회사의 다른 채용공고의 ID 값을 가져와야 한다. 단, 현재 보고 있는 채용공고의 ID는 제외합니다.
* Response 결과에서 jobVacancyAndCompany는 채용공고와 회사 정보, otherJobVacancyIds는 채용공고를 등록한 회사의 다른 채용공고로 구분해서 가져옵니다.
</br>

#### (1) URL
```
GET /job-vacancy/:id
```

#### (2) RESPONSE
```
{
    "jobVacancyAndCompany": {
        "id": 7,
        "companyId": 1,
        "position": "백엔드 주니어 개발자",
        "rewardPay": "1500000",
        "contents": "원티드에서 신입 개발자를 채용중입니다. 많은 관심 부탁드립니다!",
        "skill": "TypeScript",
        "createdAt": "2023-10-14T06:26:57.000Z",
        "deletedAt": null,
        "company": {
            "id": 1,
            "userId": 4,
            "name": "원티드",
            "nation": "한국",
            "area": "서울",
            "createdAt": "2023-10-14T00:38:58.000Z",
            "deletedAt": null
        }
    },
    "otherJobVacancyIds": [
        8,
        9
    ]
}
```
</br>

### 10. 채용공고 지원내역 등록
* 사용자는 채용공고 상세에서 지원을 하면 지원 내역에 등록 됩니다.
* 자동으로 채용공고 ID와 로그인한 사용자 ID가 등록 됩니다.
* 로그인한 사용자만 지원할 수 있습니다.
</br>

#### (1) URL
```
POST /job-vacancy/:jobVacancyId/support-history
```

#### (2) RESPONSE
```
{
    "userId": 4,
    "jobVacancyId": 7,
    "canceledAt": null,
    "id": 2,
    "createdAt": "2023-10-14T09:57:20.000Z"
}
```
</br>

### 11. 채용공고 지원내역 취소
* 채용공고를 지원했다가 취소 할 수 있습니다.
* 취소하고 다시 지원할 수 있으며 다시 지원할 경우 새로운 지원내역이 등록됩니다.
* 로그인한 사용자만 지원할 수 있습니다.
</br>

#### (1) URL
```
DELETE /job-vacancy/:jobVacancyId/support-history
```

#### (2) RESPONSE
```
{
    "id": 1,
    "canceledAt": "2023-10-14T10:10:43.000Z"
}
```
</br>

