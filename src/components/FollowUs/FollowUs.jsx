import React from "react";
import Styles from "./FollowUs.module.css";
import SocialLink from "../SocialLink/SocialLink";
import IG_ICON from "../../assets/images/socialMediaIcons/instagramIcon.png";
import TT_ICON from "../../assets/images/socialMediaIcons/ticktockIcon.png";
import SF_ICON from "../../assets/images/socialMediaIcons/spotifyIcon.png";
import YB_ICON from "../../assets/images/socialMediaIcons/youtubeIcon.png";

export default function FollowUs() {
  const URL_IG = "https://www.instagram.com/ochenta.90";
  const URL_TT = "https://www.tiktok.com/@ochenta.90";
  const URL_SF = "https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6";
  const URL_YB = "https://www.youtube.com/channel/UCmoocg2jeWF5OZwGXvi5dfw";

  return (
    <div className={Styles.container}>
      <h4>Seguinos en nuestras redes</h4>
      <div className={Styles.icons}>
        <SocialLink url={URL_IG} icon={IG_ICON} />
        <SocialLink url={URL_TT} icon={TT_ICON} />
        <SocialLink url={URL_SF} icon={SF_ICON} />
        <SocialLink url={URL_YB} icon={YB_ICON} />
      </div>
      <p>Ochenta Noventa Copyright 2022</p>
    </div>
  );
}
   
