//LIBRARIES
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//COMPONENTS
import Home from "../components/Home";

import {
  addTodo,
  updateTodo
} from "../module";

const mapStateToProps = (state) => ({
  tickets:state.home.tickets || []
});

const mapActionCreators = {
  addTodo,
  updateTodo
};
export default withRouter(connect(mapStateToProps, mapActionCreators)(Home));