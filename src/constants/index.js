import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "OverView",
  },
  {
    id: "work",
    title: "My Experience",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "대학교 시절",
    company_name: "한국 외국어 대학교 재학 및 졸업",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2012.03 - 2018. 03",
    points: [
      "우크라이나어와 산업공학을 복수 전공",
      "따라스 쉐브첸코로 교환 학생 (2015년 8월 ~ 2015년 1월) 연수",
      "러시아어 자격증인 토르플 2급 보유",
      "또 뭐 한 거 있는데... 생각해보기",
    ],
  },
  {
    title: "인턴생활",
    company_name: "한국인공지능 협회 인턴",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2018. 06 - 2018. 11",
    points: [
      "한국인공지능 협회의 인턴으로 (주)나인와트에서 5개월간 인턴업무 수행",
      "주로 선형적 데이터의 분석 업무 수행",
    ],
  },
  {
    title: "건설 회사 인사팀 재직",
    company_name: "신화토건",
    icon: shopify,
    iconBg: "#383E56",
    date: "2020. 02 - 2023. 11",
    points: [
      "전라북도 군산 소재의 (주)신화토건에서 인사 업무 수행",
    ],
  },
  {
    title: "개발 경력",
    company_name: "개발에 관한 꾸준한 관심",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2018 - Present",
    points: [
      "2018년부터 개발에 관한 관심으로 입문 후 지금까지 꾸준히 개발 공부중",
      "2024년 07월 ~ 2025년 01월까지 그린컴퓨터아카데미에서 개발교육 과정 수료",
      "더 쓸말 있으면 쓰기"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "유니클로 메인페이지 리뉴얼",
    description:
      "오직 순수 html과 css만으로 현재 유니클로의 메인페이지 리뉴얼을 수행",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "기아 홈페이지 리뉴얼",
    description:
      "메인페이지 뿐만 아니라 세부 페이지까지 변경하여 홈페이지의 전체적인 리뉴얼 수행",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lms 웹사이트 개설",
    description:
      "단순한 리뉴얼이 아닌, LMS 웹사이트 개설. 단순히 프론트단만 존재하는 것이 아닌, 실제로 회원가입도 가능하고 백오피스 구성을 통한 프론트엔드와의 소통을 개발하여 실제와 같은 사이트 개발",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
