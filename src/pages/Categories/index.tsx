import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetFightGamesQuery,
  useGetSimuGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simuGames } = useGetSimuGamesQuery()

  if (actionGames && fightGames && rpgGames && sportGames && simuGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList games={simuGames} title="Simulação" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
