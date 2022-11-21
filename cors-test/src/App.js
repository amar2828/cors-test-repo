import React, {useState} from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [result, setResult] = useState([]);
  const fetchApi=()=>{
    axios.get('http://13.233.141.145/api/VDigiAPI/GetDTRTransaction?usertype=user1').then((response)=>{
      const data = response.data.responseData;
      console.log(data);
      setResult(data);
    })
  }

  return (

    <div  className='container'>
      <button onClick={fetchApi}>
        FETCH API
      </button>
      <div className='table-details'>
        <table className="table table-bordered table-hover">
              <thead>
                  <tr>
                      <th scope="col">S. No</th>
                      <th scope="col">Client ID</th>
                      <th scope="col">Fund ID</th>
                      <th scope="col">Class</th>
                      <th scope="col">Name</th>
                      <th scope="col">Amount</th>
                  </tr>
              </thead>
              <tbody>
                  {result.map((tableData, index)=>
                      <tr>
                          <td>{index+1}</td>
                          <td>{tableData.client_id}</td>
                          <td>{tableData.fund_id}</td>
                          <td>{tableData.class_id}</td>
                          <td>{String(tableData.firstname)}</td>
                          <td>{String(tableData.amount)}</td>
                      </tr>
                  )}
              </tbody>
        </table>
      </div>
      
    </div>
    
  )
}

export default App