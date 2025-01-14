import React from "react";
import "../styles/proposal-page.css";

function ProposalPage() {
    return (
        <div className="proposal-page">
            <header>
                <div className="header-text">
                    <h1>Apply for Access to Sandbox</h1>
                </div>
            </header>
            <main>
                <div className="access">
                    <h2>Access to Sandbox</h2>
                    <p>
                        *Level of Access is decided by the Sandbox Community
                        after assessing proposals{" "}
                    </p>
                    <div className="partial">
                        <h3>Partial Access</h3>
                        <ul className="access-details">
                            <li>
                                Projects cannot have WorkSessions inside Sandbox
                                Lab.
                            </li>
                            <li>
                                Projects can borrow parts from sandbox but must
                                return after use.
                            </li>
                            <li>
                                Only Project Lead will be given Fingerprint
                                Access.
                            </li>
                        </ul>
                    </div>
                    <div className="full">
                        <h3>Full Access</h3>
                        <ul className="access-details">
                            <li>
                                WorkSessions for the project must be held in
                                Sandbox Lab.
                            </li>
                            <li>
                                Sandbox parts must not be taken outside Sandbox
                                Lab.
                            </li>
                            <li>
                                Projects will be alloted Worksession slots to
                                work in the Lab.
                            </li>
                        </ul>
                    </div>
                    <div className="access-btns">
                        <a
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSelN1pYBmSamhTbTcxNO4ngrP2ZRfxZm4K_6hdCKE1kLvUBaA/viewform"
                        >
                            <button className="apply-btn">Apply</button>
                        </a>
                    </div>
                </div>
                <div className="one-req access">
                    <h2>One-Off Requests</h2>
                    <ul className="access-details">
                        <p>
                            Didn't get approved for ongoing Sandbox access, or
                            only need a one-time use of our advanced facilities,
                            like the 3D printer, laser cutter, or PCB printer?
                            We've got you covered!
                            <br />
                            <br />
                            You can apply through our{" "}
                            <b>One-Time Use Request Form</b>. This option is
                            perfect for students and project teams who require
                            access to specific equipment for a single task or
                            project but don’t need continuous access to the lab.
                            Once you submit your request, it will be reviewed by
                            our committee. If your application is approved,
                            you'll be granted access to the necessary facilities
                            for one-time use to complete your work.
                            <br />
                            <br />
                            Whether you’re working on a small project or just
                            need to test something out, our One-Time Use option
                            is designed to support your innovation and
                            creativity without the need for a full-time
                            commitment to Sandbox.
                        </p>
                    </ul>
                    <div className="access-btns">
                        <a
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc7nQaLoM3pGOl6SoSVX5hYQ4kfIaqnyj9LJfNTq4YivqpEdw/viewform"
                        >
                            <button className="apply-btn">Apply</button>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProposalPage;
