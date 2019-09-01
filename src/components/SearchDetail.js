import React from "react";
import { Panel, Heading, SubHeading } from "react-bootstrap-component";

function SearchDetail() {
  return (
    <div>
      <Heading level="1">
        Book Detail Page
        <SubHeading>ほんのしょうさい</SubHeading>
      </Heading>
      <hr />
      <Panel title="Book detail">
        <p>
          <strong>BookName</strong>
          BookTest
        </p>
      </Panel>
      <Panel title="Review">
        <Panel title="No1">
          <p>Point 1</p>
        </Panel>
      </Panel>
    </div>
  );
}

export default SearchDetail;
