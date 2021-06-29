import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import PlanetsProvider from './Provider/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <Filters />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
