import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.image1Parent, className].join(" ")}>
      <img className={styles.image1Icon} alt="" src="/image-1-2@2x.png" />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.textWrapper}>
                  <h1 className={styles.text}>YARNS</h1>
                </div>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  A diam maecenas sed enim ut sem viverra aliquet eget. Viverra
                  vitae congue eu consequat ac felis donec. Pulvinar etiam non
                  quam lacus. Ante metus dictum at tempor commodo ullamcorper a.
                  Semper auctor neque vitae tempus. Pretium vulputate sapien nec
                  sagittis. Adipiscing diam donec adipiscing tristique risus nec
                  feugiat in fermentum. Tellus rutrum tellus pellentesque eu
                  tincidunt tortor aliquam. Leo a diam sollicitudin tempor id
                  eu. Purus viverra accumsan in nisl nisi scelerisque eu
                  ultrices. Adipiscing vitae proin sagittis nisl rhoncus mattis
                  rhoncus urna. Pulvinar neque laoreet suspendisse interdum
                  consectetur libero id faucibus. Viverra nam libero justo
                  laoreet. Mi sit amet mauris commodo quis imperdiet massa
                  tincidunt.
                </p>
              </div>
              <div className={styles.image1Wrapper}>
                <img
                  className={styles.image1Icon1}
                  alt=""
                  src="/image-1-1@2x.png"
                />
              </div>
            </div>
            <h1 className={styles.text1}>PRINTED FABRICS</h1>
          </div>
          <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
            <p className={styles.loremIpsumDolor1}>
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

export default FrameComponent2;
