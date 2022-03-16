import Link from "next/link";
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

import cloudImg from "../../images/cloud.png";
import securityImg from "../../images/security.png";
import skillsImg from "../../images/skills.png";

import style from "./Experts.module.scss";

const ExpertItem = (props) => {
  return (
    <div className={style["experts__item"]}>
      <div className={style["experts__item--icon"]}>
        <Image
          src={props.icon}
          width={props.width}
          height={props.height}
          alt=" "
        />
      </div>
      <h2 className={style["experts__item--head"]}>{props.title}</h2>
      <div className={style["experts__item--listContainer"]}>
        {props.items.map((item, index) => (
          <div key={item + index} className={style["experts__item--listItem"]}>
            <IoIosArrowDown />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className={style["experts__item--button"]}>
        <Link href="#">Know More</Link>
        <BsArrowRight />
      </div>
    </div>
  );
};

const Experts = () => {
  return (
    <section className={style.experts}>
      <h1>We are experts in:</h1>
      <div className={style["experts__container"]}>
        <ExpertItem
          height={151}
          width={143}
          icon={cloudImg.src}
          title="DIGITAL &#38; CLOUD SERVICES"
          items={[
            "CRM",
            "CloudSolutions",
            "Workplace",
            "Automation & AI",
            "DevOps",
          ]}
        />
        <ExpertItem
          height={151}
          width={159}
          icon={securityImg.src}
          title="CYBER SECURITY &#38; TRUST SERVICES"
          items={[
            "Security Assesment",
            "Planning & Training Service",
            "(Governance) Risk & Compliance",
            "Resilience Services",
            "Third Party Risk Assessment",
            "IRM Solutions",
            "Identity and Access Management Solutions",
          ]}
        />
        <ExpertItem
          height={151}
          width={159}
          icon={skillsImg.src}
          title="SKILLS ADVENTEDGE&trade;"
          items={[
            "Program Management",
            "Skill on Demand",
            "Resilience Services",
            "VCISO",
          ]}
        />
      </div>
    </section>
  );
};

export default Experts;
