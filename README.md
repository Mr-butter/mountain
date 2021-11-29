# 너도나도노드 팀

### 팀장 : 박성근 <a href="https://github.com/Mr-butter"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a>
### 팀원 : 김혜린 <a href="https://github.com/Hyerin1208"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <a href="https://plastic-yuzu-23a.notion.site/2-Node-js-c277503155184d9d9c094dd8754b4756"><img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/></a> , 박준혁 <a href="https://github.com/berrypjh"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <a href="https://quark-tangelo-d51.notion.site/2-Node-js-31dde1cd888145ec81ac99c307214dc9"><img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/></a> , 이소윤 <a href="https://github.com/jsoyun"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <a href="https://cool-walkover-08a.notion.site/2-mountain-e4f7b216ba1b4abebe84fe6d1ae6d6ce"><img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/></a>
---------------------------------------

### 프로젝트 기간 : 2021-09-29 ~ 2021-10-15 (총 17일)

### 개요
어른들의 여가 생활로만 생각햇던 등산이 젊은 세대들의 관심이 높아짐에 따라 어른들의 이미지를
탈피한 사이트를 제작하고자 함.

### 목적
등산을 주제로 한 인증 SNS 플랫폼
1. 보다 쉽게 산을 접하고 등산할 수 있도록 국내명산에 대한 정보 및 교통정보 제공
2. 사용자들이 직접 참여할 수 있는 커뮤니티를 구성해 등산과 관련된 정보 제공
3. 산을 활용한 인적네트워크 구축

### 기획서  <a href="https://docs.google.com/presentation/d/17nZBAXbWB7R4zyDEvABGtIzG2kZyEdFs/edit?usp=sharing&ouid=108810371152735520339&rtpof=true&sd=true"><img src="https://img.shields.io/badge/Google Drive-4285F4?style=flat-square&logo=Google Drive&logoColor=white"/></a>

### 프로젝트 내 사용 기술

|      페이지      | 사용 기술 |
--------|------------
사용자 관리  | 카카오/네이버/구글 로그인 , 회원정보수정 , 회원탈퇴 , 로그인/작성자 본인 여부 등에 따라 접근 권한 설정 , bcrypt 비밀번호 암호화 , express-session 으로 로그인 세션 관리 , 회원가입/로그인 중복 방지 , 유효성 검사
도전클럽 업로드 | CRUD , 해시태그 검색 기능 , 팔로우/언팔로우 기능 , 페이지 내 댓글 기능
100대 명산 정보 | 산림청 API
자유 게시판 | CRUD , 제목/내용/작성자 검색 기능 , 페이징 기능 , 조회수 , 페이지 내 댓글 기능
기타 | 날씨 API

---------------------------------------

# in the mountain 사이트 미리보기
##### * 사진을 클릭하면 크게 볼 수 있어요!!

|      | 페이지 |      | 페이지 |
----|----------------|----|----------------
메인 페이지  | ![KakaoTalk_20211125_085357264_01](https://user-images.githubusercontent.com/89543695/143537017-1cd0c3fd-128a-4874-988b-b1b67c6f6781.gif) | 로그인/회원가입 페이지  | ![KakaoTalk_20211125_090237103](https://user-images.githubusercontent.com/89543695/143537035-58d89a12-3933-473c-9f6e-c72aa88a4909.gif)
마이페이지  | ![KakaoTalk_20211125_085357264_04](https://user-images.githubusercontent.com/89543695/143537709-36c7ad01-4bcf-404f-ad15-3482253a2061.gif) | 100대 명산 정보 | ![KakaoTalk_20211124_212458449](https://user-images.githubusercontent.com/89543695/143835268-dadeff80-6035-4f11-90e1-0c3095b6f993.gif)
도전클럽 페이지 (비로그인) | ![KakaoTalk_20211125_085357264_11](https://user-images.githubusercontent.com/89543695/143537198-47a7aea8-1644-4c12-8d20-e5c17827ce90.gif) | 도전클럽 페이지 (로그인) | ![KakaoTalk_20211125_085357264_07](https://user-images.githubusercontent.com/89543695/143537081-9437a63e-729d-47f1-ba2c-13e862c81025.gif)
도전클럽 업로드  | ![KakaoTalk_20211125_085357264_06](https://user-images.githubusercontent.com/89543695/143537068-94dc0bbb-6ee6-4f6b-b67b-9515b436a44b.gif) | 댓글  | ![KakaoTalk_20211125_085357264_08](https://user-images.githubusercontent.com/89543695/143537094-d46206f6-5fa4-4a55-bf0c-6d57b7c27bf4.gif)
팔로잉/팔로워  | ![KakaoTalk_20211125_085357264_09](https://user-images.githubusercontent.com/89543695/143537103-445acca8-48d9-40e1-8b95-38dd58b03bb6.gif) | 해시태그 검색   | ![KakaoTalk_20211125_085357264_10](https://user-images.githubusercontent.com/89543695/143537189-fdf2cdc6-b9b5-4f18-ae97-d3bf78f90fc1.gif)
자유게시판 업로드 | ![freeup](https://user-images.githubusercontent.com/89543695/143828461-cd8ea217-591f-49f4-9c6a-8a68ebddfacc.gif) | 자유게시판 수정 & 삭제 | ![freedelect](https://user-images.githubusercontent.com/89543695/143828481-01c2e0b4-cd43-4d68-ae95-10b99893e825.gif)
검색 (제목/내용, 제목, 내용, 작성자)  | ![ezgif com-gif-maker](https://user-images.githubusercontent.com/89543695/143828527-415657b3-a1c8-4507-8d4d-717368aa6323.gif) | 페이징 | ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/89543695/143828535-eeab9e8b-e405-4c71-907f-c11297cecfe3.gif)

---------------------------------------

# ER Diagram
##### * 사진을 클릭하면 크게 자세히 볼 수 있어요!!
<img src="https://user-images.githubusercontent.com/89543695/143770934-eeb6646d-d561-4a11-90d4-2e785595388f.png" width="470px" hight="610px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>
