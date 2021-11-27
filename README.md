##### 너도나도노드

## 팀장 : 박성근

## 팀원 : 김혜린, 박준혁, 이소윤 (이하 가나다순)

https://cool-walkover-08a.notion.site/2-mountain-e4f7b216ba1b4abebe84fe6d1ae6d6ce

## < 상위 폴더 정리 >

### bin : http 모듈에 express 모듈을 연결하며, 포트를 지정할 수 있다. 서버를 실행하는 스크립트이다.

### config : 연결시킬 데이터 베이스의 정보를 입력하는 곳이다.

### models : 시퀄라이즈로 정의한 데이터베이스 형식이 들어가있다.

### node_modules : 설치한 모듈이 저장된 공간이다.

### passport : 로그인 관련 라우터들을 모아둔 곳이다.

### public : 외부(브라우저 등의 클라이언트)에서 접근 가능한 파일들을 모아 둔 디렉토리이다. images, javascripts, stylesheets 파일들이 들어있다.

### routes : 라우터들을 관리하는 곳, 서버의 로직은 모두 routes 폴더 안의 파일에 작성할 것이다.

### uploads : 사용자가 파일을 올렸을 때 저장되는 곳이다.

### views : view 파일들을 관리하는 곳으로 웹서버로 사용 시 이 디렉토리에 잇는 파일들을 사용해서 렌더링 시킨다.

## < 하부 폴더 정리 >

### board : 게시판

### club : 도전클럽

### login : 로그인 정보

### main : 메인 화면

### mountainInfo : 100대 명산 정보

## < 사용 기술 >

### MySQL DB

### bcrypt 비밀번호 암호화

### CRUD 와 파일 업로드 가능 게시판

### 로그인, 작성자 본인 여부 등에 따라 접근 권한 설정

### 페이징 기능

### 페이지 내 댓글 기능

### express-session 으로 로그인 세션 관리

### 산림청 API

### 날씨 API

### 카카오, 네이버, 구글 로그인

### 회원가입/로그인 중복 방지, 유효성 검사

## 발생한 이슈 & 해결 방법 ##

## "정보전달과 넌적스 사용의 어려움" ## 이소윤

> **회원가입시 넣은 정보 마이페이지로 전달하기**
> 
- 상황

회원가입시 입력한 정보를 마이페이지에 넣으려고 하였다. 

- 문제

회원가입시 프로필 이미지를 넣고자 사진을 삽입했는데 데이터베이스에 경로만 뜨고 프로필에는 이미지가 뜨지 않았다. 

- 해결

router.get을 통해 프로필 사진을 읽었다. User에 들어간 회원정보를 findOne으로 찾았다. 요청한 회원 아이디 중에서 사진을 가져오도록 했다.

> **팔로우 끊기 넌적스 if로 버튼교체하기**
> 
- 상황

팔로우를 한 상대는 언팔버튼이 뜨고 팔로우를 하지 않은 상대는 팔로우 버튼, 나 자신은 아무 버튼도 안 뜨도록 하였다.

- 문제

넌적스를 처음 사용했기 때문에 쉽지 않았다. 넌적스 if문을 사용해 팔로우, 언팔로우 버튼 교체를 시도하였지만 나자신 정보가 한데 묶여 해결되지 않았다.

- 해결

"만약에 트윗유저가 followerIdlist에 포함되어있지 않고 나자신이 아니면, 팔로우하기/ 그게 아니면(트윗유저가 followerIdlist에 포함되어있으면 그리고 나자신 아니면) 팔로우끊기"로 나눠 해결했다. elif 부분이 힘들었다.

> **사용할 정보들 라우터안에 넣고 {{넌적스}}를 이용해 정보전달**
> 
- 상황

팔로잉, 팔로워에 해당하는 유저의 아이디와 본인의 닉네임 등을 불러왔다.

- 문제

필요한 데이터들을 가져와 비교하는 과정이 어려웠다. 

- 해결

응답받은 팔로워 리스트를 요청한 팔로잉의 맵 함수를 통해 만들었다. 넌적스를 사용해 해당하는 값을 불러왔다.

### 제목/내용/작성자 검색 기능!

![KakaoTalk_20211125_085357264_01](https://user-images.githubusercontent.com/89543695/143537017-1cd0c3fd-128a-4874-988b-b1b67c6f6781.gif)

![KakaoTalk_20211125_090237103](https://user-images.githubusercontent.com/89543695/143537035-58d89a12-3933-473c-9f6e-c72aa88a4909.gif)

![KakaoTalk_20211125_085357264_04](https://user-images.githubusercontent.com/89543695/143537709-36c7ad01-4bcf-404f-ad15-3482253a2061.gif)

![KakaoTalk_20211125_085357264_06](https://user-images.githubusercontent.com/89543695/143537068-94dc0bbb-6ee6-4f6b-b67b-9515b436a44b.gif)

![KakaoTalk_20211125_085357264_07](https://user-images.githubusercontent.com/89543695/143537081-9437a63e-729d-47f1-ba2c-13e862c81025.gif)
![KakaoTalk_20211125_085357264_11](https://user-images.githubusercontent.com/89543695/143537198-47a7aea8-1644-4c12-8d20-e5c17827ce90.gif)

![KakaoTalk_20211125_085357264_08](https://user-images.githubusercontent.com/89543695/143537094-d46206f6-5fa4-4a55-bf0c-6d57b7c27bf4.gif)

![KakaoTalk_20211125_085357264_09](https://user-images.githubusercontent.com/89543695/143537103-445acca8-48d9-40e1-8b95-38dd58b03bb6.gif)

![KakaoTalk_20211125_085357264_10](https://user-images.githubusercontent.com/89543695/143537189-fdf2cdc6-b9b5-4f18-ae97-d3bf78f90fc1.gif)


