import React, { useState } from "react";
import { NFT } from "./pages/Minting";
import {
  Card,
  CardHeader,
  ImageHeader,
  CardBody,
  CardFooter,
} from "react-simple-card";

export default function NFTForm(props) {
var address = "bhaiya";
function hashIt(password) {
        let arr = password.toString().split('');
        return arr.reduce(
          (hashCode, currentVal) =>
            (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
          0
        );
  }

  function mintNFT(value) {
    var speed = Math.floor(Math.random() * 10);
    var xp = Math.floor(Math.random() * 10);
    var power = Math.floor(Math.random() * 10);
    var hashValue = hashIt(speed+xp+power);
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

  return (
    <Card>
      <CardHeader className="headline">{props.data.name}</CardHeader>
      <ImageHeader
        className="imageProp"
        imageSrc={props.data.imageUri}
      ></ImageHeader>
      <CardBody>Description:- {props.data.description}</CardBody>
      <button onClick={() => mintNFT(props)}>Mint</button>
    </Card>
  );
}
