import Image from "next/image";
import Link from "next/link";

import k1 from "../../images/k1.png";
import k2 from "../../images/k2.png";
import k3 from "../../images/k3.png";
import k4 from "../../images/k4.png";

import style from "./Knowledge.module.scss";

const KnowledgeItem = (props) => {
  return (
    <div className={style["knowledge__item"]}>
      <div className={style["knowledge__item--img"]}>
        <Image
          src={props.img}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </div>
      <div className={style["knowledge__item--subtitle"]}>
        <p>{props.subtitle}</p>
      </div>
      <div className={style["knowledge__item--title"]}>
        <h5>{props.title}</h5>
      </div>
      <div className={style["knowledge__item--text"]}>
        <p>{props.text}</p>
      </div>
      <div className={style["knowledge__item--button"]}>
        <Link href="#">Read more</Link>
      </div>
    </div>
  );
};

const Knowledge = () => {
  return (
    <section className={style.knowledge}>
      <h1>Knowledge Base</h1>
      <p>Things you need to know for the love of your business</p>
      <div className={style["knowledge__button"]}>
        <Link href="#">all the resources</Link>
      </div>
      <div className={style["knowledge__container"]}>
        <KnowledgeItem
          img={k1.src}
          alt="knowledge 1"
          width={332}
          height={202}
          subtitle="Business Development"
          title="Why is sustainability important for SMEs?"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore…"
        />
        <KnowledgeItem
          img={k2.src}
          alt="knowledge 2"
          width={332}
          height={202}
          subtitle="Blog"
          title="What are the biggest cyber threats in the Nordic Region?"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore…"
        />
        <KnowledgeItem
          img={k3.src}
          alt="knowledge 3"
          width={332}
          height={202}
          subtitle="Blog"
          title="What role do startups play in a mature sector?"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore…"
        />
        <KnowledgeItem
          img={k4.src}
          alt="knowledge 4"
          width={332}
          height={202}
          subtitle="Human Resources"
          title="Skill is the New Oil"
          text="In today's world, your workforce's skill becomes the primary asset to your business. That may be why upskilling is the new..."
        />
      </div>
    </section>
  );
};

export default Knowledge;
