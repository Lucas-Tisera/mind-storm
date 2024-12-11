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
        src="https://videos.openai.com/vg-assets/assets%2Ftask_01jecbgt59e9bv08tjrh166sa2%2Ftask_01jecbgt59e9bv08tjrh166sa2_genid_f940ffe6-1567-442a-8d5b-55a3640b3848_24_12_05_21_28_466319%2Fvideos%2F00000_784079.mp4%2Fsource.mp4?st=2024-12-10T21%3A41%3A01Z&se=2024-12-16T22%3A41%3A01Z&sks=b&skt=2024-12-10T21%3A41%3A01Z&ske=2024-12-16T22%3A41%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DqWrIXIRtm8RDNUTsDHOjIMJ05xH23AbSqLkOjx0v6Y%3D&az=oaivgprodscus"
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
