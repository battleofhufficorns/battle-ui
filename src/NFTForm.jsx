import React from "react";
import {
  Card,
  CardHeader,
  ImageHeader,
  CardBody,
  CardFooter,
} from "react-simple-card";

export default function NFTForm(props) {
  function mintNFT(value) {
    console.log("This is the value", value);
  }

  return (
    <Card>
      <CardHeader className="headline">{props.data.name}</CardHeader>
      <ImageHeader
        imageSrc={props.data.imageUri}
        width="300"
        height="125"
      ></ImageHeader>
      <CardBody>{props.data.description}</CardBody>
      <CardFooter>
        <table>
          <tr>
            <td>Iq </td>
            <td>{props.data.iq}</td>
          </tr>
          <tr>
            <td>Speed </td>
            <td>{props.data.speed}</td>
          </tr>
          <tr>
            <td>Power </td>
            <td>{props.data.power}</td>
          </tr>
        </table>
      </CardFooter>
      <button onClick={() => mintNFT(props)}>Mint</button>
    </Card>
  );
}
