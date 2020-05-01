import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/previewcollection/collectionpreview.component";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
