import React from "react";
import { Card } from "react-bootstrap";
import { BsArrowRight, BsCloudArrowUp, BsPerson } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "./Card2.css";

const Card2 = ({ objectArray }) => {
  const iconSize = 16;

  return (
    <div className="row mt-5" style={{ alignItems: "center" }}>
      {objectArray.map((i, index) => {
        return (
          <Card bg="Light" text="dark" className="mb-2 main_card2" key={i.plan}>
            <div className="card_2">
              <div style={{ padding: "50px 0px" }} className="sub_div">
                <h3 style={{ width: "250px" }}>{i.plan}</h3>
                <h3 style={{ fontSize: "10px", width: "250px" }}>{i.para}</h3>
                <button
                  style={{
                    backgroundColor: i.btnColor,
                    border: "none",
                    fontSize: "12px",
                    padding: "4px 14px",
                    marginTop: "20px",
                  }}
                >
                  Get Started
                  <BsArrowRight style={{ marginLeft: "5px" }} />
                </button>
              </div>
              <Card.Body
                style={{ textAlign: "left", marginTop: "20px" }}
                className="card_body"
              >
                <h5 style={{ fontSize: "10px" }}>What you'll get:</h5>
                <h5 style={{ fontSize: "12px" }}>
                  <BsPerson size={iconSize} style={{ marginRight: "10px" }} />
                  {i.users}
                </h5>
                {index === 0 && (
                  <h5 style={{ fontSize: "12px" }}>
                    <BsCloudArrowUp
                      size={iconSize}
                      style={{ marginRight: "10px" }}
                    />
                    Upto {i.gb} storage
                  </h5>
                )}
                {index === 0 && (
                  <h5 style={{ fontSize: "12px" }}>
                    <MdOutlineMailOutline
                      size={iconSize}
                      style={{ marginRight: "10px" }}
                    />
                    {i.support}
                  </h5>
                )}
                <h5
                  style={{
                    display: "grid",
                    gridTemplateColumns: `${iconSize}px auto`,
                    alignItems: "center",
                    fontSize: "12px",
                  }}
                >
                  <FaCheck
                    size={iconSize}
                    style={{ marginRight: "5px", fontSize: `${iconSize}px` }}
                  />
                  <span style={{ marginLeft: "10px" }}>{i.about}</span>
                </h5>
              </Card.Body>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Card2;
