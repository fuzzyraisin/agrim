import Image from "next/image";
import Link from "next/link";

import Button from "../Button/Button";

import homePage from "../../images/homepage.png";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style["header__container"]}>
        <div className={style["header__text"]}>
          <h1>Simplifying the Digital</h1>
          <p>
            Helping businesses be more efficient, secure and improve
            productivity by implementing the latest technology in a way that
            best fits your business.
          </p>
          <div className={style["header__buttons"]}>
            <Button>
              <Link href="#">Let&apos;s work together</Link>
            </Button>
            <Button>
              <Link href="#">Explore Services</Link>
            </Button>
          </div>
        </div>
        <div className={style["header__img"]}>
          <Image
            src={homePage}
            alt="home page image"
            width={900}
            height={700}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
