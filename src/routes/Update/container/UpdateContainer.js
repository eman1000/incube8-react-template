//LIBRARIES
import { connect } from "react-redux";
//COMPONENTS
import Update from "../components/Update";

import {
  updateTodo
} from "../module";

const mapStateToProps = (state) => ({
});

const mapActionCreators = {
  updateTodo
};
export default connect(mapStateToProps, mapActionCreators)(Update);