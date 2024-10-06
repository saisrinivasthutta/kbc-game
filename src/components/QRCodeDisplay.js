// src/components/QRCodeDisplay.js
import React from "react";
import { QRCodeSVG } from "qrcode.react";

export const QRCodeDisplay = () => {
  const url = window.location.href;

  return (
    <div>
      <h2>Scan to Join the Game</h2>
      <QRCodeSVG value={url} size={200} />
    </div>
  );
};
