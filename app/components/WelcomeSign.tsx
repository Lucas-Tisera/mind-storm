"use client";
import Image from "next/image";
import Welcome from "../svg/wallpaper-home.jpg";
import Character from "../svg/character.png";
const WelcomeSign = () => {
  return (
    <section className="welcome-container">
      <div className="info-content">
        <div>
          <h1 className="title">Mind Storm</h1>
          <p className="subtitle">
            &#34;Una tormenta de ideas para impulsar el conocimiento&#34;
          </p>
        </div>
        <Image src={Character} alt="image" className="image" />
      </div>
      <Image src={Welcome} alt="image" className="image-wallpaper" />
    </section>
  );
};
export { WelcomeSign };
