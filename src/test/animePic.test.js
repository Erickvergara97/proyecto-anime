import anime from "./anime"
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import AnimePic from "../components/AnimePic";
import { BrowserRouter } from 'react-router-dom';

test('render Main', () => { 

    const component = render(
        <BrowserRouter>
            <AnimePic
                key={anime.mal_id}
                anime={anime}
            /> 
        </BrowserRouter>
   )
   const element = component.getByText(anime.title)
 })
