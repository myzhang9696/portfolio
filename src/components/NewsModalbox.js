import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const NewsModalbox = ({ close, value }) => {
  const data = [
    {
      title:
        "PennLobby",
      tag: "Group-Based Social Network Web App",
      desc: [
        { p: `-	Implemented a MERN platform for students to have group discussions on school affairs, post and send private messages
        -	Built an interactive front-end using React & Redux and use RESTful API for front-end and back-end communication
        -	Implemented web server with Express and Node.js, performed CRUD operations to manage data in MongoDB
        -	Created AWS S3 cloud storage bucket to store application’s image & video files, in order to decrease load to the server
        -	Used Jest & cypress for testing, and Travis for continuous integration. Enabled live notification and chat with WebSocket` }
      ],
      link: "https://pennlobby.herokuapp.com/",
      img: "img/pennlobby.png",
    },
    {
      title: "EzScene",
      tag: "Space-time scenario simulation application framework and 2D/3D webGL system",
      desc: [
        { p: `-	Independently implemented space-time scenario map & data platform with React and Redux, based on Mapbox GL 
        -	Implemented different customization of the product, which was sold to 32 different cities, bring $3 million profit
        -	Wrote reusable UI components library; implemented rapid application development with Kepler GL for early stage
        -	Developed interactive functions between map and Echarts, allow users update statistical charts by draw on map, etc.
        ` }
      ],
      img: "img/ezscene.png",
    },
    {
      title: "EzRisk",
      tag: "Full-stack(Flask) rapid-developed risk alarm system",
      desc: [
        { p: `-	Enabled risk prediction, parameter adjustment and result visualization based on user’s input under Flask framework` }
      ],
      img: "img/risk.jpg",
    },
    {
      title:
        "Baltimore Fleet Optimization",
      tag: "Optimization project cooperate with Baltimore government",
      desc: [
        { p: `-	Optimized and reduced Baltimore fleet comeback rates with time-series prediction model, reduced 3% of financial cost
        -	Created a web app with JavaScript CSS & HTML for mechanics and decision-makers to better visualize prediction result
        ` }
      ],
      link: "https://akshaypracticum.github.io/practicum.github.io/",
      img: "img/baltimore.png",
    },
    {
      title:
        "Guess Celebrity Games",
      tag: "Small webpage game",
      desc: [
        { p: `-	Built a full-stack web application that provide users a web game that let users guess who the celebrity is with given photos
        -	Stored all user records in MySQL; implemented back-end with Node and Mongoose; deployed the web app to Heroku
        ` }
      ],
      link: "https://guess-celebrities-quiz.herokuapp.com/",
      img: "img/celeb.png",
    },
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    {/* <p className="fn__cat">August 18, 2021</p> */}
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.title}</h3>
                    {d.link && <a href={d.link} style={{textDecorationColor: "#987750"}} target="_blank"><h4 className="fn__title" style={{marginTop: '-40px'}}>{`See App ->`}</h4></a>}
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={d.img}
                      />
                    </div>
                    {d.desc.map((des) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}

                  </div>
                )
            )}


          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModalbox;
