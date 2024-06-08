import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonText3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onButton4Click = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onButton5Click = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onButton6Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.desktop}>
      <h1 className={styles.text} data-scroll-to="text1">
        OUR PRODUCTS
      </h1>
      <h1 className={styles.text1}>WHY CHOOSE US?</h1>
      <h1 className={styles.text2} data-scroll-to="text2">
        INVESTOR RELATIONS
      </h1>
      <button className={styles.button}>
        <div className={styles.buttonChild} />
        <b className={styles.knowMore}>KNOW MORE</b>
      </button>
      <header className={styles.placeholder} />
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-11@2x.png"
      />
      <a className={styles.button1} onClick={onButtonTextClick}>
        INVESTORS
      </a>
      <a className={styles.button2} onClick={onButtonText1Click}>
        PRODUCTS
      </a>
      <a className={styles.button3} onClick={onButtonText2Click}>
        ABOUT US
      </a>
      <a className={styles.button4} onClick={onButtonText3Click}>
        CONTACT US
      </a>
      <a className={styles.text3}>HOPHEAD</a>
      <a className={styles.button5}>MANUFACTURING</a>
      <a className={styles.button6}>HOME</a>
      <img className={styles.imageIcon1} alt="" src="/file.png" />
      <h1 className={styles.text4}>
        <span className={styles.textTxt}>
          <p className={styles.where}>WHERE</p>
          <p className={styles.styleMeets}>STYLE MEETS</p>
        </span>
      </h1>
      <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
      <img className={styles.imageIcon3} alt="" src="/image-3@2x.png" />
      <img className={styles.imageIcon4} alt="" src="/image-4@2x.png" />
      <div className={styles.text5}>UNTANGLE THE THREADS WITH US</div>
      <button className={styles.button7}>
        <div className={styles.buttonItem} />
        <b className={styles.knowMore1}>KNOW MORE</b>
      </button>
      <button className={styles.button8} onClick={onButton2Click}>
        <div className={styles.buttonInner} />
        <b className={styles.knowMore2}>KNOW MORE</b>
      </button>
      <img className={styles.imageIcon5} alt="" src="/image1@2x.png" />
      <img className={styles.imageIcon6} alt="" src="/image2@2x.png" />
      <img className={styles.imageIcon7} alt="" src="/image3@2x.png" />
      <b className={styles.text6}>PRINTED FABRICS</b>
      <b className={styles.text7}>YARNS</b>
      <h3 className={styles.text8}>DENIM FABRICS</h3>
      <button className={styles.button9} onClick={onButton3Click}>
        <div className={styles.rectangle} />
        <b className={styles.text9}>FIND OUT MORE</b>
      </button>
      <button className={styles.button10} onClick={onButton4Click}>
        <div className={styles.rectangle1} />
        <b className={styles.text10}>FIND OUT MORE</b>
      </button>
      <button className={styles.button11} onClick={onButton5Click}>
        <div className={styles.rectangleDiv} />
        <b className={styles.text11}>FIND OUT MORE</b>
      </button>
      <textarea className={styles.rectangle2} rows={13} cols={19} />
      <img className={styles.imageIcon8} alt="" src="/image-5@2x.png" />
      <b className={styles.text12}>EXPERIENCE AND LEGACY</b>
      <textarea className={styles.rectangle3} rows={13} cols={19} />
      <img className={styles.imageIcon9} alt="" src="/image-6@2x.png" />
      <b className={styles.text13}>SUPERIOR DESIGN</b>
      <textarea className={styles.desktopChild} rows={13} cols={19} />
      <img className={styles.imageIcon10} alt="" src="/image-7@2x.png" />
      <b className={styles.text14}>eiusmod tempor incididunt ut</b>
      <b className={styles.text15}>{`consectetur adipiscing elit, sed do `}</b>
      <b className={styles.text16}>QUALITY ASSURANCE</b>
      <b className={styles.text17}>eiusmod tempor incididunt ut</b>
      <b className={styles.text18}>labore et dolore magna aliqua. Ut</b>
      <b className={styles.text19}>Lorem ipsum dolor sit amet,</b>
      <b className={styles.text20}>{`consectetur adipiscing elit, sed do `}</b>
      <b className={styles.text21}>nostrud exercitation ullamco.</b>
      <b className={styles.text22}>enim ad minim veniam, quis</b>
      <b className={styles.text23}>eiusmod tempor incididunt ut</b>
      <b className={styles.text24}>enim ad minim veniam, quis</b>
      <b className={styles.text25}>labore et dolore magna aliqua. Ut</b>
      <b className={styles.text26}>Lorem ipsum dolor sit amet,</b>
      <b className={styles.text27}>nostrud exercitation ullamco.</b>
      <b className={styles.text28}>Lorem ipsum dolor sit amet,</b>
      <b className={styles.text29}>{`consectetur adipiscing elit, sed do `}</b>
      <b className={styles.text30}>labore et dolore magna aliqua. Ut</b>
      <b className={styles.text31}>enim ad minim veniam, quis</b>
      <b className={styles.text32}>nostrud exercitation ullamco.</b>
      <div className={styles.rectangle4} />
      <b className={styles.text33}>TIMELY DELIVERY</b>
      <img className={styles.imageIcon11} alt="" src="/image-8@2x.png" />
      <textarea className={styles.rectangle5} rows={13} cols={19} />
      <img className={styles.imageIcon12} alt="" src="/image-9@2x.png" />
      <b className={styles.text34}>CLIENT SATISFACTION</b>
      <textarea className={styles.rectangle6} rows={13} cols={19} />
      <img className={styles.imageIcon13} alt="" src="/image-10@2x.png" />
      <b className={styles.text35}>enim ad minim veniam, quis</b>
      <b className={styles.text36}>{`consectetur adipiscing elit, sed do `}</b>
      <b className={styles.text37}>eiusmod tempor incididunt ut</b>
      <b className={styles.text38}>enim ad minim veniam, quis</b>
      <b className={styles.text39}>labore et dolore magna aliqua. Ut</b>
      <b className={styles.text40}>Lorem ipsum dolor sit amet,</b>
      <b className={styles.text41}>CERTIFICATIONS</b>
      <b className={styles.text42}>Lorem ipsum dolor sit amet,</b>
      <b className={styles.text43}>labore et dolore magna aliqua. Ut</b>
      <b className={styles.text44}>eiusmod tempor incididunt ut</b>
      <b className={styles.text45}>nostrud exercitation ullamco.</b>
      <b className={styles.text46}>{`consectetur adipiscing elit, sed do `}</b>
      <b className={styles.text47}>nostrud exercitation ullamco.</b>
      <b className={styles.text48}>labore et dolore magna aliqua. Ut</b>
      <b className={styles.text49}>Lorem ipsum dolor sit amet,</b>
      <b className={styles.text50}>{`consectetur adipiscing elit, sed do `}</b>
      <b className={styles.text51}>eiusmod tempor incididunt ut</b>
      <b className={styles.text52}>enim ad minim veniam, quis</b>
      <b className={styles.text53}>nostrud exercitation ullamco.</b>
      <b className={styles.text54}>
        velit esse cillum dolore eu fugiat nulla pariatur.
      </b>
      <img className={styles.imageIcon14} alt="" src="/image-111@2x.png" />
      <b className={styles.text55}>
        laboris nisi ut aliquip ex ea commodo consequat.
      </b>
      <b className={styles.text56}>
        Duis aute irure dolor in reprehendrit in voluptate
      </b>
      <b className={styles.text57}>
        sunt in culpa qui officiaa deserunt mollit anim id
      </b>
      <b className={styles.text58}>
        Excepteur sint occaecat cupidatat non proident,
      </b>
      <b className={styles.text59}>est laborum.</b>
      <b className={styles.text60}>
        minim veniam, quis nostrud exercitation ullamco
      </b>
      <b className={styles.text61}>
        ut labore et dolore magna aliqua. Ut enim ad
      </b>
      <b className={styles.text62}>
        adipiscing elit, sed do eiusmod tempor incididunt
      </b>
      <b className={styles.text63}>Lorem ipsum dolor sit amet, consectetur</b>
      <div className={styles.desktopItem} />
      <div className={styles.desktopInner} />
      <div className={styles.desktopChild1} />
      <img className={styles.imageIcon15} alt="" src="/image-121@2x.png" />
      <img className={styles.imageIcon16} alt="" src="/image-14@2x.png" />
      <img className={styles.imageIcon17} alt="" src="/image-13@2x.png" />
      <h1 className={styles.text64}>FEATURED ON</h1>
      <img className={styles.imageIcon18} alt="" src="/image-15@2x.png" />
      <img className={styles.imageIcon19} alt="" src="/image-16@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <b className={styles.text65}>manufacturing services?</b>
      <h1 className={styles.text66}>FAQS</h1>
      <b className={styles.text67}>What types of product do</b>
      <b className={styles.text68}>you manufacture?</b>
      <b className={styles.text69}>Do you offer custom</b>
      <b className={styles.text70}>Do you offer a warranty</b>
      <b className={styles.text71}>on your products?</b>
      <img className={styles.imageIcon20} alt="" src="/image-20@2x.png" />
      <img className={styles.imageIcon21} alt="" src="/image-19@2x.png" />
      <img className={styles.imageIcon22} alt="" src="/image-18@2x.png" />
      <div className={styles.text72}>{`casual wear, formal wear, `}</div>
      <div className={styles.text73}>We manufacture a wide</div>
      <div className={styles.text74}>{`Our product range includes `}</div>
      <div className={styles.text75}>children, all made from high-</div>
      <div className={styles.text76}>{`activewear, and accessories. `}</div>
      <div className={styles.text77}>quality fabrics.</div>
      <div className={styles.text78}>{`items for men, women, and `}</div>
      <div className={styles.text79}>quality fabrics.</div>
      <div className={styles.text80}>We manufacture a wide</div>
      <div className={styles.text81}>{`range of apparel, including `}</div>
      <div className={styles.text82}>{`activewear, and accessories. `}</div>
      <div className={styles.text83}>{`casual wear, formal wear, `}</div>
      <div className={styles.text84}>{`items for men, women, and `}</div>
      <div className={styles.text85}>children, all made from high-</div>
      <div className={styles.text86}>{`Our product range includes `}</div>
      <div className={styles.text87}>{`range of apparel, including `}</div>
      <div className={styles.text88}>We manufacture a wide</div>
      <div className={styles.text89}>{`activewear, and accessories. `}</div>
      <div className={styles.text90}>quality fabrics.</div>
      <div className={styles.text91}>children, all made from high-</div>
      <div className={styles.text92}>{`items for men, women, and `}</div>
      <div className={styles.text93}>{`Our product range includes `}</div>
      <div className={styles.text94}>{`casual wear, formal wear, `}</div>
      <div className={styles.text95}>{`range of apparel, including `}</div>
      <b className={styles.text96}>
        laboris nisi ut aliquip ex ea commodo consequat.
      </b>
      <h1 className={styles.text97} data-scroll-to="text">
        ABOUT US
      </h1>
      <button className={styles.button12} onClick={onButton6Click}>
        <div className={styles.buttonChild1} />
        <b className={styles.knowMore3}>KNOW MORE</b>
      </button>
      <img className={styles.imageIcon23} alt="" src="/image-17@2x.png" />
      <b className={styles.text98}>
        Excepteur sint occaecat cupidatat non proident,
      </b>
      <b className={styles.text99}>
        Duis aute irure dolor in reprehendrit in voluptate
      </b>
      <b className={styles.text100}>
        velit esse cillum dolore eu fugiat nulla pariatur.
      </b>
      <b className={styles.text101}>
        Excepteur sint occaecat cupidatat non proident,
      </b>
      <b className={styles.text102}>
        sunt in culpa qui officiaa deserunt mollit anim id
      </b>
      <b className={styles.text103}>
        sunt in culpa qui officiaa deserunt mollit anim id
      </b>
      <b className={styles.text104}>
        sunt in culpa qui officiaa deserunt mollit anim id
      </b>
      <b className={styles.text105}>est laborum.</b>
      <b className={styles.text106}>
        minim veniam, quis nostrud exercitation ullamco
      </b>
      <b className={styles.text107}>
        ut labore et dolore magna aliqua. Ut enim ad
      </b>
      <b className={styles.text108}>
        adipiscing elit, sed do eiusmod tempor incididunt
      </b>
      <b className={styles.text109}>Lorem ipsum dolor sit amet, consectetur</b>
      <img
        className={styles.backgroundIcon}
        alt=""
        src="/rectangle-30@2x.png"
        data-scroll-to="backgroundImage"
      />
      <img className={styles.imageIcon24} alt="" src="/image-11@2x.png" />
      <b className={styles.text111}>HOPHEAD</b>
      <h1 className={styles.text110}>REACH OUT-</h1>
      <h1 className={styles.text112}>CLICK AWAY</h1>
      <h1 className={styles.text113}>WE’RE JUST A</h1>
      <div className={styles.text114}>LET’S GET STARTED</div>
      <b className={styles.text115}>abc@hello123gmail.com</b>
      <div className={styles.text116}>PHONE</div>
      <b className={styles.text117}>(123) 456-7890</b>
      <div className={styles.text118}>EMAIL</div>
      <div className={styles.ellipse} />
      <div className={styles.text119}>SOCIAL</div>
      <div className={styles.ellipse1} />
      <img className={styles.imageIcon25} alt="" src="/image-25.svg" />
      <div className={styles.ellipse2} />
      <img className={styles.imageIcon26} alt="" src="/image-26.svg" />
      <img className={styles.imageIcon27} alt="" src="/image-27.svg" />
    </div>
  );
};

export default Desktop;
