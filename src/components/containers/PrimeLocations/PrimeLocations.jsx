import React, { useState } from "react";
import "./PrimeLocations.scss";

const locations = [
  {
    name: "Location 1",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    description:
      "Location 1 is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Location 2",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    description:
      "Location 2 is another example text, showcasing premium properties with lush greenery and modern architecture.",
  },
  {
    name: "Location 3",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    description:
      "Location 3 is known for its vibrant community and top-class infrastructure. Ideal for both residential and commercial purposes.",
  },
  {
    name: "Location 4",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
    description:
      "Location 4 is a premium locality featuring spacious villas and close proximity to key business hubs.",
  },
];

const PrimeLocations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = locations[activeIndex];

  return (
    <div className="prime-locations-container">
      <h2 className="section-title">Prime Locations</h2>
      <div className="content-wrapper">
        <div className="location-list">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`location-item ${activeIndex === idx ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              {loc.name}
            </div>
          ))}
        </div>
        <div className="location-details">
          <div className="image-wrapper">
            <img src={activeLocation.image} alt={activeLocation.name} />
          </div>
          <div className="text">
            <p>{activeLocation.description}</p>
            <p>{activeLocation.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeLocations;
