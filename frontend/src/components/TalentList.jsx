import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTalents } from '../features/talents/talentSlice';

const TalentList = ({ skill }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.talents);

  useEffect(() => {
    dispatch(fetchTalents(skill));
  }, [dispatch, skill]);

  if (loading) return <p className="loading">Loading talents...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="card">
      <h2>Talent Directory</h2>

      {items.length === 0 ? (
        <p>No talents found.</p>
      ) : (
        <div className="table-container">
          <table className="talent-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Skills</th>
                <th>Experience (yrs)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((t, index) => (
                <tr key={t._id}>
                  <td>{index + 1}</td>
                  <td>{t.name}</td>
                  <td className="email">{t.email}</td>
                  <td>{t.skills.join(', ')}</td>
                  <td>{t.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TalentList;
