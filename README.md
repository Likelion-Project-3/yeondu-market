
# 건강한 레시피, 연두마켓 🌿
- 🔗 **배포 URL**
- 🔒 **서비스 이용을 위한 계정**
	- ID: **[yeondu@market.com](mailto:yeondu@market.com)**
	- PW: yeondu

<br>

## 프로젝트 소개

👩 연두마켓은 배달음식에 지친 1인 가구를 위한 온라인 플랫폼입니다.

🍚 자신만의 건강하고 맛있는 레시피를 공유할 수 있는 따뜻한 문화를 지향합니다. 

🥦 자신의 스토어에서 직접 재배한 채소 혹은 상품을 판매할 수도 있습니다. 

👬 모든 사용자는 일상을 공유하며 팔로우 기능을 통해 다른 유저의 게시글을 확인할 수 있습니다. 

💬 채팅 기능을 통해 판매자에게 상품 문의를 할 수 있습니다.
<br>
<br/>

## 요구사항
- **인증** : 로그인, 회원가입, 프로필 설정, 유효성 평가

- **게시글** : 게시글 등록/수정/삭제/신고, 다중 이미지 파일 업로드/수정/미리보기

- **상품** : 상품 등록/수정/삭제, 이미지 파일 업로드/수정/미리보기, 유효성 평가

- **댓글** : 댓글 등록/삭제/신고

- **검색** : 유저 검색

- **팔로우** : 유저 팔로우/언팔로우

- **좋아요** : 게시물 좋아요 / 취소 (구현 예정)
<br>


## 팀원 소개

