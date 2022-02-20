import React, { useState } from "react";
import { NFT } from "./pages/Minting";
import { Card, CardHeader, ImageHeader, CardBody } from "react-simple-card";

export default function NFTForm(props) {
  var address = "bhaiya";
  const [property, setProperty] = useState("");
  function hashIt(password) {
    let arr = password.toString().split("");
    return arr.reduce(
      (hashCode, currentVal) =>
        (hashCode =
          currentVal.charCodeAt(0) +
          (hashCode << 6) +
          (hashCode << 16) -
          hashCode),
      0
    );
  }

  function mintNFT(value) {
    var speed = Math.floor(Math.random() * 10);
    var xp = Math.floor(Math.random() * 10);
    var power = Math.floor(Math.random() * 10);
    var hashValue = hashIt(speed + xp + power);
    localStorage.setItem(
      address,
      JSON.stringify(
        new NFT(
          props.data.iq,
          props.data.name,
          props.data.description,
          xp,
          speed,
          power,
          hashValue
        )
      )
    );
  }

  function createGame(value,property) {
    console.log(localStorage.getItem("bhaiya"));
    console.log(property);
  }

  return (
    <Card>
      <CardHeader className="headline">{props.data.name}</CardHeader>
      <ImageHeader
        className="imageProp"
        imageSrc={props.data.imageUri}
      ></ImageHeader>
      <CardBody>Description:- {props.data.description}</CardBody>
      {!props.data.mynft ? (
        <button onClick={() => mintNFT(props)}>Mint</button>
      ) : (
        <><button onClick={() => createGame(props,property)}>Create Game</button><label>
            Enter the property to create game:
            <input
              type="text"
              value={property}
              onChange={(e) => setProperty(e.target.value)} />
          </label></>
      )}
    </Card>
  );
}
