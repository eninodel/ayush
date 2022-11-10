import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageHome } from './PageHome';
import { PageFirst } from './PageFirst';
import { PageSecond } from './PageSecond';
import { PageThird } from './PageThird';
import { PageFourth } from './PageFourth';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/first' element={<PageFirst />} />
          <Route path='/second' element={<PageSecond />} />
          <Route path='/third' element={<PageThird />} />
          <Route path='/fourth' element={<PageFourth />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
