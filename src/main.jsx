import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Nav from './Pages/components/Nav'
import Pokemon from './Pages/Pokemon'
import PokemonID, { getPokemonByName } from './Pages/PokemonID'
import SearchPage from './Pages/SearchPage'

import PokemonContext from './hook/usePokemonesContext'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />} errorElement={<div>404 error </div>}>
      <Route errorElement={<div>404 error </div>}>
        <Route index element={<Pokemon />} />
        <Route
          path="Pokemon/:pokid"
          element={<PokemonID />}
          loader={getPokemonByName}
        />
        <Route path="Search" element={<SearchPage />} />
      </Route>
    </Route>
  )
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokemonContext>
        <RouterProvider router={routes} />
      </PokemonContext>
    </QueryClientProvider>
  </React.StrictMode>
)
