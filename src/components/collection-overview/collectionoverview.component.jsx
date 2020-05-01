import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collectionoverview.styles.scss";
import CollectionPreview from "../previewcollection/collectionpreview.component";
import { selectShopCollections } from "../../redux/shop/shop.selector";
const CollectionOverView = ({ collections }) => {
  // console.log("O i am here why???");
  return (
    <div className="collections-overview">
      {" "}
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateToProps)(CollectionOverView);
