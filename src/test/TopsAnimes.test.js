import anime from "./anime"
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render } from '@testing-library/react';
import TopsAnimes from "../components/TopsAnimes";
import {shallow} from "enzyme"


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
        const wrapper = shallow(<TopsAnimes 
        topanime={topanime}
        key={anime.mal_id}
        scrolltop={scrolltop} 
        />);
        const mEvent = { preventDefault: jest.fn() };
        window.scrollTo = jest.fn();
        wrapper.find('button').simulate('click', mEvent);
        expect(mEvent.preventDefault).toBeCalled();
        expect(window.scrollTo).toBeCalledWith(0, 0);
    });
});