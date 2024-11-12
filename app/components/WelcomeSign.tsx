import Image from "next/image";
import Welcome from "../svg/wallpaper-home.jpg";
const WelcomeSign = () => {
  return (
    <section className="welcome-container">
      <Image src={Welcome} alt="image" className="image-wallpaper" />
    </section>
  );
};
export { WelcomeSign };
