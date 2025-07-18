import React, { useState } from "react";
import "./Ventures.scss";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// Default images
import MapImage from "../../../assets/images/img/Hyd-Location.png";
import LayoutImage from "../../../assets/images/img/Sai Akshara Layout.jpg";
import BrochureImage from "../../../assets/images/img/Sai Akshara Brochure.jpg";
import PlotsImage from "../../../assets/images/img/Sai Akshara Plot.jpg";

// Vizag-specific images
import VizagMapImage from "../../../assets/images/img/Sai Mahalakshmi location.jpg";
import VizagLayoutImage from "../../../assets/images/img/Sai Mahalakshmi layout.jpg";
import VizagBrochureImage from "../../../assets/images/img/Sai Mahalakshmi Brocher.jpg";
import VizagPlotsImage from "../../../assets/images/img/Sai Mahalakshmi Plot.jpg";

import ApplicationForm from "./ApplicationForm";

const LABELS = [
  "Location map",
  "Brochure",
  "Layout",
  "Plots",
  "Pricing",
  "Application",
];

function getBranches(branchCount = 1, customImages = null) {
  const branches = [];
  for (let i = 1; i <= branchCount; i++) {
    branches.push({
      name: `Branch-${i}`,
      tabs: {
        "Location map": {
          image: customImages?.["Location map"] || MapImage,
          content: null,
        },
        "Brochure": {
          image: customImages?.["Brochure"] || BrochureImage,
          content: null,
        },
        "Layout": {
          image: customImages?.["Layout"] || LayoutImage,
          content: null,
        },
        "Plots": {
          image: customImages?.["Plots"] || PlotsImage,
          content: null,
        },
        "Pricing": {
          price: i === 1 ? "₹ 1.450.000" : i === 2 ? "₹ 1.350.000" : "₹ 1.250.000",
          title: "Monterrey",
          details: {
            Bedrooms: i === 3 ? 3 : 4,
            Bathrooms: 2,
            "Area Size": i === 3 ? "100.00" : "120.50",
            Parking: "Yes",
          },
          description:
            "The layout and design of flats in Monterrey can vary greatly depending on the specific building, location, and style. However, many flats in Monterrey are designed with an open floor plan...",
        },
        "Application": {
          content: null,
        },
      },
    });
  }
  return branches;
}

const CITY_DATA = [
  {
    label: "Hyderabad",
    branches: getBranches(3),
  },
  {
    label: "Vijayawada",
    branches: getBranches(2),
  },
  {
    label: "Vizag",
    branches: getBranches(1, {
      "Location map": VizagMapImage,
      "Brochure": VizagBrochureImage,
      "Layout": VizagLayoutImage,
      "Plots": VizagPlotsImage,
    }),
  },
  {
    label: "Guntur",
    branches: getBranches(1),
  },
  {
    label: "Bangalore",
    branches: getBranches(1),
  },
];

const Ventures = () => {
  const [activeCity, setActiveCity] = useState(0);
  const [activeBranch, setActiveBranch] = useState(0);
  const [activeLabel, setActiveLabel] = useState(0);

  const city = CITY_DATA[activeCity];
  const branch = city.branches[activeBranch];
  const label = LABELS[activeLabel];
  const tabData = branch.tabs[label];

  const handleCityChange = (idx) => {
    setActiveCity(idx);
    setActiveBranch(0);
    setActiveLabel(0);
  };

  const handleBranchNext = () => {
    if (activeBranch < city.branches.length - 1) {
      setActiveBranch(activeBranch + 1);
      setActiveLabel(0);
    }
  };

  const handleBranchPrev = () => {
    if (activeBranch > 0) {
      setActiveBranch(activeBranch - 1);
      setActiveLabel(0);
    }
  };

  return (
    <div className="ventures">
      <h2 className="ventures-title">Ventures</h2>

      <div className="venture-tabs">
        {CITY_DATA.map((city, idx) => (
          <button
            key={city.label}
            className={`venture-tab ${activeCity === idx ? "active" : ""}`}
            onClick={() => handleCityChange(idx)}
          >
            {city.label}
          </button>
        ))}
      </div>

      <div className="branch-nav-slider-top">
        <div className="branch-label">{city.branches[activeBranch].name}</div>
        <div className="branch-slider-arrows">
          <button
            className={`branch-arrow-btn left ${activeBranch === 0 ? "disabled" : ""}`}
            onClick={handleBranchPrev}
            disabled={activeBranch === 0}
          >
            <FaAngleLeft />
          </button>
          <button
            className={`branch-arrow-btn right ${activeBranch === city.branches.length - 1 ? "disabled" : ""}`}
            onClick={handleBranchNext}
            disabled={activeBranch === city.branches.length - 1}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="branch-label-tabs">
        {LABELS.map((lbl, idx) => (
          <button
            key={lbl}
            className={`branch-label-tab ${activeLabel === idx ? "active" : ""}`}
            onClick={() => setActiveLabel(idx)}
          >
            {lbl}
          </button>
        ))}
      </div>

      <div className="branch-label-content">
        {label === "Location map" && tabData.image && (
          <div className="location-map-content center-content">
            <img src={tabData.image} alt="Location Map" />
          </div>
        )}

        {label === "Brochure" && tabData.image && (
          <div className="brochure-content center-content">
            <img src={tabData.image} alt="Brochure" />
          </div>
        )}

        {label === "Layout" && tabData.image && (
          <div className="layout-content center-content">
            <img src={tabData.image} alt="Layout" />
          </div>
        )}

        {label === "Plots" && tabData.image && (
          <div className="plots-content center-content">
            <img src={tabData.image} alt="Plots" />
          </div>
        )}

        {label === "Pricing" && (
          <div className="pricing-content center-content">
            <h4>
              {tabData.title}: <span>{tabData.price}</span>
            </h4>
            <p className="pricing-description">{tabData.description}</p>
            <ul className="pricing-details-list">
              <li>
                <span className="pricing-detail-key">Bedrooms</span> :{" "}
                <span className="pricing-detail-value">{tabData.details.Bedrooms}</span>
              </li>
              <li>
                <span className="pricing-detail-key">Bathrooms</span> :{" "}
                <span className="pricing-detail-value">{tabData.details.Bathrooms}</span>
              </li>
              <li>
                <span className="pricing-detail-key">Area Size</span> :{" "}
                <span className="pricing-detail-value">{tabData.details["Area Size"]}</span>
              </li>
              <li>
                <span className="pricing-detail-key">Parking</span> :{" "}
                <span className="pricing-detail-value">{tabData.details.Parking}</span>
              </li>
            </ul>
          </div>
        )}

        {label === "Application" && (
          <div className="application-content center-content">
            <ApplicationForm />
          </div>
        )}

        {/* Default fallback for other or missing tabs */}
        {label !== "Location map" &&
          label !== "Brochure" &&
          label !== "Layout" &&
          label !== "Plots" &&
          label !== "Pricing" &&
          label !== "Application" && (
            <div className="default-label-content">
              {tabData.content || <span style={{ color: "#aaa" }}>No content yet for this section.</span>}
            </div>
          )}
      </div>
    </div>
  );
};

export default Ventures;
