import { useState } from 'react';
import React from 'react';
import { Component } from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Table from "../components/Table.tsx";
import SideMenu from "../components/SideMenu.tsx";

export default class App extends Component{
  state = {
    data: {},
    columns: {},
    index: {},
    tables: [''],
    selectedTable: '',
    filter: ''
  };

  async componentDidMount() {
    fetch("https://veyer-conf.ru/admin-info.php")
    .then(response => response.json())
    .then(result => {

      console.log("Success:", result);
  
      let columnNames = {};
      Object.keys(result).forEach(table => {
        columnNames[table] = Object.keys(result[table][0]);
      })
    
      this.setState({data: result});
      this.setState({columns: columnNames});
      this.setState({tables: Object.keys(result)});
      this.setState({selectedTable: Object.keys(result)[0]});
  
      console.log("Tables:", this.state.tables);
      console.log("Columns:", this.state.columns);
      console.log("Selected table:", this.state.selectedTable);
      console.log(this.state.data);

    });

      
  }


  searchHandle = (event) => {
    this.setState({filter: event.target.value});
  }



  selectTable = (event) => {
    this.setState({selectedTable: event.target.value});
  }



  fieldChangeHandler = (event, table, rowId, fieldId) => {
    const field = event.target.value;
    
    let newData = this.state.data;
    
    newData[table][rowId][fieldId] = field;
    console.log(newData);
    
    this.setState({data: newData});
      
    let newIndex = this.state.index;
    // rowId = (rowId as unknown as number) + 1;
    
    if (!newIndex[table]){
      newIndex[table] = {};
      newIndex[table][rowId] = {};
      newIndex[table][rowId]['initial-values'] = {};
      newIndex[table][rowId]['values'] = {};
  
      newIndex[table][rowId]['initial-values'][fieldId] = this.state.data[table][rowId][fieldId];
      newIndex[table][rowId]['values'][fieldId] = field;
      newIndex[table][rowId]['actions'] = ['update'];
    }
    else if(!newIndex[table][rowId]){
      newIndex[table][rowId] = {};
      newIndex[table][rowId]['initial-values'] = {};
      newIndex[table][rowId]['values'] = {};
  
      newIndex[table][rowId]['initial-values'][fieldId] = this.state.data[table][rowId][fieldId];
      newIndex[table][rowId]['values'][fieldId] = field;
      newIndex[table][rowId]['actions'] = ['update'];
    }
    else{
      newIndex[table][rowId]['values'][fieldId] = field;
      newIndex[table][rowId]['actions'].push('update');
    }
  
    console.log(newIndex);
    this.setState({index: newIndex});
  }



  deleteRow = (table, rowId) => {
    let newData = this.state.data;
    
    delete newData[table][rowId];
    console.log(newData[table]);
    
    this.setState({data: newData});


    let newIndex = this.state.index;
    // rowId = (rowId as unknown as number) + 1;
    
    if (!newIndex[table]){
      newIndex[table] = {};
      newIndex[table][rowId] = {};

      newIndex[table][rowId]['actions'] = ['delete'];
    }
    else if(!newIndex[table][rowId]){
      newIndex[table][rowId] = {};
      newIndex[table][rowId]['actions'] = ['delete'];
    }
    else{
      newIndex[table][rowId]['actions'].push('delete');
    }

    console.log(newIndex);

    this.setState({index: newIndex});
  } 



  addRow = (table) => {
    let newData = this.state.data;
    let newRowId;
    
    newData[table].keys().forEach(key => (newRowId = key));
    newRowId = (newRowId as unknown as number) + 1;

    newData[table][newRowId] = {};
    Object.keys(this.state.columns[table]).forEach(column => (newData[table][newRowId][column] = ''));

    this.setState({data: newData});


    let newIndex = this.state.index;
    
    if (!newIndex[table]){
      newIndex[table] = {};
      newIndex[table][newRowId] = {};
      newIndex[table][newRowId]['initial-values'] = {};
      newIndex[table][newRowId]['values'] = {};

      Object.keys(this.state.columns[table]).forEach(column => (newIndex[table][newRowId]['initial-values'][column] = ''));
      Object.keys(this.state.columns[table]).forEach(column => (newIndex[table][newRowId]['values'][column] = ''));
      newIndex[table][newRowId]['actions'] = ['add'];
    }
    else if(!newIndex[table][newRowId]){
      newIndex[table][newRowId] = {};
      newIndex[table][newRowId]['initial-values'] = {};
      newIndex[table][newRowId]['values'] = {};

      Object.keys(this.state.columns[table]).forEach(column => (newIndex[table][newRowId]['initial-values'][column] = ''));
      Object.keys(this.state.columns[table]).forEach(column => (newIndex[table][newRowId]['values'][column] = ''));
      newIndex[table][newRowId]['actions'] = ['add'];
    }
    else{
      Object.keys(this.state.columns[table]).forEach(column => (newIndex[table][newRowId]['values'][column] = ''));
      newIndex[table][newRowId]['actions'].push('add');
    }

    console.log(newIndex);
    this.setState({index: newIndex});
  }



