"use client";
import { useState } from "react";
import CryptoJS from "crypto-js";
import NodeRSA from "node-rsa";

export default function Home() {
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptionKey, setEncryptionKey] = useState("");
  const [encryptionMethod, setEncryptionMethod] = useState("AES");
  const encryptText = () => {
    let encrypted;
    switch (encryptionMethod) {
      case "AES":
        encrypted = CryptoJS.AES.encrypt(plainText, encryptionKey).toString();
        break;
      case "DES":
        encrypted = CryptoJS.DES.encrypt(plainText, encryptionKey).toString();
        break;
      case "TripleDES":
        encrypted = CryptoJS.TripleDES.encrypt(
          plainText,
          encryptionKey
        ).toString();
        break;
      default:
        encrypted = plainText;
    }
    setCipherText(encrypted);
  };

  const decryptText = () => {
    let bytes;
    let decrypted;
    switch (encryptionMethod) {
      case "AES":
        bytes = CryptoJS.AES.decrypt(cipherText, encryptionKey);
        decrypted = bytes.toString(CryptoJS.enc.Utf8);
        break;
      case "DES":
        bytes = CryptoJS.DES.decrypt(cipherText, encryptionKey);
        decrypted = bytes.toString(CryptoJS.enc.Utf8);
        break;
      case "TripleDES":
        bytes = CryptoJS.TripleDES.decrypt(cipherText, encryptionKey);
        decrypted = bytes.toString(CryptoJS.enc.Utf8);
        break;
      default:
        decrypted = cipherText;
    }
    setDecryptedText(decrypted);
  };

  return (
    <div className="container">
      <h1 className="title">Crypto Toolkit App</h1>
      <div className="flexContainer">
        <div className="section">
          <h2 className="subtitle">Encryption</h2>
          <div className="buttonGroup">
            <button
              onClick={() => setEncryptionMethod("AES")}
              className={`button ${encryptionMethod === "AES" ? "active" : ""}`}
            >
              AES
            </button>
            <button
              onClick={() => setEncryptionMethod("DES")}
              className={`button ${encryptionMethod === "DES" ? "active" : ""}`}
            >
              DES
            </button>
            <button
              onClick={() => setEncryptionMethod("TripleDES")}
              className={`button ${
                encryptionMethod === "TripleDES" ? "active" : ""
              }`}
            >
              TripleDES
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter plain text"
            value={plainText}
            onChange={(e) => setPlainText(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Enter encryption key"
            value={encryptionKey}
            onChange={(e) => setEncryptionKey(e.target.value)}
            className="input"
          />
          <div className="buttonGroup">
            <button onClick={encryptText} className="button encryptButton">
              Encrypt Now
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(cipherText)}
              className="button copyButton"
            >
              Copy Cipher
            </button>
          </div>
          <p className="result">
            {cipherText && `Encrypted Text: ${cipherText}`}
          </p>
        </div>
        <div className="section">
          <h2 className="subtitle">Decryption</h2>
          <input
            type="text"
            placeholder="Enter cipher text"
            value={cipherText}
            onChange={(e) => setCipherText(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Enter decryption key"
            value={encryptionKey}
            onChange={(e) => setEncryptionKey(e.target.value)}
            className="input"
          />
          <div className="buttonGroup">
            <button onClick={decryptText} className="button decryptButton">
              Decrypt Now
            </button>
          </div>
          <p className="result">
            {decryptedText && `Decrypted Text: ${decryptedText}`}
          </p>
        </div>
      </div>
    </div>
  );
}