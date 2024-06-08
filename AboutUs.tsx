import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonTextClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onButtonText5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonText7Click = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onButtonText11Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <header className={styles.rectangle} />
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-11@2x.png"
      />
      <a className={styles.button} onClick={onButtonTextClick}>
        PRODUCTS
      </a>
      <a className={styles.button1}>CONTACT US</a>
      <a className={styles.button2}>ABOUT US</a>
      <a className={styles.button3}>INVESTORS</a>
      <a className={styles.button4}>MANUFACTURING</a>
      <a className={styles.button5} onClick={onButtonText5Click}>
        HOME
      </a>
      <a className={styles.text}>HOPHEAD</a>
      <h1 className={styles.heroTitle}>
        <span className={styles.heroTitleTxtContainer}>
          <p className={styles.about}>{`ABOUT `}</p>
          <p className={styles.us}>US</p>
        </span>
      </h1>
      <h2 className={styles.heroSubtitle}>UNTANGLE THE THREADS WITH US</h2>
      <img
        className={styles.fash1Icon}
        loading="lazy"
        alt=""
        src="/fash-1@2x.png"
      />
      <div className={styles.contentBlock} />
      <img
        className={styles.imageIcon1}
        loading="lazy"
        alt=""
        src="/image-11@2x.png"
      />
      <a className={styles.button6}>ABOUT US</a>
      <a className={styles.button7} onClick={onButtonText7Click}>
        PRODUCTS
      </a>
      <a className={styles.button8}>CONTACT US</a>
      <a className={styles.button9}>MANUFACTURING</a>
      <a className={styles.button10}>INVESTORS</a>
      <a className={styles.button11} onClick={onButtonText11Click}>
        HOME
      </a>
      <a className={styles.caption}>HOPHEAD</a>
      <img
        className={styles.fash1Icon1}
        loading="lazy"
        alt=""
        src="/fash-1@2x.png"
      />
      <h1 className={styles.missionStatement}>OUR STORY</h1>
      <img
        className={styles.fa1Icon}
        loading="lazy"
        alt=""
        src="/fa-1@2x.png"
      />
      <p className={styles.theNameHophead}>
        The name Hophead comes from the core of hip-hop culture. The origin of
        hip-hop was a voice for the injustice done to the slaves, we are rooted
        to the culture and we are modern age voice for a change.
      </p>
      <h1 className={styles.itsTimeWe}>
        It’s time we stop asking for the change and start being the change.
      </h1>
      <p className={styles.alongSideBeing}>
        Along side being a premium streetwear brand that is making a change in
        the society we are also eco friendly, all our packaging is made out of
        recycled paper.
      </p>
      <p className={styles.thereAreMany}>
        There are many kids who need our help today for their better tomorrow,
        kids who are struggling with many health issues, hoping that they’ll get
        enough food for one day to survive another, those innocent lives that
        look up to us and they pray for the change that their life would get
        better. HopHead is standing with those kids and offering them a helping
        hand. We as a team aim to be there for those kids who don’t have anyone
        to look after them and bring a change in their life, working on building
        a bridge to their brighter better future. HopHead proudly announces
        their tie up with Nanhi Pari foundation where hophead is going to give
        10% of its making to the foundation for the welfare of those children.
        It’s time we stand up for those kids who are going to be our future and
        will be the change in the society and carry forward the HopHead legacy.
        By adding HopHead you won’t only style your outfit but you are styling
        many lives, supporting them and being a reason behind their bright
        twinkling smiles.
      </p>
      <img
        className={styles.fas1Icon}
        loading="lazy"
        alt=""
        src="/fas-1@2x.png"
      />
      <img className={styles.f1Icon} loading="lazy" alt="" src="/f-1@2x.png" />
      <img
        className={styles.imageBlockIcon}
        alt=""
        src="/rectangle-30@2x.png"
      />
      <img
        className={styles.imageIcon2}
        loading="lazy"
        alt=""
        src="/image-11@2x.png"
      />
      <h1 className={styles.text1}>WE’RE JUST A</h1>
      <h2 className={styles.leftColumn}>PHONE</h2>
      <b className={styles.text2}>HOPHEAD</b>
      <h1 className={styles.text3}>REACH OUT-</h1>
      <h1 className={styles.text4}>CLICK AWAY</h1>
      <h2 className={styles.text5}>LET’S GET STARTED</h2>
      <b className={styles.rightColumn}>(123) 456-7890</b>
      <b className={styles.text6}>abc@hello123gmail.com</b>
      <h2 className={styles.text7}>EMAIL</h2>
      <h2 className={styles.columnHeading}>SOCIAL</h2>
      <div className={styles.ellipse} />
      <img
        className={styles.imageIcon3}
        loading="lazy"
        alt=""
        src="/image-25.svg"
      />
      <div className={styles.ellipse1} />
      <img
        className={styles.imageIcon4}
        loading="lazy"
        alt=""
        src="/image-26.svg"
      />
      <div className={styles.ellipse2} />
      <img
        className={styles.imageIcon5}
        loading="lazy"
        alt=""
        src="/image-27.svg"
      />
    </div>
  );
};

export default AboutUs;
