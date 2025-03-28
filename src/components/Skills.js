import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in React.js, Node.js, Express.js, MongoDB, and frontend styling with CSS, Bootstrap, and Tailwind CSS.<br/> Strong in API development, performance optimization, and problem-solving.</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="/React.png" alt="Image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src="/Node.js.png" alt="Image" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src="/Express.png" alt="Image" />
                                <h5>Express Js</h5>
                            </div>
                            <div className="item">
                                <img src="/MongoDb.png" alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src="/JavaScript.png" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="/HTML5.png" alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src="/CSS3.png" alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src="/Bootstrap.png" alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
