import React, { useEffect, useState } from 'react';

const SearchComponent = () => {
  //setear los hooks de useState (que pusimos en linea 1)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  // function traer datos de la api

  const urlFakeUsersApi = 'https://jsonplaceholder.typicode.com/users' // URL de la API externa que quiero usar
  const showData = async () => {
    const response = await fetch(urlFakeUsersApi)
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }
  //metodo de filtro 1

  let results = []
  if (!search) {
    results = users
  } else {
    results = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }


  //metodo de filtro 2
  /*const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase().includes(search.toLocaleLowerCase())))*/
  //function de busqueda

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    showData() // Ya desde aquí se puede mirar en la consola que estamos trayendo los datos en la consola de la página
  }, [])

  //renderizar la vista
  return (
    // en React no se usa "class" sino "className"
    <div>
      <input value={search} onChange={searcher} type="text" placeholder='Search' className="searchPlaceholder"></input>
      <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>USER</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SearchComponent
