import React from "react";



export default function SocialLink({ url, icon }) {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={url}>
        <img src={icon} alt="icon" />
      </a>
    </div>
  );
}