| 구나영| 이예은| 임수진|  임수현 | 
|--|--|--|--|
|<img src="https://avatars.githubusercontent.com/Nayoung-Gu" height=180 width=180> | <img src="https://avatars.githubusercontent.com/leeyeun" height=180 width=180>  | <img src="https://avatars.githubusercontent.com/etoile-j" height=180 width=180>  |  <img src="https://cdn.discordapp.com/attachments/984722096242434061/999668677567844392/1658409963741.jpg" height=180 width=180>|
| 🔗 [GitHub](https://github.com/Nayoung-Gu), 계획 리더 | 🔗 [GitHub](https://github.com/leeyeun), 개발 리더 | 🔗 [GitHub](https://github.com/etoile-j), 정리 리더 | 🔗 [GitHub](https://github.com/hyuni97), 회고 리더 |
<br/>

## 역할 분담
![image](https://user-images.githubusercontent.com/80025366/181719008-3d5a3186-78da-4885-b9cd-4344b8e45f88.png)

## 개발 환경
### [개발 기간] 2022.6.27 ~ 2022.7.30 (진행중)
### [기술] 
- FrontEnd: React, React-router, Hooks
- BackEnd: 제공된 API 사용
### [협업 도구]
- Discord: 실시간 채팅 및 코드 리뷰를 위한 화면 공유
- GitHub Wiki: 주요 회의록, 컨벤션
- Google Docs: 일상 회의록

### [이슈 관리]
- 버전 관리 및 진행 상황 공유: 🔗[GitHub](https://github.com/Likelion-Project-3/yeondu-market), 🔗[GitHub Issues](https://github.com/Likelion-Project-3/yeondu-market/issues), 🔗[GitHub Project](https://github.com/Likelion-Project-3/yeondu-market/projects/1)
- 회의록: 🔗 [GitHub Wiki](https://github.com/Likelion-Project-3/yeondu-market/wiki)
![image](https://user-images.githubusercontent.com/80025366/181721644-fbfd7782-3d57-4454-b849-8ef2a829c6e5.png)

### [Git Flow]

빠른 개발 작업을 병렬적으로 처리하기 위해 Git Flow를 도입하였으며, <br/>
프로젝트 규모가 크지 않아 세 가지의 브랜치를 사용하는 전략을 선택했습니다. ([관련 Wiki](https://github.com/Likelion-Project-3/yeondu-market/wiki/Git-Flow-%EC%A0%95%EB%A6%AC))
- main: 정식 배포된 버전을 담고 있는 브랜치
- develop: 다음 버전 출시를 위한 최신 코드를 담고 있는 브랜치
- feature: 기능 개발을 위한 브랜치로 기능 구현이 완료되면 삭제되는 브랜치

### [컨벤션] 
버전 관리의 통일성과 효율적인 이슈 트래킹을 위해 컨벤션을 지정하여 commit, PR 시에 사용하였습니다. ([관련 Wiki](https://github.com/Likelion-Project-3/yeondu-market/wiki/6%EC%9B%94-25%EC%9D%BC-%ED%9A%8C%EC%9D%98))

 `Feat`: 새로운 기능을 추가할 경우 <br/>
`Fix`: 버그를 고친 경우 <br/>
 `Design`: CSS등 사용자 UI 디자인 변경 <br/>
`Style`: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 <br/>
 `Refactor`: 프로덕션 코드 리팩토링 <br/>
 `Comment`: 필요한 주석 추가 및 변경 <br/>
`Docs`: 문서를 수정한 경우 <br/>
`Chore`: 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) <br/>
 `Rename`: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 <br/>
  `Remove`: 파일을 삭제하는 작업만 수행한 경우 <br/>
 `Test`: 테스트 추가, 테스트 리팩토링 <br/>
 `!BREAKING CHANGE`: 커다란 API 변경의 경우 <br/>
`!HOTFIX`: 급하게 치명적인 버그를 고쳐야하는 경우 

<br>

## 프로젝트 설치 및 실행 방법
```
npm install
npm start
```
<br>







## UI



|                             0. Splash                              |                            1. 회원가입                             |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img src="asset/images/gif/splash.gif" width="230" height="400"/> | <img src="asset/images/gif/signUp.gif" width="230" height="400"/> |

|                             2. 로그인                             |                               3. 프로필 설정                                |
| :--------------------------------------------------------------: | :------------------------------------------------------------------------: |
| <img src="asset/images/gif/logIn.gif" width="230" height="400"/> | <img src="asset/images/gif/registerProfile.gif" width="230" height="400"/> |

|                              4. 검색                              |                           5. 홈 피드                            |
| :---------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="asset/images/gif/search.gif" width="230" height="400"/> | <img src="asset/images/gif/home.gif" width="230" height="400"/> |


|                           6. 게시물 등록                            |                             7. 게시글 수정                             |
| :-------------------------------------------------------------------: | :----------------------------------------------------------------------: |
| <img src="asset/images/gif/addPosting.gif" width="230" height="400"/> | <img src="asset/images/gif/deletePosting.gif" width="230" height="400"/> |

|                         8. 게시물 삭제                         |                           9. 게시글 댓글 등록                           |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="asset/images/gif/deletReply.gif" width="230" height="400"/> | <img src="asset/images/gif/addProduct.gif" width="230" height="400"/> |

|                         10. 게시물 댓글 신고                         |                           11. 내 프로필                           |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="asset/images/gif/deletReply.gif" width="230" height="400"/> | <img src="asset/images/gif/addProduct.gif" width="230" height="400"/> |



|                        12. 사용자 프로필 수정                        |                          13. 타 유저 프로필                          |
| :--------------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src="asset/images/gif/editProfile.gif" width="230" height="400"/> | <img src="asset/images/gif/yourProfile.gif" width="230" height="400"/> |

|                           14. 팔로우                            |                              15. 로그아웃                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="asset/images/gif/logout.gif" width="230" height="400"/> | <img src="asset/images/gif/loadding.gif" width="230" height="400"/> |


|                      16. 판매 상품 등록                       |                              17. 판매 상품 수정                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="asset/images/gif/follow.gif" width="230" height="400"/> | <img src="asset/images/gif/chatgif.gif" width="230" height="400"/> |

|                      18. 채팅방                      |                              19. 로딩중                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="asset/images/gif/follow.gif" width="230" height="400"/> | <img src="asset/images/gif/chatgif.gif" width="230" height="400"/> |


<br/>

## 핵심코드
```js
```
<br/>

## 트러블 슈팅 및 레슨런
### 👩🏻 나영
### 👩🏻 예은
### 👩🏻 수진
### 👩🏻 수현
<br/>

## 폴더 구조
```
📦public
 ┣ 📃index.html
📦src
 ┣ 📂assets
 ┃ ┣ 📂icon
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┣ 📂chat
 ┃ ┣ 📂comment
 ┃ ┣ 📂common
 ┃ ┣ 📂constants
 ┃ ┣ 📂follow
 ┃ ┣ 📂loginjoin
 ┃ ┣ 📂modal
 ┃ ┣ 📂post
 ┃ ┣ 📂product
 ┃ ┣ 📂profile
 ┃ ┣ 📂search
 ┣ 📂pages
 ┃ ┗ 📂style
 ┣ 📃App.js
 ┣ 📃index.js
 ┗ 📃reset.css

```
