import React, { useState } from "react";
import { NFT } from "./pages/Minting";
import { Card, CardHeader, ImageHeader, CardBody } from "react-simple-card";
import { useHistory } from "react-router-dom";

export default function NFTForm(props) {
  var address = "test1";
  let history = useHistory();
  const [property, setProperty] = useState("");
  const [gameValue, setGameValue] = useState("");
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

  function createGame(props, property, gameValue) {
    console.log(localStorage.getItem("test1"));
    console.log(property, gameValue);
    alert("Game Created");
    history.push("/");
  }

  return (
    <Card className="headline">
      <CardHeader className="headline">{props.data.name}</CardHeader>
      <ImageHeader
        className="imageProp"
        imageSrc={props.data.imageUri}
      ></ImageHeader>
      <CardBody className="cardbody">
        Description:- {props.data.description}
        {!props.data.mynft ? (
          <button onClick={() => mintNFT(props)}>Mint</button>
        ) : (
          <>
            <table>
              <tbody>
                <tr>
                  <td>Enter the property</td>
                  <td>
                    <input
                      type="text"
                      value={property}
                      onChange={(e) => setProperty(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Creator Attribute Value</td>
                  <td>
                    <input
                      type="text"
                      value={gameValue}
                      onChange={(e) => setGameValue(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => createGame(props, property, gameValue)}>
              Create Game
            </button>
          </>
        )}
      </CardBody>
    </Card>
  );
}
