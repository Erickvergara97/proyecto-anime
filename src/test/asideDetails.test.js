import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render } from '@testing-library/react';
import AsideDetails from '../AnimeDetailsComponents/asideDetails';



test('render elements', () => {
    const animeIndex = [];
    const animeGenre = [];
    const setAnimeIndex = jest.fn();
    const setAnimeGenre = jest.fn();
    const component = render(
    <AsideDetails
    animeIndex={animeIndex}
    animeGenre={animeGenre}/>)
    const ul = component.container.querySelectorAll('ul')
    expect(ul).toHaveLength(4)

    const li = component.container.querySelectorAll('li')
    expect(li).toHaveLength(3)

    const aside = component.container.querySelectorAll('aside')
    expect(aside).toHaveLength(1)
})

test('render elements', () => {
    const animeIndex = [];
    const animeGenre = [];
    const setAnimeIndex = jest.fn();
    const setAnimeGenre = jest.fn();
    const component = render(
    <AsideDetails
    animeIndex={animeIndex}
    animeGenre={animeGenre}/>)
    expect.arrayContaining(animeGenre)
})

