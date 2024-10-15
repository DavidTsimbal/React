import React from "react";

function Table(props){
    if(props.data){
      return (
        <table>
        <thead>
                {Object.keys(props.data[props.selectedTable][0]).map(key => (
                  <th>{key}</th>
                ))}
        </thead>
        <tbody>
                {props.data[props.selectedTable].filter(row => {

                  let found: boolean = false;

                  Object.keys(row).forEach(key => {

                    let value: string = row[key];

                    if((value != null) && value.toString().toLowerCase().includes(props.filter.toLowerCase())){
                      found = true;
                    } 

                  });

                  if(found) return row;

                }).map(row => (

                  <tr>
                    {Object.keys(row).map(key => (
                      <td><input className='table-field' type="text" name={row[key]} id={row[key]} value={row[key]} /></td>
                    ))}
                  </tr>

                ))}
        </tbody>
        </table>
      );
    }
  }

export default Table;