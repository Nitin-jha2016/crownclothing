import React from "react";

import { Route } from "react-router-dom";

import CollectionOverView from "../../components/collectionsoverview/collection.overview.component";
import CollectionPage from "../collection/collection.component";

//match location and history from route from app.js match.params.categoryId  hats,etc
const ShopPage = ({ match }) => {
  console.log("Inside shop component ", match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
