import anime from "./anime"
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render } from '@testing-library/react';
import TopsAnimes from "../components/TopsAnimes";
import userEvent from '@testing-library/user-event'


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
    expect(scrolltop).toBeDefined()
})

test('render link', () => {
    const topanime =[];
    const scrolltop = jest.fn()
    const component = render(<TopsAnimes 
        topanime={topanime}
        key={anime.mal_id}
        scrolltop={scrolltop} 
        />)
    const link = component.container.querySelector('Link')
    expect.arrayContaining(topanime)
})

describe('SomeComponent', () => {
    test('should handle click', () => {
        const topanime =[];
        const scrolltop = jest.fn()
        const wrapper = render(<TopsAnimes 
        topanime={topanime}
        key={anime.mal_id}
        />);
        const mEvent = { preventDefault: jest.fn() };
        window.scrollTo = jest.fn();
        userEvent.click(wrapper.container.querySelector('nav'))
        expect(window.scrollTo).toBeCalledWith(0, 0);
    });
});