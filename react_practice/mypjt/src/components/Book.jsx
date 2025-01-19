import React from "react";
import "./Book.css"; // Import the CSS for the book styles

function Book() {
  return (
    <div className="cover">
      <div className="book">
        <label htmlFor="page-1" className="book__page book__page--1">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg"
            alt=""
          />
        </label>
        <label htmlFor="page-2" className="book__page book__page--4">
          <div className="page__content">
            <h1 className="page__content-title">I</h1>
            <div className="page__content-blockquote">
              <p className="page__content-blockquote-text">
                HARI SELDON — . . . born in the 11,988th year of the Galactic
                Era; died 12,069...
              </p>
              <span className="page__content-blockquote-reference">
                Encyclopedia Galactica*
              </span>
            </div>
          </div>
        </label>
        <input type="radio" name="page" id="page-1" />
        <input type="radio" name="page" id="page-2" />
        <label className="book__page book__page--2">
          <div className="book__page-front">
            <div className="page__content">
              <h1 className="page__content-book-title">Foundation</h1>
              <h2 className="page__content-author">Isaac Asimov</h2>
              <p className="page__content-credits">
                Introduction by <span>Paul Krugman</span>
              </p>
              <p className="page__content-credits">
                Illustrations by <span>Alex Wells</span>
              </p>
              <div className="page__content-copyright">
                <p>The Folio Society</p>
                <p>London - MMXII</p>
              </div>
            </div>
          </div>
          <div className="book__page-back">
            <div className="page__content">
              <h1 className="page__content-title">Contents</h1>
              <table className="page__content-table">
                <tr>
                  <td align="left">Part I</td>
                  <td align="left">The Psycohistorians</td>
                  <td align="right">3</td>
                </tr>
                {/* Add more rows as needed */}
              </table>
              <div className="page__number">2</div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Book;
