/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#030a08",    //배경색. 가장 어두운 초록색
        secondary: "#5e7565",  //navbar, 기타 글자색. 가장 밝은 초록색
        tertiary: "#0f3322",   //overview, project, 이메일보내기 여백 색. 배경보다 조금 밝은 초록색
        "black-100": "#071a0d",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1d3629",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        //배경 이미지 정의
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
