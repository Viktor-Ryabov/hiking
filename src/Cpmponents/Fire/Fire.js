import Styles from "./Fire.module.css";

export const Fire = () => {
    return(
        <div className={Styles.fire}>
            <div className={Styles.flames}>
                <div className={Styles.flame}></div>
                <div className={Styles.flame}></div>
                <div className={Styles.flame}></div>
                <div className={Styles.flame}></div>
            </div>
            <div className={Styles.logs}></div>
        </div>
    );
};

<div class="container">
  <div class="campfire-wrapper">
    <div class="tree-container-back">
      <div class="tree-8"></div>
      <div class="tree-9"></div>
      <div class="tree-10"></div>
    </div>
    <div class="rock-container">
      <div class="rock-big"></div>
      <div class="rock-small">
        <div class="rock-1"></div>
        <div class="rock-2"></div>
        <div class="rock-3"></div>
        <div class="rock-4"></div>
      </div>
    </div>
    <div class="smoke-container">
      <svg>
      <path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600  " />
    </svg>
      <div class="fire-container">

        <div class="flame-1"></div>
        <div class="flame-2"></div>
        <div class="flame-3"></div>
      </div>
    </div>
    <div class="tree-container-front">
      <div class="tree-1"></div>
      <div class="tree-2"></div>
      <div class="tree-3"></div>
      <div class="tree-4"></div>
      <div class="tree-5"></div>
      <div class="tree-6"></div>
      <div class="tree-7"></div>
    </div>
  </div>
</div>