import styles from "./style";
import { Permission, Plans, Footer, Navbar, Hero } from "./components";

const App = () => (
  <div className="w-full overflow-hidden  ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Plans />
        <Permission />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
