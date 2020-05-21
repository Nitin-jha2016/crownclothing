import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./collection.overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

const CollectionOverView = ({ collections }) => {
  console.log("collections overview >>>>>>", collections);
  // console.log("collection overview");
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverView);
