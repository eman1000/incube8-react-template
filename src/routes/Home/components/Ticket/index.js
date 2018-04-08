import React from "react";

const styles = {
  ticket: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    minHeight: "7em",
    padding: "0.5em",
    margin: "0.5em",
    fontWeight: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor:"pointer"
  }
};

const Ticket = ({obj, updateTodo, index, history})=>{
  return(
    <div style={styles.ticket} onClick={()=>history.push(`/ticket/${obj.id}`, {...obj, index})}>
      {/* Ticket description */}
      <div>{obj.desc}</div>
      {/* Ticket actions [Done/Not Fix/Close]. Modify to display them properly */}
      <div>
        <button onClick={(ev)=>{ev.stopPropagation();updateTodo({index, status:"done"})}}>Done</button>
        <button onClick={(ev)=>{ev.stopPropagation();updateTodo({index, status:"todo"})}}>Not Fix</button>
        <button onClick={(ev)=>{ev.stopPropagation();updateTodo({index, status:"close"})}}>Close</button>
      </div>
    </div>
  ) 
}

export default Ticket;