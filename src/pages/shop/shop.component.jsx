import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionOverView from "../../components/collectionsoverview/collection.overview.component";

import { selectCollections } from "../../redux/shop/shop.selector";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionOverView />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(ShopPage);
