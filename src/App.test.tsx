import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Header from './components/header';
import Navbar from './components/Navbar';
import Home from './containers';
import TvShows from './containers/tvshows';
import Footer from './components/Footer';
import Movie from './containers/movie';
import ScrollToTop from './components/Scroll-To-Top';
import TvShow from './containers/tvshow';
import Person from './containers/person';
import Favourites from './containers/favourites';



function sum(a:number, b:number):number {
    return a + b;
}
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});



test('all components and dependencies are imported correctly', () => {
  render(
    <App>
      <div>
        <Header />
        <Navbar />
        <Home />
        <TvShows />
        <Footer />
        <Movie />
        <ScrollToTop />
        <TvShow />
        <Person />
        <Favourites />
      </div>
    </App>
  );

  expect(document.querySelector('.header')).toBeInTheDocument();
  expect(document.querySelector('.navbar')).toBeInTheDocument();
  expect(document.querySelector('.home')).toBeInTheDocument();
  expect(document.querySelector('.tvshows')).toBeInTheDocument();
  expect(document.querySelector('.footer')).toBeInTheDocument();
  expect(document.querySelector('.movie')).toBeInTheDocument();
  expect(document.querySelector('.scroll-to-top')).toBeInTheDocument();
  expect(document.querySelector('.tvshow')).toBeInTheDocument();
  expect(document.querySelector('.person')).toBeInTheDocument();
  expect(document.querySelector('.favourites')).toBeInTheDocument();
});

export {};

