import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonText5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonText3Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.imageParent}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <div className={styles.topDescriptionWrapper}>
          <a className={styles.topDescription}>HOPHEAD</a>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.buttonParent}>
          <a className={styles.button} onClick={onButtonText5Click}>
            HOME
          </a>
          <a className={styles.button1}>PRODUCTS</a>
          <a className={styles.button2}>MANUFACTURING</a>
          <a className={styles.button3}>INVESTORS</a>
          <a className={styles.button4} onClick={onButtonText3Click}>
            ABOUT US
          </a>
          <a className={styles.button5}>CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
