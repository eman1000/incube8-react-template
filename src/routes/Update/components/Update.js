//LIBRARIES
import React from "react";

const styles = {
  container: {
    width: "400px",
    margin: "0px auto",
    border: "1px solid rgb(204, 204, 204)",
    borderRadius: "3px",
    padding: "0.5em",
    innerDiv:{
      margin: "0.5em 0px"
    }
  },
  label:{
    fontSize: "13px",
    marginRight: "0.5em",
    minWidth: "100px",
    display: "inline-block"
  },
  input:{
    margin: "0px 0.5em",
    minWidth: "100px"
  },
  select:{
    margin:" 0px 0.5em",
    minWidth: "120px"
  },
  btn:{
    cursor: "pointer",
    fontSize: "14px",
    margin: "1em 0px"
  }
};

class Update extends React.Component{
  render(){
    let descBox,
        statusSelect;
    const { state } = this.props.history.location
    return (
      <div>
        <div style={styles.container}>
          <form onSubmit={
            (ev)=>{ev.preventDefault();
            this.props.updateTodo({
              index:state.index,
              desc:descBox.value, 
              status:statusSelect.value
            }
            );
            this.props.history.push("/");
          }}>
            <h2>Update Ticket</h2>
            <div>
              <label style={styles.label}>Description</label>
              <input
                name="desc"
                defaultValue={state.desc}
                style={styles.input}
                ref={node => {
                  descBox = node;
                }}
                required
              />
            </div>
            <div style={styles.innerDiv}>
              <label style={styles.label}>Status</label>
              <select 
                defaultValue={state.status}
                name="status"
                style={styles.select}
                ref={node => {
                  statusSelect = node;
                }}
                required
              >
                <option value="">🚀</option>
                <option value="todo">Todo</option>
                <option value="done">Done</option>
                <option value="close">Close</option>
              </select>
            </div>
            <div>
              <button style={styles.btn} type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Update;