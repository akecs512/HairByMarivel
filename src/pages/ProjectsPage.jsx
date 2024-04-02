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
              I'm Anita Haircut
            </h1>
            <h4 className="">
              Hairstylist
            </h4>
          </div>
          <div className="imageCard flex p-8 justify-center">
            <ImageCard />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <ProjectCard
          title="Travelogue Application"
          subtitle="Interactive Full-Stack Application"
          items={travelogueItems}
        />
        <ProjectCard
          title="Wheels of Date Night Application"
          subtitle="Node.js Application"
          items={wodItems}
        />
        <ProjectCard
          title="Git-Fit Fitness Tracker"
          subtitle="MERN Stack Application"
          items={projectItems}
        />
      </div>
      <h3 className="divider text-4xl pt-8 text-accent">Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <ProjectCard
          title="Tech-Blog Application"
          subtitle="A CMS-style blog site"
          items={techblogItems}
        />

        <ProjectCard
          title="Weather Dashboard Application"
          subtitle="Server-Side API Application"
          items={weatherItems}
        />
        <ProjectCard
          title="Note Taker"
          subtitle="Express.js Application"
          items={noteItems}
        />
      </div> */}
      </div>
    </>
  );
}

export default ProjectsPage;
