import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTalent } from '../features/talents/talentSlice';

const TalentForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      skills: formData.skills.split(',').map((s) => s.trim()),
      experience: Number(formData.experience),
    };
    dispatch(addTalent(data));
    setFormData({ name: '', email: '', skills: '', experience: '' });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Add New Talent</h3>
      <div className="form-group">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="input-field" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="input-field" required />
        <input name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="input-field" />
        <input name="experience" type="number" value={formData.experience} onChange={handleChange} placeholder="Experience (years)" className="input-field" />
        <button type="submit" className="btn btn-success">Add Talent</button>
      </div>
    </form>
  );
};

export default TalentForm;
