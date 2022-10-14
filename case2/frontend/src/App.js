import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [contributors, setContributors] = useState([])

  const body = {
    "firstName": "Shikamaru",
    "lastName": "Nara",
    "participation": 4
  }

  const getContributors = () => {
    axios.post('http://localhost:3003/contributors', body)
      .then((response) => {
        setContributors(response.data.contributorsDb)
        console.log(response.data.contributorsDb);
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(getContributors, [])

  console.log(`Contributors: ${contributors}`);

  return (
    <div>
      <input type="text" /><input type="text" /><input type="number" />
      <button onClick={getContributors} >Send</button>

      <h1>Data</h1>

      <p>Commodo laboris exercitation excepteur excepteur duis veniam minim consequat exercitation aliquip excepteur et pariatur.</p>
      {/* 
      {
        <table>
          <tr>
            <th></th>
            <th>First name</th>
            <th>Last name</th>
            <th>Participation</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Minato</td>
            <td>Namikazi</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Naruto</td>
            <td>Uzumaki</td>
            <td>30%</td>
          </tr>
        </table>
      } */}
      {/* 
      {
        contributors.map((contributor) => {
          return (
            <li key={contributor.key}>
              {contributor.lastName}
            </li>
          )
        })
      } */}

    </div>
  )

}

export default App;
