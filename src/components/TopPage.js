import React from "react";
import { Navbar, Heading, SubHeading, Panel } from "react-bootstrap-component";

function TopPage() {
  return (
    <div>
      <Navbar
        title={{ text: "bookmaestro" }}
        links={[
          { text: "Seach", href: "./searchpage" },
          { text: "Registry", href: "./#" }
        ]}
      />
      <Heading level="1">
        Portal Page
        <SubHeading>ぽーたる</SubHeading>
      </Heading>
      <hr />
      <Panel title="Notice">
        <p>display:none</p>
      </Panel>
      <Panel title="Suggest">
        <p>display:none</p>
      </Panel>
    </div>
  );
}

export default TopPage;
