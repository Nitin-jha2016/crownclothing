import { createSelector } from "reselect";
// not reuquie below as now we convered shop data to object from array

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectStop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectStop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) =>
      // collections.find(
      //   (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      // )
      collections[collectionUrlParam]
  );
