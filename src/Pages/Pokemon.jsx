import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroller'
import '../App.css'
import { queryPokemonInfintio } from '../hook/useQueryPokemonInfinite.jsx'
import { Card2 } from './components/Card2'
import Loaders from './components/Loaders.jsx'

function Pokemon() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery(['pokemon'], queryPokemonInfintio, {
      getNextPageParam: (lastPage) => lastPage.nextOffset,
    })

  if (isLoading || !data) {
    return <Loaders />
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
    >
      <Card2 poke20={data.pages} />
      <div className="container-btn-load-more">
        {isFetchingNextPage && (
          <span className="btn-load-more">Cargando más Pokémones...</span>
        )}
      </div>
    </InfiniteScroll>
  )
}

export default Pokemon
