import React from "react";

function Table(props){
    if(props.tables){
      return (
        <div>
          {props.tables.map(tableName => (
            <div>
              <input type="radio" id={tableName} onChange={(e) => props.selectTable(e)} name="table" value={tableName} />
              <label htmlFor={tableName}>{tableName}</label>
            </div>
          ))}
        </div>
      );
    }
  }

export default Table;