##### 너도나도노드

## 팀장 : 박성근

## 팀원 : 김혜린, 박준혁, 이소윤 (이하 가나다순)

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

### 제목/내용/작성자 검색 기능
