## API 명세
### 1. 사용자 회원가입
* **URL**
```
POST /user/sign-up
```

* **Request Body(Json)**
```
{
    "email": "kang2023@gmail.com",
    "name": "강수",
    "nickname": "kangssu",
    "password":"kang2023^"
}
```

* **Success Response**
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

* **Fail Response**
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
* **URL**
```
POST /auth/login
```

* **Request Body(Json)**
```
{
    "email":"kang2023@gmail.com",
    "password":"kangssu2023^"
}
```

* **Success Response**
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

* **Fail Response**
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
* **URL**
```
POST /company
```

* **Request Body(Json)**
```
{
    "name":"원티드",
    "nation":"한국",
    "area":"서울"
}
```

* **Success Response**
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

* **Fail Response**
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
* **URL**
```
POST /job-vacancy
```

* **Request Body(Json)**
```
{
    "position":"백엔드 신입 개발자",
    "rewardPay":"1000000",
    "contents":"원티드에서 신입 개발자를 채용중입니다. 많은 관심 부탁드립니다!",
    "skill":"TypeScript"
}
```

* **Success Response**
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

* **Fail Response**
```
{
    "statusCode": 404,
    "message": "등록된 회사가 없으므로 채용공고를 등록할 수 없습니다."
}
```
</br>

### 5. 채용공고 수정
* **URL**

```
PATCH /job-vacancy/:id
```

* **Request Body(Json)**
```
// 예시: position과 rewardPay만 수정
{
    "position":"백엔드 주니어 개발자",
    "rewardPay":"1500000"
}
```

* **Success Response**
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
* **URL**
```
DELETE /job-vacancy/:id
```

* **Success Response**
```
{
    "id": 6,
    "deletedAt": "2023-10-14T06:42:50.000Z"
}
```
</br>

### 7. 채용공고 전체 조회
* **URL**
```
GET /job-vacancy
```

* **Success Response**
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
* **URL**

```
GET /search/job-vacancy?companyName=원티드&area=서울...
```

* **Success Response**
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
* **URL**
```
GET /job-vacancy/:id
```

* **Success Response**
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
* **URL**
```
POST /job-vacancy/:jobVacancyId/support-history
```

* **Success Response**
```
{
    "userId": 4,
    "jobVacancyId": 7,
    "canceledAt": null,
    "id": 2,
    "createdAt": "2023-10-14T09:57:20.000Z"
}
```

* **Fail Response**
```
{
    "statusCode": 404,
    "message": "채용공고를 찾을 수 없습니다."
}
{
    "statusCode": 409,
    "message": "이미 지원한 채용공고 입니다."
}
```
</br>

### 11. 채용공고 지원내역 취소
* **URL**
```
DELETE /job-vacancy/:jobVacancyId/support-history
```

* **Success Response**
```
{
    "id": 1,
    "canceledAt": "2023-10-14T10:10:43.000Z"
}
```
</br>