  render(): React.ReactNode {
    return (
  
      <div>
        <Header></Header>
  
        <main className="tickets">
        <div className="paddings admin-profile-grid">
  
            <div></div>
  
            <div>
              <div className='header-grid'>
                <h1>Панель администратора</h1>
                <button id='save-button'>СОХРАНИТЬ</button>
              </div>
  
              <hr id="breakline2"></hr>
  
              <p>{this.state.selectedTable}</p>
            </div>
  
            <div></div>
  
            <div>
              <label htmlFor="search">Поиск:</label>
              <br />
              <input type="text" id='search' onChange={(e) => this.searchHandle(e)} placeholder='ПОИСК'/>
            </div>
  
            <SideMenu tables={this.state.tables} selectTable={this.selectTable}></SideMenu>
            
            <div>
              <Table data={this.state.data} fieldChangeHandler={this.fieldChangeHandler} deleteRow={this.deleteRow} columns={this.state.columns} selectedTable={this.state.selectedTable} filter={this.state.filter}></Table>
              <button id='add-row-button' onClick={(e) => this.addRow(this.state.selectedTable)}>ДОБАВИТЬ</button>
            </div>
  
        </div>
      </main>
  
        <Footer></Footer>
      </div>
      
    );
  }
}

// function App() {
  
//   const [data, setData] = useState({});
//   const [columns, setColumns] = useState({});
//   const [index, setIndex] = useState({});
//   const [tables, setTables] = useState(['']);
//   const [selectedTable, setSelectedTable] = useState('');
//   const [filter, setFilter] = useState('');
  
//   const [isLoaded, setIsLoaded] = useState(false);



//   async function LoadHandler(){
//     if(!isLoaded){
//       const LoadRequest = new Request("https://veyer-conf.ru/admin-info.php", { method: 'GET', });
      
//       const response = await fetch(LoadRequest);
//       const result = await response.json();
//       console.log("Success:", result);

//       let columnNames = {};
//       Object.keys(result).forEach(table => {
//         columnNames[table] = Object.keys(result[table][0]);
//       })
    
//       setData(result);
//       setColumns(columnNames);
//       setTables(Object.keys(result));
//       setSelectedTable(Object.keys(result)[0]);

//       console.log("Tables:", tables);
//       console.log("Columns:", columns);
//       console.log("Selected table:", selectedTable);
//       console.log(data);
      
//       setIsLoaded(true);
//     }
//   }



//   function searchHandle(event){
//     setFilter(event.target.value);
//   }



//   function selectTable(event){
//     setSelectedTable(event.target.value);
//   }



//   function fieldChangeHandler(event, table, rowId, fieldId){
//     const field = event.target.value;
    
//     let newData = data;
    
//     newData[table][rowId][fieldId] = field;
//     console.log(newData);
    
//     setData(newData);
      
//     let newIndex = index;
//     rowId = (rowId as unknown as number) + 1;
    
//     if ((newIndex[table] === null) || (newIndex[table] === undefined)){
//       newIndex[table] = {};
//       newIndex[table][rowId] = {};
//       newIndex[table][rowId]['initial-values'] = {};
//       newIndex[table][rowId]['values'] = {};
  
//       newIndex[table][rowId]['initial-values'][fieldId] = data[table][rowId][fieldId];
//       newIndex[table][rowId]['values'][fieldId] = field;
//       newIndex[table][rowId]['actions'] = ['update'];
//     }
//     else if((newIndex[table][rowId] === null) || (newIndex[table][rowId] === undefined)){
//       newIndex[table][rowId] = {};
//       newIndex[table][rowId]['initial-values'] = {};
//       newIndex[table][rowId]['values'] = {};
  
