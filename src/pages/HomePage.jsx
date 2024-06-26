

import ImageCard from "../components/ImageCard.jsx"

function HomePage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/6 bg-#222">
          <div className="avatar scale-75">
            <img src="/images/marivel.JPG"></img>
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
            <h2><a href="#About">ABOUT</a></h2>
          </div>  <div className="icon">
            <img src="/images/photos.png"></img>
          </div>
          <div>
            <h2><a href="#Gallery">GALLERY</a></h2>
          </div>  <div className="icon">
            <img src="/images/contact.png"></img>
          </div>
          <div>
            <h2><a href="#Contact">CONTACT</a></h2>
          </div>
        </div>
        <div className="basis-5/6 content-center pt-8 bg-black">
          <div>
            <h1 className="">
              I'm Marivel Sandoval Diaz
            </h1>
            <h4 className="">
              Hairstylist at Juan Romero Salon
            </h4>
          </div>
          <div className="imageCard flex p-8 justify-center">
            <ImageCard />
          </div>
          <div>
            <h3 id="About">About Me</h3>
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
                <p>No one better than Marivel</p>
              </div>
            </div>
          </div>

          <div >
            <h3 id="Gallery">Gallery</h3>
            <br />
            <hr></hr>
            <div className="section grid grid-cols-3 pt-16">

              <div>
                <img className="gallery" src="/images/hair94.JPG"></img>
              </div>
              <div>
                <img className="gallery" src="/images/hair95.JPG"></img>
              </div>
              <div>
                <img className="gallery" src="/images/hair96.JPG"></img>
              </div>
              <div>
                <img className="gallery" src="/images/hair97.JPG"></img>
              </div>
              <div>
                <img className="gallery" src="/images/hair98.JPG"></img>
              </div>
              <div>
                <img className="gallery" src="/images/hair99.JPG"></img>
              </div>
            </div>


          </div>

          <div className="section pt-16">
            <h3 id="Contact">Contact</h3>
            <hr></hr>
            <p>
              @Juan Romero Salon <br />
              6000 S Congress Ave STE 104 <br />
              Austin, TX 78745 <br />
              <a href="tel:512-487-9636">512-487-9636</a>
            </p>

          </div>

        </div>



      </div >
    </>
  );
}

export default HomePage;

