import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Products.module.css";

const Products: FunctionComponent = () => {
  return (
    <div className={styles.products}>
      <main className={styles.frameParent}>
        <FrameComponent4 />
        <div className={styles.frameGroup}>
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </main>
      <footer className={styles.frameContainer}>
        <FrameComponent1 />
        <div className={styles.complexLayout}>
          <FrameComponent />
        </div>
      </footer>
    </div>
  );
};

export default Products;
