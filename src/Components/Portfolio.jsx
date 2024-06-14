/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Indishoot Vertex Dynamics - Android intern",
    description:
      "Working as a android intern in a gurgaon based startup app which connects photographers to clients.",
    url: "https://play.google.com/store/apps/details?id=com.anytimeshoot.anytimeshoot",
  },
  {
    title: "Sensibite - Food Allergy Assistant",
    description:
      "Developeda food allergy assistant having Marketplace, Scanner, and Profile section, leveragin powers of kotlin and external libraries with ML model integration.",
    url: "",
  },
  {
    title: "Sankalp - platform for Drug Addiction Support",
    description:
      "Developed a kotlin-compose based Application for helping people struggling with drug addiction to get rid of it, by providing anonymity and virtual support.",
    url: "",
  },
  {
    title: "SuperVision - AI powered smart CCTV solutions",
    description:
      "Developed an android mobile application to remotely monitor and make decisions on real-time video feed anomalies detected from the smart CCTV camera.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects and Experience </h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
