import React from "react";
import "../styles/faq-page.css";
import { faq } from "../utils/faqs";
import FaqCard from "../Components/FaqCard";

export default function FaqPage() {
  return (
    <div className="faq-page">
      <header>
        <div className="header-text">
          <h1>Have Some Questions ?</h1>
          <p>
            Can't find your doubt in following questions? Don't hesitate to mail
            us at{" "}
            <u>
              <a href="mailto:ic.sandbox@goa.bits-pilani.ac.in">
                ic.sandbox@goa.bits-pilani.ac.in
              </a>
            </u>
          </p>
        </div>
      </header>
      <main className="faq-section">
        {faq.map((element, k) => {
          return (
            <FaqCard key={k} quest={element.question} ans={element.answer} />
          );
        })}
      </main>
    </div>
  );
}
