3D Developer Portfolio

3D 기술을 활용한 포트폴리오 웹 애플리케이션입니다. React와 Three.js를 기반으로 구현되었으며, TailwindCSS로 스타일링하고 Vite로 빌드되었습니다. 이 프로젝트는 adrianhajdin/project_3D_developer_portfolio를 기반으로 제작되었으며, 일부 컴포넌트(motion 부분 및 3D 모델)는 수정하지 않고 그대로 사용했습니다. 하지만 EmailJS와 같은 기능을 포함해 기존 코드를 개인화하였습니다.

📋 목차

🤖 소개 (Introduction)

⚙️ 기술 스택 (Tech Stack)

🔋 주요 기능 (Features)

🤸 빠른 시작 (Quick Start)

🕸️ 코드 스니펫 (Snippets)

🔗 링크 (Links)

🤖 Introduction 

이 프로젝트를 통해 3D 라이브러리와 애니메이션을 활용하여 몰입형 웹 경험을 제작할 수 있는 실습 기회를 제공합니다. 프로젝트는 창의성과 기술력을 결합하여 개발자 포트폴리오를 강화하고, 사용자를 사로잡는 최첨단 웹 디자인을 구현합니다.

⚙️ Tech Stack 

React.js

Three.js

React Three Fiber

React Three Drei

EmailJS

Vite

Tailwind CSS

🔋 Features 

사용자 정의 가능한 3D Hero 섹션: 3D 데스크톱 모델을 원하는 대로 변경 가능.

인터랙티브 경험 섹션: Framer Motion으로 애니메이션 추가.

3D 스킬 섹션: Three.js와 React Three Fiber를 사용하여 기술을 3D 형식으로 표시.

애니메이션이 적용된 프로젝트 및 추천글 섹션: Framer Motion으로 애니메이션 제공.

3D 지구본과 이메일 기능이 포함된 연락처 섹션: EmailJS와 3D Earth 모델 통합.

3D 별 효과: Three.js를 사용하여 랜덤 위치에 별 생성.

반응형 디자인: 모든 기기에서 최적화된 화면 보장.

🤸 Quick Start 

필수 조건

Git 설치 (Git 다운로드)

Node.js 설치 (Node.js 다운로드)

npm(Node Package Manager)

저장소 복제

git clone git@github.com:adrianhajdin/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio

의존성 설치

npm install --legacy-peer-deps

환경 변수 설정

.env 파일을 프로젝트 루트 디렉토리에 생성하고 아래 내용을 추가:

REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id

EmailJS 공식 웹사이트에서 계정을 생성하고 ID를 복사하여 대체하세요.

프로젝트 실행

npm run dev

웹 브라우저에서 http://localhost:5173로 이동하세요.

🕸️ Code Snippets 

constants.js

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

🔗 Links 

모델 및 자산: Google Drive

이 프로젝트는 현대적인 웹 기술을 학습하고 적용하는 데에 훌륭한 예제입니다. 추가 질문이나 지원이 필요하다면 언제든 문의하세요! 😊

