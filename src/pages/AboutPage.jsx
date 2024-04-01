import {
  skillIcons,
  frameworkIcons,
  toolsIcons,
} from "../lib/content/skillIcons.js";
import SkillsCard from "/src/components/SkillsCard.jsx";

export const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <div className="about-card flex my-10 lg:card-side bg-base-100">
        <figure className="about-image">
          <img src="/images/mask.png" alt="About Image" />
        </figure>

        <div className="about-card-body flex flex-col justify-center pr-50px">
          {/* <h2 className="card-title">New album is released!</h2> */}
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolorem assumenda at odio accusantium praesentium amet error nostrum libero quod eum iste dolores modi omnis, expedita dolore, quos quaerat iure.

          </p>
        </div>
      </div>
      <h1 className="my-10" id="skills">
        And...
      </h1>
      <div className="container mx-auto">
        <div>
          <h3>
            Something else:
          </h3>
        </div>
        <figure className="about-image">
          <img src="/images/juggle.png" alt="About Image" />
        </figure>

      </div>

    </>
  );
};
export default AboutPage;
