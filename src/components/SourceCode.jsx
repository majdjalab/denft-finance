import styles from "../style";

const SourceCode = () => (
  <div onClick={(e) => {
    e.preventDefault();
    window.location.href='https://github.com/majdjalab/DeNft';
    }}
  className={`${styles.flexCenter} w-[200px] h-[70px] rounded-[40px] border-2 border-[#FFBF00] p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-transparent w-[100%] h-[100%] rounded-[40px]`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-PlayfairDisplay font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Source Code</span>
        </p>
      </div>
    </div>
  </div>
);

export default SourceCode;
