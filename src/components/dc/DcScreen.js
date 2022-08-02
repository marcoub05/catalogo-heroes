import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {

  return (
    <div>
      <h1>DcScreen</h1>
      <HeroList publisher="DC Comics"/>


    </div>
  )
}
