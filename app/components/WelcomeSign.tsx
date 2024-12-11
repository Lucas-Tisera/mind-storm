"use client";
import { useLanguage } from "../contexts/LanguageContext";
const WelcomeSign = () => {
  const { locals } = useLanguage();
  return (
    <section className="welcome-container">
      <div className="info-content">
        <div>
          <h1 className="title">Mind Storm</h1>
          <p className="subtitle">&#34;{locals.home?.slogan}&#34;</p>
        </div>
      </div>
      <video
        src="/playa.mp4"
        autoPlay
        muted
        loop
        controls={false}
        className="image-wallpaper"
      />
    </section>
  );
};
export { WelcomeSign };
