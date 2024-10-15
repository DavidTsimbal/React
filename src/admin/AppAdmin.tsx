import { createElement, useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Table from "./components/Table.tsx"


function App() {
  
  const [data, setData] = useState();
  const [index, setIndex] = useState([]);
  const [tables, setTables] = useState(['']);
  const [selectedTable, setSelectedTable] = useState('');
  const [filter, setFilter] = useState('');
  
  const [isLoaded, setIsLoaded] = useState(false);

  async function LoadHandler(){
    if(!isLoaded){
      const LoadRequest = new Request("https://veyer-conf.ru/admin-info.php", { method: 'GET', });
      
      const response = await fetch(LoadRequest);
      const result = await response.json();
      console.log("Success:", result);
    
      setData(result);
      setTables(Object.keys(result));
      setSelectedTable(Object.keys(result)[0]);

      console.log("Tables:", tables);
      console.log("Selected table:", selectedTable);
      console.log(data);
      
      setIsLoaded(true);
    }
  }

  function searchHandle(event){
    setFilter(event.target.value);
  }

  function selectTable(event){
    setSelectedTable(event.target.value);
  }

  function fieldChangeHandle(event){
    
  }
  


  return (
  
    <div onLoad={LoadHandler}>
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

            <p>{selectedTable}</p>
          </div>

          <div></div>

          <div>
            <label htmlFor="search">Поиск:</label>
            <br />
            <input type="text" id='search' onChange={(e) => searchHandle(e)} placeholder='ПОИСК'/>
          </div>

          <div>
            {tables.map(tableName => (
              <div>
                <input type="radio" id={tableName} onChange={(e) => selectTable(e)} name="table" value={tableName}/>
                <label htmlFor={tableName}>{tableName}</label>
              </div>
            ))}
          </div>
          
          <Table data={data} selectedTable={selectedTable} filter={filter}></Table>

      </div>
    </main>

      <Footer></Footer>
    </div>
    
  );
}


export default App;