import React from "react";
import { Panel, Heading, SubHeading } from "react-bootstrap-component";
import { Table, TableHead, TableData, Button } from "react-bootstrap-component";
import useReactRouter from "use-react-router";

function SearchResult() {
  const { history } = useReactRouter();
  return (
    <div>
      <Heading level="1">
        Search Result Page
        <SubHeading>けんさくけっか</SubHeading>
      </Heading>
      <hr />
      <Panel title="Search Result">
        <Table>
          <thead>
            <tr>
              <TableHead>Num</TableHead>
              <TableHead>BookName</TableHead>
              <TableHead>AuthorName</TableHead>
              <TableHead>More</TableHead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData>1</TableData>
              <TableData>TestBook</TableData>
              <TableData>TestAuthor</TableData>
              <TableData>
                <Button
                  label="Detail"
                  onClick={() => history.push("/searchdetail")}
                />
              </TableData>
            </tr>
            <tr>
              <TableData>2</TableData>
              <TableData>Life is ...</TableData>
              <TableData>Unknown</TableData>
              <TableData>
                <Button
                  label="Detail"
                  onClick={() => history.push("/searchdetail")}
                />
              </TableData>
            </tr>
            <tr>
              <TableData>3</TableData>
              <TableData>Felmer last theorem</TableData>
              <TableData>Felmer</TableData>
              <TableData>
                <Button
                  label="Detail"
                  onClick={() => history.push("/searchdetail")}
                />
              </TableData>
            </tr>
            <tr>
              <TableData>4</TableData>
              <TableData>Wenn du in den Adgrund schaust</TableData>
              <TableData>Nietzsche</TableData>
              <TableData>
                <Button
                  label="Detail"
                  onClick={() => history.push("/searchdetail")}
                />
              </TableData>
            </tr>
          </tbody>
        </Table>
      </Panel>
    </div>
  );
}

export default SearchResult;
