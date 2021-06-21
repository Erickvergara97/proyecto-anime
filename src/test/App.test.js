import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import App from '../App';





test('render div', () => {
  const component = render(<App/>)
  const div = component.container.querySelectorAll('div')
  expect(div).toHaveLength(3)
})

test('render Header', () => {
  const component = render(<App/>)
  const Header = component.container.querySelectorAll('Header')
  expect(Header).toHaveLength(1)
})

test('render Main', () => {
  const component = render(<App/>)
  const Main = component.container.querySelectorAll('Main')
  expect(Main).toHaveLength(1)
})

test('render AnimeDetails', () => {
  const component = render(<App/>)
  const AnimeDetails = component.container.querySelectorAll('AnimeDetails')
  expect(AnimeDetails).toHaveLength(0)
})

test('render TopsAnimes', () => {
  const component = render(<App/>)
  const TopsAnimes = component.container.querySelectorAll('TopsAnimes')
  expect(TopsAnimes).toHaveLength(0)
})

test('render Route', () => {
  const component = render(<App/>)
  const Route = component.container.querySelectorAll('Route')
  expect(Route).toHaveLength(0)
})

test('render BrowserRouter', () => {
  const component = render(<App/>)
  const BrowserRouter = component.container.querySelectorAll('BrowserRouter')
  expect(BrowserRouter).toHaveLength(0)
})

test('render BrowserRouter', () => {
  const component = render(<App/>)
  const BrowserRouter = component.container.querySelector('BrowserRouter')
  console.log(prettyDOM(BrowserRouter))
})










// test('renders learn react link', () => {
//   const { container } = render(<App />)
//   expect(container.firstChild.classList.contains('App')).toBe(true)
// });
// test('renders learn react link 2', () => {
//   const { container } = render(<App />)
//   expect(container.firstChild).toHaveClass('App')
// });
// test('renders learn react link 2', () => {
//   const { container } = render(<App />)
//   expect(container).toHaveClass('App')
// });

// test('should ', () => {
//   data = getByTestId('flexcont')
//   expect(data).toHaveClass('flexContent')
// })




// test('fetchAnime query to call setAnimeList', () =>{
//   let llamado = fetchAnime(query);
//   expect(llamado.setAnimelist()).toHaveBeenCalled();
// });

// test('video null no existe iframe', () =>{
// });



// test ("AsideDetails to have an image"),(=>)

// "si video null no existe iframe, si no es null si existe"