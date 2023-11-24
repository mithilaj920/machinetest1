import React from "react";
import { Card } from "react-bootstrap";
import "./Card1.css";
import { BsPerson, BsCloudArrowUp, BsArrowRight } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Card1 = ({ objectArray }) => {
  console.log(objectArray);
  return (
    <div1 className="row">
      {objectArray.map((i) => {
        return (
          <Card
            bg="Light"
            text="dark"
            style={{ width: "18rem", margin: "20px 0px 0px 80px" }}
            className="mb-2"
          >
            <div
              style={{
                borderBottom: "1px solid black",
                margin: "10px 20px",
                paddingBottom: "10px",
              }}
            >
              <h3>{i.plan}</h3>
              <h6 className="crossed-line">{i.actualPrize}</h6>
              <h3>{i.offerPrize}</h3>
              <button
                style={{
                  backgroundColor: i.btnColor,
                  border: "none",
                  fontSize: "12px",
                  padding: "4px 14px",
                }}
              >
                Get Started
                <BsArrowRight style={{ marginLeft: "5px" }} />
              </button>
            </div>
            <Card.Body>
              <h5 style={{ fontSize: "10px" }}>What you'll get:</h5>
              <h5 style={{ fontSize: "12px" }}>
                <BsPerson size={16} style={{ marginRight: "10px" }} />
                Upto {i.users} Users
              </h5>
              <h5 style={{ fontSize: "12px" }}>
                <BsCloudArrowUp size={16} style={{ marginRight: "10px" }} />
                Upto {i.gb} storage
              </h5>
              <h5 style={{ fontSize: "12px" }}>
                <MdOutlineMailOutline
                  size={16}
                  style={{ marginRight: "10px" }}
                />
                {i.support}
              </h5>
              <a
                href=""
                style={{
                  marginLeft: "24px",

                  color: "black",
                }}
              >
                Explore Features
              </a>
            </Card.Body>
          </Card>
        );
      })}
    </div1>
  );
};

export default Card1;
