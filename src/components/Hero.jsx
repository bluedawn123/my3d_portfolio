import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(true); // 매트릭스 효과 상태
  const headlineText = "Hi, I'm YOONJUNHO"; // 첫 번째 텍스트
  const subText =
    "Interested in 3D visuals, user interfaces and web applications"; // 두 번째 텍스트

  useEffect(() => {
    // 10초 후 매트릭스 효과 중단
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 8000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const createMatrixEffect = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="relative inline-block">
        {showAnimation ? (
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: [Math.random() * -50, 0, Math.random() * 50],
              opacity: [0.2, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(), // 지속 시간 랜덤
              repeat: Infinity, // 무한 반복
              delay: Math.random() * 0.5, // 시작 시간 랜덤
            }}
            className="text-[#32CD32]" // 매트릭스 스타일의 글자 색상
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ) : (
          // 원본 텍스트가 부드럽게 나타나도록 애니메이션 추가
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5, // 부드럽게 나타나는 시간
              ease: "easeInOut",
            }}
            className="text-white"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        )}
      </span>
    ));
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#32CD32]" /> {/* 라임그린 */}
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div className="donotChangeLocation">
          <h1 className={`${styles.heroHeadText} text-white`}>
            {createMatrixEffect(headlineText)}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {createMatrixEffect(subText)}
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
