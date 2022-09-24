import React from "react";
import Styles from "./FollowUs.module.css";
import SocialLink from "../SocialLink/SocialLink";
import igIcon from "../../assets/images/socialLinks/instagramLink.png";
import fbIcon from "../../assets/images/socialLinks/facebookLink.png";
import sfIcon from "../../assets/images/socialLinks/spotifyLink.png";
import ybIcon from "../../assets/images/socialLinks/youtubeLink.png";

export default function FollowUs() {
  const URL_IG = "https://www.instagram.com/ochenta.90";
  const URL_FB = "https://www.facebook.com/search/top?q=ochenta%20noventa";
  const URL_SF = "https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6";
  const URL_YB = "https://www.youtube.com/channel/UCmoocg2jeWF5OZwGXvi5dfw";

  return (
    <div className={Styles.container} id="#followus">
      <h4>Seguinos en nuestras redes</h4>
      <div className={Styles.icons}>
        <SocialLink url={URL_IG} icon={igIcon} />
        <SocialLink url={URL_FB} icon={fbIcon} />
        <SocialLink url={URL_SF} icon={sfIcon} />
        <SocialLink url={URL_YB} icon={ybIcon} />
      </div>
      <p>Ochenta Noventa Copyright 2022</p>
    </div>
  );
}
   
