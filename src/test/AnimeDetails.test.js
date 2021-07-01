import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render } from '@testing-library/react';
import AnimeDetails from '../components/AnimeDetails';
import { BrowserRouter } from 'react-router-dom';



test('render Main', () => {
  const animeGenre = [];
  const animeIndex = [];
  const GetAnimeDetails = jest.fn();
  const hideVideo= jest.fn();
  const setInfo = jest.fn()
  const component = render(

      <BrowserRouter>
          <AnimeDetails
          animeGenre={animeGenre} 
          animeIndex={animeIndex} 
          GetAnimeDetails={GetAnimeDetails} 
          hideVideo={hideVideo}
          />
      </BrowserRouter>
  )

  expect.arrayContaining(animeGenre)
  expect.arrayContaining(animeIndex)
  
})

