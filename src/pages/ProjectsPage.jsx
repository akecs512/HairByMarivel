// import {
//   techblogItems,
//   travelogueItems,
//   wodItems,
//   weatherItems,
//   projectItems,
//   noteItems,
// } from "../lib/content/projectItems";
// import ProjectCard from "../components/ProjectCard.jsx";

import ImageCard from "../components/ImageCard.jsx"

function ProjectsPage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/6 bg-#222">
          <div className="avatar scale-75">
            <img src="/images/avatarhair.png"></img>
          </div>
          <div className="icon">
            <img src="/images/barbershopWhite.png"></img>
          </div>
          <div>
            <h2>HOME</h2>
          </div>
          <div className="icon">
            <img src="/images/info.png"></img>
          </div>
          <div>
            <h2>ABOUT</h2>
          </div>  <div className="icon">
            <img src="/images/photos.png"></img>
          </div>
          <div>
            <h2>PHOTOS</h2>
          </div>  <div className="icon">
            <img src="/images/contact.png"></img>
          </div>
          <div>
            <h2>CONTACT</h2>
          </div>
        </div>
        <div className="basis-5/6 content-center pt-8 bg-black">
          <div>
            <h1 className="">
              I'm DiAnne Cutz
            </h1>
            <h4 className="">
              Hairstylist
            </h4>
          </div>
          <div className="imageCard flex p-8 justify-center">
            <ImageCard />
          </div>
          <div>
            <h3>About Me</h3>
            <hr className="rule"></hr>
            <p className="about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consectetur dolore laborum nihil cumque, fugiat voluptatum eaque quisquam, eum quas exercitationem, maiores libero ducimus tempora doloribus molestias vel! Doloribus, magnam?</p>
            <h3>Services</h3>
            <p>
              <ul className="list pl-8">
                <li>Cuts</li>
                <li>Color</li>
                <li>Extensions</li>
                <li>Styling</li>
              </ul>
            </p>
            <div className="">
              <h3>Reviews</h3>
              <div className="ml-8">
                <img className="reviewer" src="/images/face1.png"></img>

                <p className="pt-4">Anita Haircut</p>
                <p>She's the best!</p>
                <br />

                <img className="reviewer" src="/images/face2.png"></img>

                <p className="pt-4">Harry Heade</p>
                <p>No one better than DiAnne</p>
              </div>
            </div>
          </div>

        </div>



      </div>
    </>
  );
}

export default ProjectsPage;
