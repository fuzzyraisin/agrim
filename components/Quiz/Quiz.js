import Image from "next/image";
import Link from "next/link";

import quiz from "../../images/quiz.png";

import style from "./Quiz.module.scss";

const Quiz = () => {
  return (
    <section className={style.quiz}>
      <h1>Not Sure About The Digital Transformation Path for your business?</h1>
      <div className={style["quiz__img"]}>
        <Image src={quiz} width={600} height={625} alt=" " />
      </div>
      <div className={style["quiz__button"]}>
        <Link href="#">take the quiz</Link>
      </div>
    </section>
  );
};

export default Quiz;
