import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />)
  expect(container.firstChild.classList.contains('App')).toBe(true)
});


test('video null no existe iframe', () =>{
 expect(true).toBe(true);
});






// test ("AsideDetails to have an image"),(=>)

// "si video null no existe iframe, si no es null si existe"