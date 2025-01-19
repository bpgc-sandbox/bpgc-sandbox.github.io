import React, { memo } from "react";
import { student, faculty } from "../utils/member";
import MembersCard from "../Components/MembersCard";
import "../styles/members-page.css";

const MembersPage = memo(() => {
  return (
    <section className="members-page">
      <header>
        <div className="header-text">
          <h1>Sandbox Committee</h1>
          {/* <p>A Plethora of Projects are being developed at Sandbox!</p> */}
        </div>
      </header>
      <div className="members">
        {student.map((element, i) => {
          return (
            <MembersCard
              key={i}
              name={element.name}
              image={element.image}
              linkedin={element.linkedIn}
              mail={element.email}
            />
          );
        })}
      </div>
      <h1 className="faculty-header">Faculty</h1>
      <div className="faculty">
        {faculty.map((element, i) => {
          return (
            <MembersCard
              key={i}
              name={element.name}
              image={element.image}
              mail={element.email}
              linkedin = {element.linkedIn}
            />
          );
        })}
      </div>
    </section>
  );
});

export default MembersPage;
