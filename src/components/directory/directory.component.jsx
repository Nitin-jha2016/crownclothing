import React from "react";
import { connect } from "react-redux";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {/* {this.state.sections.map(({ title, imageUrl, id, size }) => ( */}
      {sections.map(({ id, ...otherSectionProps }) => (
        // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
