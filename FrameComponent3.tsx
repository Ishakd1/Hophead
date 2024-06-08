import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.footerLinkParent}>
              <div className={styles.footerLink}>OUR PRODUCTS</div>
              <div className={styles.copyright}>
                UNTANGLE THE THREADS WITH US
              </div>
            </div>
          </div>
          <img
            className={styles.footerSeparatorIcon}
            alt=""
            src="/footer-separator@2x.png"
          />
        </div>
      </div>
      <div className={styles.textParent}>
        <h1 className={styles.text}>DENIM FABRICS</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.image1Parent}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <p className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              maecenas sed enim ut sem viverra aliquet eget. Viverra vitae
              congue eu consequat ac felis donec. Pulvinar etiam non quam lacus.
              Ante metus dictum at tempor commodo ullamcorper a. Semper auctor
              neque vitae tempus. Pretium vulputate sapien nec sagittis.
              Adipiscing diam donec adipiscing tristique risus nec feugiat in
              fermentum. Tellus rutrum tellus pellentesque eu tincidunt tortor
              aliquam. Leo a diam sollicitudin tempor id eu. Purus viverra
              accumsan in nisl nisi scelerisque eu ultrices. Adipiscing vitae
              proin sagittis nisl rhoncus mattis rhoncus urna. Pulvinar neque
              laoreet suspendisse interdum consectetur libero id faucibus.
              Viverra nam libero justo laoreet. Mi sit amet mauris commodo quis
              imperdiet massa tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
