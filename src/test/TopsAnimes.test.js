import anime from "./anime"
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render } from '@testing-library/react';
import TopsAnimes from "../components/TopsAnimes";


const dispatchMock = jest.fn();


test('render TopsAnimes', () => {
    const topanime =[];
    const scrolltop = jest.fn(
        window.scrollTo(0,0)
    )
    const component = render(
    <TopsAnimes 
    topanime={topanime}
    key={anime.mal_id}
    scrolltop={scrolltop} 
    />)
    expect.arrayContaining(topanime)
    component.container.querySelectorAll('nav')
    expect(scrolltop).toBeDefined()
})

test('render link', () => {
    const topanime =[];
    const scrolltop = jest.fn(
        window.scrollTo(0,0)
    )
    const component = render(<TopsAnimes 
        topanime={topanime}
        key={anime.mal_id}
        scrolltop={scrolltop} 
        />)
    const link = component.container.querySelector('Link')
  })