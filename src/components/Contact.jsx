import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  // 전송 횟수 추적
  const maxSendLimit = 3;
  const sendCount = localStorage.getItem("sendCount") || 0;

  // 입력 시 관련 정보 저장
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 전송 횟수 확인
    const lastSentTime = localStorage.getItem("lastSentTime");
    const now = Date.now();

    if (sendCount >= maxSendLimit && lastSentTime && now - lastSentTime < 3600000) {
      setIsBlocked(true);
      setTimeout(() => setIsBlocked(false), 5000); // 5초 후 경고 메시지 숨김
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ekmtt67",
        "template_lul9rtr",
        {
          from_name: form.name,
          to_name: "haemilyjh",
          from_email: form.email,
          to_email: "haemilyjh@naver.com",
          message: form.message,
        },
        "rwBXCfutcdS149lwj"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          setLoading(false);

          // 전송 횟수와 시간 저장
          localStorage.setItem("sendCount", parseInt(sendCount) + 1);
          localStorage.setItem("lastSentTime", Date.now());

          alert("메일이 성공적으로 전송되었습니다!");
        },
        (error) => {
          console.error("Email send failed:", error);
          setLoading(false);
          alert("앗.. 무언가 잘못되었네요. 확인해주세요.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>연락하고 싶으시다면</p>
        <h3 className={styles.sectionHeadText2}>아래를 활용해주세요!</h3>
        <p>(단, 연속으로 메일을 보낼 시 메일 기능이 정지될 수 있습니다.)</p>

        {isBlocked && (
          <div className="text-red-500 font-bold mt-4">
            1시간 이내에 더 이상 메일을 보낼 수 없습니다.
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">당신의 이름</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="당신의 이름은 무엇입니까?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">당신의 이메일</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="당신의 이메일은 무엇입니까?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              무엇을 보내고 싶으신가요?
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="보내고 싶은 내용을 입력해주세요"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={isBlocked}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
