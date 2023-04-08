import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({})
  const paramsDentist = useParams()

  const getDentist = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/' + paramsDentist.id)
    .then((response) => {
      return response.json()
    })
    setDentist(data)
  }

  useEffect(() => {
    getDentist()
  }, [])

  return (
    <div className='Detail'>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name  </th>
            <th>Email   </th>
            <th>Phone   </th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td> {dentist.name}    </td>
              <td> {dentist.email}   </td>
              <td> {dentist.phone}   </td>
              <td> {dentist.website} </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail