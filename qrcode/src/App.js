import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";
import QRimport from "qrcode";

function App() {
  const [link, setlink] = useState("");
  const [qrCodeLink, setQrCodeLink] = useState("");

  function headleGenerate(link_url) {
    QRimport.toDataURL(
      link_url,
      {
        with: 500,
        margin: 3,
      },
      function (err, url) {
        setQrCodeLink(url);
      }
    );
  }

  function handleQRcode(e) {
    setlink(e.target.value);
    headleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <QRCode value={link} />
      <input
        placeholder="Digite sua URL..."
        className="input"
        value={link}
        onChange={(e) => handleQRcode(e)}
      />

      {Object.keys(link).length > 0 && (
        <a href={qrCodeLink} download={`qrcode.png`}>
          Baixar QRcode
        </a>
      )}
    </div>
  );
}

export default App;
