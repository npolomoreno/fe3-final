import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [ dentist, setDentist ] = useState([])
  const { context } = useContext(ContextGlobal)
  const { theme } = context

  const getDentist = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json()
    })
    setDentist(data)
  }

  useEffect(() => {
    getDentist()
  }, [])

  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.map((dent) => {
          return (<Card className="card-grid" key={dent.id} name={dent.name} id={dent.id} username={dent.username}/>)
        })}
      </div>
    </main>
  )
}

export default Home;
