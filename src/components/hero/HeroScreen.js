import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const heroImages = require.context('../../assets/heroes',true);

export const HeroScreen = () => {

  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const imgPath = `/assets/${hero.id}.jpg`;

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/" />
  }

  const handleReturn = () => {
    navigate(-1);
  }

  
  return (
    <div className='row mt-5'>
      <div className='col-4'>

        <img src={heroImages(`./${hero.id}.jpg`)} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego:</b>{hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b>{hero.publisher}</li>
          <li className='list-group-item'><b>First appearance:</b>{hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
