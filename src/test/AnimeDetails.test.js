import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import AnimeDetails from '../components/AnimeDetails';
import { BrowserRouter, useParams } from 'react-router-dom';
import anime from "./anime"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      id: 1
    }),
    useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
  }));


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

