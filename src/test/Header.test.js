import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import Header from "../components/Header"
import { BrowserRouter } from 'react-router-dom';

test('render Header', () => {
    const component = render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
    const element = screen.getAllByTestId('testid')
    expect(element).toHaveLength(1)
  })

  

  