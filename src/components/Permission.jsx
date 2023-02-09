import {  cont } from "../assets";
import styles, { layout } from "../style";

const Permission = () => (
  <section id="permissions" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={cont} alt="permission" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full yellow__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Contribution & Permissions
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        As an Open Source project, any developer can Contribute via Github, and for The Permissions
        Developers can learn or copy a part for their projects, 
        but it's not allowed to use this project for profit purposes & it's not allowed to copy the entire UI or logo   
      </p>
    </div>
  </section>
);

export default Permission;
