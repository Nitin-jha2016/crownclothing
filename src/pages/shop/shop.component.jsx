import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverView from "../../components/collection-overview/collectionoverview.component";
const ShopPage = ({ match }) => {
  // console.log("SHOP PAGE PATH", match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
