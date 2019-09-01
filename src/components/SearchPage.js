import React from "react";
import {
  Heading,
  SubHeading,
  Panel,
  Button,
  TextInput
} from "react-bootstrap-component";
import useReactRouter from "use-react-router";

function SearchPage() {
  const { history } = useReactRouter();
  return (
    <div>
      <Heading level="1">
        Search Page
        <SubHeading>けんさく</SubHeading>
      </Heading>
      <hr />
      <Panel title="Search Form">
        <Button label="BookName" primary />
        <Button label="AuthorName" primary />
        <TextInput />
        <Button
          label="Go Search!"
          onClick={() => history.push("/searchresult")}
        />
        <hr />
        <Panel title="Option....."></Panel>
      </Panel>
    </div>
  );
}

export default SearchPage;
