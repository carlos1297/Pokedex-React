import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Nav from './Pages/components/Nav'
import Pokemon from './Pages/Pokemon'
import PokemonID, { getPokemonByName } from './Pages/PokemonID'
import SearchPage from './Pages/SearchPage'

import PokemonContext from './hook/usePokemonesContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        index: true,
        element: <Pokemon />,
      },
      {
        path: "Pokemon/:pokid",
        element: <PokemonID />,
        loader: getPokemonByName,
      },
      {
        path: "Search",
        element: <SearchPage />,
      },

    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <PokemonContext>

      <RouterProvider router={router} />

    </PokemonContext>

  </React.StrictMode>,
)
