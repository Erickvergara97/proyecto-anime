import anime from "./anime"
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import TopsAnimes from "../components/TopsAnimes";
import { BrowserRouter } from 'react-router-dom';

const dispatchMock = jest.fn();


test('render TopsAnimes', () => {
    const topanime =[];
    const scrolltop = jest.fn()
    const component = render(
    <TopsAnimes 
    topanime={topanime}
    key={anime.mal_id}
    scrolltop={scrolltop} 
    />)
    expect.arrayContaining(topanime)
    component.container.querySelectorAll('nav')
    
})