//       newIndex[table][rowId]['initial-values'][fieldId] = data[table][rowId][fieldId];
//       newIndex[table][rowId]['values'][fieldId] = field;
//       newIndex[table][rowId]['actions'] = ['update'];
//     }
//     else{
//       newIndex[table][rowId]['values'][fieldId] = field;
//       newIndex[table][rowId]['actions'].push('update');
//     }
  
//     console.log(newIndex);
//     setIndex(newIndex);
//   }



//   function deleteRow(table, rowId){
//     let newData = data;
    
//     delete newData[table][rowId];
//     console.log(newData[table]);
    
//     setData(newData);


//     let newIndex = index;
//     rowId = (rowId as unknown as number) + 1;
    
//     if ((newIndex[table] === null) || (newIndex[table] === undefined)){
//       newIndex[table] = {};
//       newIndex[table][rowId] = {};

//       newIndex[table][rowId]['actions'] = ['delete'];
//     }
//     else if((newIndex[table][rowId] === null) || (newIndex[table][rowId] === undefined)){
//       newIndex[table][rowId] = {};
//       newIndex[table][rowId]['actions'] = ['delete'];
//     }
//     else{
//       newIndex[table][rowId]['actions'].push('delete');
//     }

//     console.log(newIndex);

//     setIndex(newIndex);
//   } 



//   function addRow(table){
//     let newData = data;
//     let newRowId;
    
//     newData[table].keys().forEach(key => (newRowId = key));
//     newRowId = (newRowId as unknown as number) + 1;

//     newData[table][newRowId] = {};
//     Object.keys(columns[table]).forEach(column => (newData[table][newRowId][column] = ''));

//     setData(newData);


//     let newIndex = index;
    
//     if ((newIndex[table] === null) || (newIndex[table] === undefined)){
//       newIndex[table] = {};
//       newIndex[table][newRowId] = {};
//       newIndex[table][newRowId]['initial-values'] = {};
//       newIndex[table][newRowId]['values'] = {};

//       Object.keys(columns[table]).forEach(column => (newIndex[table][newRowId]['initial-values'][column] = ''));
//       Object.keys(columns[table]).forEach(column => (newIndex[table][newRowId]['values'][column] = ''));
//       newIndex[table][newRowId]['actions'] = ['add'];
//     }
//     else if((newIndex[table][newRowId] === null) || (newIndex[table][newRowId] === undefined)){
//       newIndex[table][newRowId] = {};
//       newIndex[table][newRowId]['initial-values'] = {};
//       newIndex[table][newRowId]['values'] = {};

//       Object.keys(columns[table]).forEach(column => (newIndex[table][newRowId]['initial-values'][column] = ''));
//       Object.keys(columns[table]).forEach(column => (newIndex[table][newRowId]['values'][column] = ''));
//       newIndex[table][newRowId]['actions'] = ['add'];
//     }
//     else{
//       Object.keys(columns[table]).forEach(column => (newIndex[table][newRowId]['values'][column] = ''));
//       newIndex[table][newRowId]['actions'].push('add');
//     }

//     console.log(newIndex);
//     setIndex(newIndex);
//   }

  


//   return (
  
//     <div onLoad={LoadHandler}>
//       <Header></Header>

//       <main className="tickets">
//       <div className="paddings admin-profile-grid">

//           <div></div>

//           <div>
//             <div className='header-grid'>
//               <h1>Панель администратора</h1>
//               <button id='save-button'>СОХРАНИТЬ</button>
//             </div>

//             <hr id="breakline2"></hr>

//             <p>{selectedTable}</p>
//           </div>

//           <div></div>

//           <div>
//             <label htmlFor="search">Поиск:</label>
//             <br />
//             <input type="text" id='search' onChange={(e) => searchHandle(e)} placeholder='ПОИСК'/>
//           </div>

//           <SideMenu tables={tables} selectTable={selectTable}></SideMenu>
          
//           <div>
//             <Table data={data} fieldChangeHandler={fieldChangeHandler} deleteRow={deleteRow} columns={columns} selectedTable={selectedTable} filter={filter}></Table>
//             <button id='add-row-button' onClick={(e) => addRow(selectedTable)}>ДОБАВИТЬ</button>
//           </div>

//       </div>
//     </main>

//       <Footer></Footer>
//     </div>
    
//   );
// }


// export default App;