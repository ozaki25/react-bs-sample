import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TopPage from "./components/TopPage";
import SearchPage from "./components/SearchPage";
import SearchResult from "./components/SearchResult";
import SearchDetail from "./components/SearchDetail";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={TopPage} exact />
        <Route path="/searchpage" component={SearchPage} exact />
        <Route path="/searchresult" component={SearchResult} exact />
        <Route path="/searchdetail" component={SearchDetail} exact />
      </div>
    </BrowserRouter>
  );
}

export default Router;
