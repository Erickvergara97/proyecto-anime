import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import Main from "../components/Main"

test('render Main', () => {
    const searchInput= jest.fn();
    const search = "";
    const animelist = [];
    const setSearch = jest.fn();
    const component = render(
       <Main
       searchInput={searchInput} 
       search={search} 
       animelist={animelist} 
       setSearch={setSearch}
       />
   )

   expect(search).toBe("")
   
   
})

test('Contain AnimePic ', () => {
    const searchInput= jest.fn();
    const search = "";
    const animelist = [];
    const setSearch = jest.fn();
    const component = render(
        <Main
        searchInput={searchInput} 
        search={search} 
        animelist={animelist} 
        setSearch={setSearch}
    />)

    const AnimePic = component.container.querySelector('AnimePic')
})
 
