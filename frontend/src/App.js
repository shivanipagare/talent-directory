import React, { useState } from 'react';
import TalentList from './components/TalentList';
import TalentForm from './components/TalentForm';
import SkillFilter from './components/SkillFilter';
import './App.css';

function App() {
  const [filterSkill, setFilterSkill] = useState('');

  return (
    <div className="app-container">
      <h1 className="main-title">Talent Directory</h1>
      <SkillFilter onFilter={setFilterSkill} />
      <TalentForm />
      <TalentList skill={filterSkill} />
    </div>
  );
}

export default App;
