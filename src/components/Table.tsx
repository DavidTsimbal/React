import React from "react";
import getKeyByValue from "../helpers/getKeyByValue.tsx";

function Table(props){
    if(props.data){
      return (
        <div className="scroll">
          <table>
            <thead>
              {props.columns[props.selectedTable]?.map(key => (
                <th key={key}>{key}</th>
              ))}
            </thead>
            <tbody>
              {props.data[props.selectedTable]?.filter(row => {

                let found: boolean = false;

                Object.keys(row).forEach(key => {

                  let value: string = row[key];

                  if ((value != null) && value.toString().toLowerCase().includes(props.filter.toLowerCase())) {
                    found = true;
                  }

                });

                if (found) return row;

              }).map(row => {

                if (row) {

                  const rowNumber = getKeyByValue(props.data[props.selectedTable], row);

                  return (

                    <tr key={rowNumber}>
                      {Object.keys(row)?.map(key => (
                        <td>
                          <input onChange={(e) => props.fieldChangeHandler(e, props.selectedTable, rowNumber, key)} className='table-field' type="text" name={key} id={key + rowNumber} key={key + rowNumber} defaultValue={row[key]} readOnly={props.readonly}/>
                        </td>
                      ))}
                      <td key={'del' + rowNumber} style={{ textAlign: "center" }}>
                        <button className="del-row-button" onClick={e => props.deleteRow(props.selectedTable, rowNumber)}>X</button>
                      </td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }

export default Table;