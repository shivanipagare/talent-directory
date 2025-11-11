import React, { useState } from 'react';

const SkillFilter = ({ onFilter }) => {
  const [skill, setSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(skill);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Filter by Skill</h3>
      <div className="form-group">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="e.g., React, Node.js"
          className="input-field"
        />
        <button type="submit" className="btn btn-primary">Filter</button>
      </div>
    </form>
  );
};

export default SkillFilter;
