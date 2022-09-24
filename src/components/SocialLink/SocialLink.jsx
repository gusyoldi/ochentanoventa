import React from "react";
import Styles from "./SocialLink.module.css";


export default function SocialLink({ url, icon }) {
  return (
    <div className={Styles.container}>
      <a target="_blank" rel="noreferrer" href={url}>
        <img src={icon} alt="icon" />
      </a>
    </div>
  );
}

{
  /* <div>
<a target="_blank" rel="noreferrer" href={url.ig}><span className="visually-hidden"></span><img src={icon.ig} alt="icon" /></a>
</div>
) */
}
