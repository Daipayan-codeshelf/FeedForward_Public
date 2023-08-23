import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Reconsider <br />
              Make a difference
              <br /> with less waste
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Hostels can easily connect with local NGOs, </span>
            <span>ensuring that excess food is redirected to those in need.</span>
            <span>"Join us in the fight against food waste"</span>
            <span> And make a meaningful impact on your community today.</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={600} end={1000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Likes</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Packets of food distributed</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">NGOs Registered</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./RightUP_3.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
