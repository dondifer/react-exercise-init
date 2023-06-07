import "./Home.css";
import Header from "./Header";
import cat from "../assets/cat.jpg";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="profile">
        <img src={cat} alt="Profile Photo" className="profile-photo" />
        <div className="profile-description">
          <h2 className="profile-name">Diego Fernández Hernándo:</h2>
          <p className="profile-bio">
            FrontEnd developer, musician and producer, chocolate enjoyer and
            video game tester. Used technologies:
          </p>
          <ul className="profile-bullets">
            <li>Angular 2+</li>
            <li>Typescript</li>
            <li>Javacript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>RXJS</li>
            <li>Matlab</li>
            <li>C++</li>
            <li>NodeJS</li>
            <li>Abeton Live</li>
            <li>Audacity</li>
            <li>Arturia VSTs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
