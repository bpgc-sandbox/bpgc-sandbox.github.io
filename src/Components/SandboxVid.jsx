import React from "react";

function SandboxVid() {
  return (
    <section className="sandbox-vid">
      <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
        <iframe
          src="https://player.vimeo.com/video/988713943?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}
          title="sandbox"
        ></iframe>
      </div>
    </section>
  );
}

export default SandboxVid;
