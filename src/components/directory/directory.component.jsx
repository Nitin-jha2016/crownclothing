//this file carry all boxes of hats,jacket

import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySection } from "../../redux/directory/directorySelector";
import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {/* {this.state.sections.map(({ title, imageUrl, id, size }) => ( */}
      {sections.map(({ id, ...othersectionProps }) => (
        <MenuItem key={id} {...othersectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
