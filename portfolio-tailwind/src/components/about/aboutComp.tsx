import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

function AboutComp() {
  return (
    <div className="flex-1 mt-16 text-center text-white">
      <div className="mb-6 font-bold text-3xl text-yellow-500">SKILLS</div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-5">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <FaHtml5 className="w-8 h-8" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <FaCss3Alt className="w-8 h-8" />
          </a>
        </div>
        <div className="flex gap-5">
          <a href="https://www.typescriptlang.org/" target="_blank">
            <SiTypescript className="w-8 h-8" />
          </a>
          <a href="https://go.dev/" target="_blank">
            <FaGolang className="w-8 h-8" />
          </a>
        </div>
        <div className="flex gap-5">
          <a href="https://react.dev/" target="_blank">
            <FaReact className="w-8 h-8" />
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <SiNextdotjs className="w-8 h-8" />
          </a>
        </div>
        <div className="flex gap-5">
          <a href="https://nodejs.org/en" target="_blank">
            <FaNodeJs className="w-8 h-8" />
          </a>
          <a href="https://expressjs.com/" target="_blank">
            <SiExpress className="w-8 h-8" />
          </a>
        </div>
        <div className="flex gap-5">
          <a href="https://www.postgresql.org/" target="_blank">
            <SiPostgresql className="w-8 h-8" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <SiMongodb className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
