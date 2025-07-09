# 한글 팬페이지 <한글한글>

![Image](https://github.com/user-attachments/assets/c486e8ac-17a0-451b-bd10-28f6e65777d2)

지음 프로젝트 - 한글 팬페이지

(1920px) PC 버전이며 반응형으로 작업을 했습니다.

반응형 디바이스
- 1536
- 1280
- 1024
- 768
- 540
- 412
- 348

## NOTICE

해당 페이지는 포트폴리오용으로 제작된 팀 프로젝트 작업물입니다.

## Link

https://hangeul-hangeul.netlify.app/

## 프로젝트 소개

- 한글에 관심이 있고 한글을 알고 싶어하는 누구든지, 이 팬페이지를 통해 한글의 위대함과 아름다움을 알 수 있기를 바라며 만들었습니다.
- 한글의 역사에 가장 깊이 관련된 인물, 세종대왕과 주시경 선생님에 대한 간략한 역사 타임라인을 실었습니다.
- 한글을 이용한 아름다운 디자인들을 함께 소개합니다.
- 현대에 와서 다양하게 쓰이고 있는 한글 폰트를 소개하고, 직접 사용해본 문구를 간직할 수 있도록 했습니다.
- 실제로 한글을 더 접해볼 수 있는 문화 활동을 소개합니다.

## 팀원 구성

|최혜진|송지혜|이윤지
|------|-----|------|
|<img width="260" height="260" alt="Image" src="https://github.com/user-attachments/assets/719da7e1-6703-4c6b-855d-4d8832276aa1" />|<img width="260" height="260" alt="Image" src="https://github.com/user-attachments/assets/42da5097-78fb-4868-88fe-dcb28113bda8" />|<img width="260" height="260" alt="Image" src="https://github.com/user-attachments/assets/7bedb3e9-35e4-488d-861a-aeb335af608f" />|
|[@hyejijn](https://github.com/hyejijn)|------|[@Ariel0210](https://github.com/Ariel0210-lee)|

## 기획 의도

- 한글은 세계적으로 유일한 창제자가 알려진 문자이자, 과학적이고 독창적인 체계를 갖춘 문자로 평가받고 있음 그러나 일상에서 한글을 ‘언제, 어떻게, 왜’ 사용하는지에 대한 문화적, 감성적 접근은 부족한 현실

- 기존의 한글 교육 콘텐츠는 딱딱하고 교과 중심으로 구성되어 있어, 일반 대중이 한글의 매력을 쉽게 접하기 어려움

- 특히 디지털 세대는 시각적 콘텐츠와 인터랙션 중심의 경험에 익숙하므로, 한글의 문화적 감성, 조형미, 현대적 의미를 전달할 필요성이 커짐 이에 따라 한글을 감성적이고 창의적으로 조명하는 팬페이지 형태로 기획

- ‘문자’ 그 이상의 문화로서 한글을 재해석하며, 한글을 사랑하는 사람들 간의 교류와 감상, 참여의 장을 마련하고자 함

## 1. 개발 환경

- Front : HTML, SCSS, AOS, GSAP
- 버전 및 이슈 관리 : Github
- 협업 툴 : Slack, Notion
- 디자인 : [Figma](https://www.figma.com/design/FKQNVVoFHDHojyaaEYyiuz/%ED%95%9C%EA%B8%80%ED%95%9C%EA%B8%80?node-id=0-1&t=BtTIrbHdOGbEDtit-1)

## 2. 채택한 개발 기술과 브랜치 전략

#### SCSS
- SCSS
  - CSS3를 사용하면 코드가 길어질뿐더러 작성이 길어질수록 헷갈리고 충돌하는 부분이 생겨, 분담 작업이 많은 팀 프로젝트이니만큼 보다 편하게 style 코드를 작성하고 관리할 수 있도록 SCSS 형식으로 스타일을 적용시켰습니다.

#### prettier, slack, notion
- 자동적으로 빠르고 깔끔하게 코드 스타일을 정리하기 위해 prettier을 사용해 코드 포맷팅을 했습니다.
- 직접 소통하는 것뿐 아니라 slack을 활용해 자료조사와 샘플 링크 등을 원활히 공유하며 방향성을 협의해나갔습니다.
- 회의록은 notion을 통해 정리해 언제든 팀원들과 공유할 수 있도록 했습니다.

#### 브랜치 전략
- main 브랜치를 따로 두고 개발자 포지션의 팀원이 관리하였으며, 각자의 작업 브랜치를 따로 두어 하루의 작업이 끝나면 확인 후 merge하는 방식으로 충돌을 방지하고 커버하며 진행했습니다.

## 3. 프로젝트 구조

```plaintext
├── README.md
├── index.html
├── assets
│     ├── css
│     │    ├── common.css
│     │    ├── normalize.css
│     │    ├── reset.css
│     │    └── styles.css
│     │           .
│     │           .
│     │           .
│     ├── font
│     ├── images
│     │    ├── icon
│     │    ├── index
│     │    └── sub_
│     │         .
│     │         .
│     │         .
│     ├── js
│     │    └── main.js
│     └── SCSS
│           ├── common.scss
│           ├── normalize.scss
│           ├── reset.scss
│           └── styles.scss
│                    .
│                    .
│                    .
└── pages
      ├── sub_design.html
      ├── sub_font.html
      ├── sub_history.html
      └── sub_information.html
```

## 4. 역할 분담

#### 🧸 최혜진
- 기획자
  - 기획서 작성, 회의록 작성, 와이어프레임 작성
  - 기획 테마 주도, 프로젝트 전체 문서 작성 및 관리 공유 총괄
<br>

####  🪄 송지혜
- 디자이너
  - 피그마 메인 관리자
  - 전체 페이지 디자인 및 스타일 가이드, 프로토타입 작성 
  - 서브페이지 퍼블리싱
<br>

#### 🎀 이윤지
- 프론트
 - Github 메인 관리자
 - normalize, reset 적용, common 파일 작성 및 전체 폴더 관리
 - 메인페이지 퍼블리싱

## 5. 개발 기간 및 작업 관리
#### 개발 기간
- 전체 개발 기간 : 2025. 04. 19 ~ 2025. 07.

#### 작업 관리
- Slack을 통해 자료를 공유하고 작업중 실시간으로 의견을 나누며 진행 상황을 공유했습니다.

## Demo

![Image](https://github.com/user-attachments/assets/817c6a4b-4436-43be-8c22-94e80130de2c)

