import React, { Component } from "react";
import "./DynamicNav.css";
const data = [
  {
    name: "New",
    ID: 2048,
    parent: "0",
  },
  {
    name: "Travel Tales",
    ID: 7584,
    parent: "0",
  },
  {
    name: "Travel Themes",
    ID: 334,
    parent: "0",
  },
  {
    name: "Domestic Tales",
    ID: 8887,
    parent: "7584",
  },
  {
    name: "International Tales",
    ID: 8888,
    parent: "7584",
  },
  {
    name: "Honeymoon",
    ID: 340,
    parent: "8888",
  },
  {
    name: "Weekend Getaways",
    ID: 1416,
    parent: "334",
  },
  {
    name: "Holiday",
    ID: 968,
    parent: "334",
  },
  {
    name: "Travelogues",
    ID: 4208,
    parent: "334",
  },
  {
    name: "Shopping & Party",
    ID: 337,
    parent: "334",
  },
  {
    name: "Food & Drink",
    ID: 338,
    parent: "334",
  },
  {
    name: "Adventure",
    ID: 335,
    parent: "338",
  },
  {
    name: "Heritage",
    ID: 339,
    parent: "334",
  },
  {
    name: "Pilgrimage",
    ID: 341,
    parent: "334",
  },
  {
    name: "Art & Festival",
    ID: 336,
    parent: "334",
  },
  {
    name: "Health & Wellness",
    ID: 1418,
    parent: "334",
  },
  {
    name: "Photoscope",
    ID: 1837,
    parent: "1418",
  },
  {
    name: "Travel Tips",
    ID: 331,
    parent: "1418",
  },
  {
    name: "Go International",
    ID: 1544,
    parent: "336",
  },
  {
    name: "Offbeat",
    ID: 1545,
    parent: "0",
  },
];

const DynamicNav = () => {
  const returnChileds = (ch) => {
    const items = data.filter((rec) => {
      if (ch.ID == rec.parent) {
        return true;
      }
    });
    if (items.length) {
      return (
        <div class="dropdowntwo">
          <button class="dropbtntwo">{ch.name}</button>
          <div class="dropdown-contenttwo">
            {items.map((chi) => {
              return <a>{chi.name}</a>;
            })}
          </div>
        </div>
      );
    } else {
      return <a href={`#${ch.name}`}>{ch.name}</a>;
    }
  };
  const getMenuBar = () => {
    const parents = data.filter((rec) => {
      if (rec.parent == "0") {
        return true;
      }
    });

    const menu = parents.map((item, index) => {
      const ch = data.filter((rec) => {
        if (item.ID == rec.parent) {
          return true;
        }
      });

      if (ch.length) {
        return (
          <div class="dropdown">
            <button class="dropbtn">{item.name}</button>
            <div class="dropdown-content">
              {ch.map((chi) => {
                return returnChileds(chi);
              })}
            </div>
          </div>
        );
      } else {
        return <a href={`#${item.name}`}>{item.name}</a>;
      }
    });

    return menu;
  };

  return <div class="navbar">{getMenuBar()}</div>;
};

export default DynamicNav;
