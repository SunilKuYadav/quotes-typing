import React from 'react'
import { OPTIONS } from '../../types';

import './styles.css';

interface FooterProps {
  onCollectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  charCount: number;
  handleReset: () => void;
  name: string;
  setName: (name: string) => void;
}

const Footer = (props: FooterProps) => {
  const { onCollectionChange, charCount, handleReset, name, setName } = props;

  const handleQuotesCollectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCollectionChange(e);
  }
  return (
    <footer>
        <div className="editor-wrapper">
          <div className="quotes-collection-option">
            <select onChange={handleQuotesCollectionChange}>
              {OPTIONS.map((item) => (
                <option key={item.type} value={item.type}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="counter-wrapper">
            <p className="pm-0 gray">
              Your total key stroke is :
              <span className="white">{charCount}</span>
            </p>
            <button className="pm-0 reset-btn" onClick={handleReset}>
              Reset Page
            </button>
          </div>
          <span className="gray">Update Your Name : </span>
          <input
            // ref={nameRef}
            className="name-input"
            type="text"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className="icon-wrap center row">
          <a
            href="https://github.com/SunilKuYadav"
            target="_blank"
            rel="noreferrer"
          >
            <div className="center icon" id="icon-5">
              <i className="mdi mdi-github"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/123sunil/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="center icon" id="icon-2">
              <i className="mdi mdi-linkedin"></i>
            </div>
          </a>
          <a
            href="https://twitter.com/123sunilkr"
            target="_blank"
            rel="noreferrer"
          >
            <div className="center icon" id="icon-2">
              <i className="mdi mdi-twitter"></i>
            </div>
          </a>
          <a
            href="https://www.instagram.com/_om_rudra_/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="center icon" id="icon-4">
              <i className="mdi mdi-instagram"></i>
            </div>
          </a>
        </div>
        <div className="info-box">
          <div className="footnote">
            SUNIL KUMAR YADAV{" "}
            <span className="highlight">
              &copy;2022-{new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
  )
}

export {Footer}
