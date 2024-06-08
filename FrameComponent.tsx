import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.addressParent}>
        <div className={styles.address}>PHONE</div>
        <b className={styles.phoneNumber}>(123) 456-7890</b>
      </div>
      <div className={styles.textParent}>
        <div className={styles.text}>EMAIL</div>
        <b className={styles.text1}>abc@hello123gmail.com</b>
      </div>
      <div className={styles.socialTitleParent}>
        <div className={styles.socialTitle}>SOCIAL</div>
        <div className={styles.frameGroup}>
          <div className={styles.socialIconParent}>
            <div className={styles.socialIcon} />
            <img className={styles.imageIcon} alt="" src="/image-27.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.ellipse} />
            <img className={styles.imageIcon1} alt="" src="/image-26.svg" />
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.ellipse1} />
            <img className={styles.imageIcon2} alt="" src="/image-25.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
