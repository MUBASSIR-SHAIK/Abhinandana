import React, { useState } from "react";
import "./Ventures.scss";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import MapImage from "../../../assets/images/img/Hyd-Location.png";
import LayoutImage from "../../../assets/images/img/LayoutImage.png"; // <-- Update this path to your layout image
import ApplicationForm from "./ApplicationForm";

const LABELS = [
  "Location map",
  "Brocher",
  "Layout",
  "Plots",
  "Pricing",
  "Application",
];

function getBranches(branchCount = 1) {
  const branches = [];
  for (let i = 1; i <= branchCount; i++) {
    branches.push({
      name: `Branch-${i}`,
      tabs: {
        "Location map": {
          image: MapImage,
          content: null,
        },
        "Brocher": {
          content: null,
        },
        "Layout": {
          image: LayoutImage,
          content: null,
        },
        "Plots": {
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
            "The layout and design of flats in Monterrey can vary greatly depending on the specific building, location, and style. However, many flats in Monterrey are designed with an open floor plan, which often includes a combined living and dining area that opens onto a balcony or terrace.",
        },
        "Application": {
          content: null, // ApplicationForm will be rendered instead
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
    label: "Vizag",
    branches: getBranches(1),
  },
  {
    label: "Vijayawada",
    branches: getBranches(1),
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

  // Reset branch and label when city is changed
  const handleCityChange = (idx) => {
    setActiveCity(idx);
    setActiveBranch(0);
    setActiveLabel(0);
  };

  // Slide arrows for branches
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
      {/* Branch navigation with side arrows at right top */}
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

      {/* Slide navigation labels */}
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
        {/* Location map tab */}
        {label === "Location map" && tabData.image && (
          <div className="location-map-content center-content">
            <img src={tabData.image} alt="Location Map" />
          </div>
        )}

        {/* Layout tab */}
        {label === "Layout" && tabData.image && (
          <div className="layout-content center-content">
            <img src={tabData.image} alt="Layout" />
          </div>
        )}

        {/* Pricing tab */}
        {label === "Pricing" && (
          <div className="pricing-content center-content">
            <h4>
              {tabData.title}: <span>{tabData.price}</span>
            </h4>
            <p className="pricing-description">{tabData.description}</p>
            <ul className="pricing-details-list">
              <li>
                <span className="pricing-detail-key">Bedrooms</span> : <span className="pricing-detail-value">{tabData.details.Bedrooms}</span>
              </li>
              <li>
                <span className="pricing-detail-key">Bathrooms</span> : <span className="pricing-detail-value">{tabData.details.Bathrooms}</span>
              </li>
              <li>
                <span className="pricing-detail-key">Area Size</span> : <span className="pricing-detail-value">{tabData.details["Area Size"]}</span>
              </li>
              <li>
                <span className="pricing-detail-key">Parking</span> : <span className="pricing-detail-value">{tabData.details.Parking}</span>
              </li>
            </ul>
          </div>
        )}

        {/* Application tab */}
        {label === "Application" && (
          <div className="application-content center-content">
            <ApplicationForm />
          </div>
        )}

        {/* All other tabs */}
        {label !== "Location map" && label !== "Pricing" && label !== "Application" && label !== "Layout" && (
          <div className="default-label-content">
            {tabData.content || (
              <span style={{ color: "#aaa" }}>No content yet for this section.</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ventures;