//LIBRARIES
import React from "react";
import Ticket from "./Ticket";

const styles = {
  container: {
    display: "flex"
  },
  box: {
    flex: "0 1 33%",
    textAlign: "center",
    borderRight: "1px solid #ccc",
    label: {
      fontWeight: 600
    }
  }
};

class Home extends React.Component{
  render(){
    let inputBox;
    return (
      <div>
        <input 
          type="text"
          style={{ borderRadius: "3px" }}
          ref={node => {
            inputBox = node;
          }}
        />
        <button style={{ cursor: "pointer" }} onClick={()=>{this.props.addTodo(inputBox.value);inputBox.value = '';}}>
          ADD
        </button>
        <br />
        <br />
        <div style={styles.container}>
          <div style={styles.box}>
            <label style={styles.box.label}>IN-PROGRESS</label>
            {/** show Todo tickets below */}
            {
              this.props.tickets.map((obj, index)=>{
                return(
                  <div key={index}>
                    { obj.status === "todo" &&
                      <Ticket 
                        obj={obj}
                        updateTodo={this.props.updateTodo}
                        key={index}
                        index={index}
                        history={this.props.history}
                      />
                    }
                  </div>
                );
              })
            }
          </div> 
          <div style={styles.box}>
            <label style={styles.box.label}>DONE</label>
            {/** show Done tickets below */}
            {
              this.props.tickets.map((obj, index)=>{
                return(
                  <div key={index}>
                    { obj.status === "done" &&
                      <Ticket 
                        obj={obj}
                        updateTodo={this.props.updateTodo}
                        key={index}
                        index={index}
                        history={this.props.history}
                      />
                    }
                  </div>
                );
              })
            }
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>CLOSE</label>
            {/** show Close tickets below */}
            {
              this.props.tickets.map((obj, index)=>{
                return(
                  <div key={index}>
                    { obj.status === "close" &&
                      <Ticket 
                        obj={obj}
                        updateTodo={this.props.updateTodo}
                        key={index}
                        index={index}
                        history={this.props.history}
                      />
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default Home;