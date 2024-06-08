import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="Rectangle" src="/rectangle-30@2x.png" />
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} alt="Icon" src="/image-11@2x.png" />
        <div className={styles.galleryCaptionWrapper}>
          <div className={styles.galleryCaption}>HOPHEAD</div>
        </div>
      </div>
      <div className={styles.featureListParent}>
        <div className={styles.featureList}>REACH OUT-</div>
        <div className={styles.featureList1}>WE’RE JUST A</div>
        <div className={styles.featureList2}>CLICK AWAY</div>
      </div>
      <div className={styles.featuresTitle}>LET’S GET STARTED</div>
    </div>
  );
};

export default FrameComponent1;
