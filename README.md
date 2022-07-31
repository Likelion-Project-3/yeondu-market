
# <span id="top">건강한 레시피, 연두마켓 🌿 </span>
- 🔗 **[배포 URL](https://yeondu-market.netlify.app)**
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
<p align="right"><a href="#top">(🔼 Top)</a></p>

## 팀원 소개

| 구나영| 이예은| 임수진|  임수현 | 
|--|--|--|--|
|<img src="https://user-images.githubusercontent.com/80025366/182018095-d769c767-6e96-43b1-9f45-c713f3654f8f.jpg" height=180 width=180> | <img src="https://avatars.githubusercontent.com/leeyeun" height=180 width=180>  | <img src="https://avatars.githubusercontent.com/etoile-j" height=180 width=180>  |  <img src="https://cdn.discordapp.com/attachments/984722096242434061/999668677567844392/1658409963741.jpg" height=180 width=180>|
| 🔗 [GitHub](https://github.com/Nayoung-Gu), 계획 리더 | 🔗 [GitHub](https://github.com/leeyeun), 개발 리더 | 🔗 [GitHub](https://github.com/etoile-j), 정리 리더 | 🔗 [GitHub](https://github.com/hyuni97), 회고 리더 |
<br/>


## 역할 분담
![image](https://user-images.githubusercontent.com/80025366/181719008-3d5a3186-78da-4885-b9cd-4344b8e45f88.png)
<p align="right"><a href="#top">(🔼 Top)</a></p>

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
<p align="right"><a href="#top">(🔼 Top)</a></p>
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
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |

|                             2. 로그인                             |                               3. 프로필 설정                                |
| :--------------------------------------------------------------: | :------------------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |

|                              4. 검색                              |                           5. 홈 피드                            |
| :---------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |


|                           6. 게시물 등록                            |                             7. 게시글 수정                             |
| :-------------------------------------------------------------------: | :----------------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |

|                         8. 게시물 삭제                         |                           9. 게시글 댓글 등록                           |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |

|                         10. 게시물 댓글 신고                         |                           11. 내 프로필                           |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |



|                        12. 사용자 프로필 수정                        |                          13. 타 유저 프로필                          |
| :--------------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |

|                           14. 팔로우                            |                              15. 로그아웃                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |


|                      16. 판매 상품 등록                       |                              17. 판매 상품 수정                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="" width="230" height="400"/> |

|                      18. 채팅방                      |                              19. 로딩중                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="" width="230" height="400"/> | <img src="https://user-images.githubusercontent.com/80025366/182030627-9f3e9a65-6063-4c03-b322-6d50b4917b70.png" width="230" height="400"/> |


<p align="right"><a href="#top">(🔼 Top)</a></p>
<br/>

## 핵심코드
### 1. map()
- 파일명: `<PostAlbum.jsx>` 등 다수
- 선정 이유: 게시글, 상품, 팔로워 등 다양한 곳에서 데이터를 순회하며 요소를 하나씩 렌더링 할 때 자주 사용되는 메서드이기 때문에 사용 빈도가 높다고 판단했습니다.
- 중요 포인트: 요소에는 고유한 키 값이 필수적으로 요구되며 지켜지지 않을 시에 경고 문구가 출력됩니다.
```js
{imageList && imageList.length > 0 
	? imageList.map((imageList, id) => { 
		return ( 
			<div key={id} className="postAlbum">
				<PostAlbumItem imageList={imageList}/> 
			</div> 
		); 
	})
: null}
```
### 2. axios GET 요청
- 파일명: `<Search.jsx>` 등 다수
- 코드 설명: 키워드가 변경될 때마다 검색 결과를 동적으로 받아오기 위해 `useEffect` Hook을 사용했으며 비동기적으로 GET 요청에 대한 응답을 받아오기 위해 `async/await` 문법과 `axios` 라이브러리를 사용했습니다.
- 선정 이유: 동적으로 받아온 결과를 뿌려주는 기능은 이번 프로젝트 뿐 아니라 여러 서비스에서 사용되고 있는 만큼 중요도가 높다고 판단했습니다.
```js
useEffect(()  =>  {
	if (keyword) {
		const  handleGetUserInfo  =  async  ()  =>  {
			try  {
				const  response  =  await  axios.get(
					BASE_URL  +  "/user/searchuser/?keyword="  +  keyword,
					{
						headers:  {
							Authorization:  `Bearer ${token}`,
						},
					}
				);
				setSearchUser(response.data);
			}  catch (err) {
				console.error(err);
			}
		};
	handleGetUserInfo();
	}
}, [keyword]);
```
### 3. 이미지 미리보기
- 파일명: `<UploadPost.jsx>`
- 선정 이유: 처음 해당 기능을 구현할 때 `FileReader` 객체와 	`readAsDataURL` 메서드가 생소했지만, 비동기적으로 파일의 내용을 읽어올 때 자주 사용되는 API인 만큼 중요도가 높다고 판단했습니다.
- 중요 포인트: `FileReader` 인스터스의 로딩이 완료되면 미리보기될 `img` 태그의 기존 imgSrc 배열을 받아오면서 result 값을 3개까지 연이어 담아주기 위해 `useState` Hook을 사용하였습니다. 
```js
const imgPreview = (file) => { 
	const reader = new FileReader(); 
	reader.readAsDataURL(file); 
	return new Promise((resolve) => { 
		reader.onload = () => { 
			setImgSrc([...imgSrc, reader.result]); 
			resolve(); 
		}; 
	}); 
};
```
<br/>

## 트러블 슈팅 및 레슨런
### 👩🏻 나영
- 게시글 업로드 페이지 중복 렌더링 이슈 ([블로그](https://velog.io/@mooongs/React-%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EB%A1%9C%EA%B7%B8-6zjy5yo2))<br/>
	:  상세페이지를 렌더링하기 위해  `/:postId` 를 사용해 동적으로 인자를 받아오고 있었는데, 리액트 라우터 입장에서 `/upload` 또한 인자로 인식해 중복 렌더링되는 문제가 있었습니다. `exact` 속성은 이와 관련없이 정확히 해당되는 컴포넌트라면 모두 렌더링해주므로 가장 먼저 일치하는 컴포넌트를 렌더링 해주는 `Switch` 를 사용해 해결했습니다.
	
- 게시글 업로드 시 이미지 미리보기 기능 <br/>
	: 이미지  주소 자체로는 미리보기가 불가능해 `FileReader` 인스턴스 생성 후 base64로 인코딩된 문자열을 얻기 위해 `readAsDataURL` 메서드를 사용했습니다.
	
- 💡 레슨런: 각 잡히지 않은 잦은 회의의 중요성 <br/>
	: 프로젝트 초반 주 2회 회의/코드 리뷰를 진행하다가 막바지 1-2주는 디스코드 그룹 채팅방에서 항시 상주하며 계속 소통하고 화면 공유하는 방식으로 자연스럽게 변경되었습니다. 이때 업무 효율이 훨씬 올라갔으며 신뢰 관계가 높아졌다고 느껴졌습니다.
### 👩🏻 예은
- modal창과 alert창 연결 <br/>
	: 모달창과 알림창을 연결할 때 props로 전달 받은 closeModal을 이용해 모달 외부를 클릭하면 closeModal이 실행되도록 설정했습니다. 모달 외부를 클릭하면 알림창이 뜨지 않고 꺼지는 현상이 발생했습니다. 모달창을 클릭해도 아래에 있는 모달창 외부까지 전달되지 않도록 `e.stopPropagation()`을 사용해 이벤트 버블링을 막았습니다.
	
- 상품 등록 중 price <br/>
	: 상품 등록시 price를 정규표현식을 사용하여 1000원 단위마다 ‘,’를 붙여주었습니다. replace를 사용하여 ‘,’를 제거하여 전달해주었는데 하나만 제거 되고 ,뒤의 숫자가 삭제가 되는 상황이 발생했었습니다. `replaceAll`을 사용해 ‘.’를 전체 제거하여 숫자를 보내주었습니다.
	
- 유저프로필에서 프로필로 넘어가지 않는 이슈 <br/>
	: 유저프로필에서 tapmenu에 있는 프로필버튼을 클릭하면 myprofile로 가지 않는 현상이 발생했었습니다. useEffect에서 `deps`에 `accountname`을 넣어주어 accountname이 변경될때 다시 렌더링 될 수 있게 바꾸었습니다.

- 💡 레슨런: useLocation 사용 <br/>
	:데이터를 전달해주어야 하는데 props로 전달해줄수가 없는 상황이 되어서 useLocation에 정보를 담아 사용해주어서 link를 통해 전달을 해주었습니다.
### 👩🏻 수진
### 👩🏻 수현
<p align="right"><a href="#top">(🔼 Top)</a></p>
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
