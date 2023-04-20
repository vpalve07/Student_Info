import React, { useState } from 'react';

function StudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [studentList, setStudentList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = { firstName, lastName, age, rollNumber };
    setStudentList([...studentList, student]);
    setFirstName('');
    setLastName('');
    setAge('');
    setRollNumber('');
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const labelStyles = {
    margin: '10px 0',
    fontSize: '1.2rem',
  };

  const inputStyles = {
    padding: '10px',
    fontSize: '1.2rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  };

  const buttonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    fontSize: '1.2rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const tableStyles = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px',
  };

  const thStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '10px',
  };

  const tdStyles = {
    borderBottom: '1px solid #ddd',
    padding: '10px',
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyles}>
        <label style={labelStyles}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            style={inputStyles}
          />
        </label>
        <label style={labelStyles}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            style={inputStyles}
          />
        </label>
        <label style={labelStyles}>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            style={inputStyles}
          />
        </label>
        <label style={labelStyles}>
          Roll Number:
          <input
            type="text"
            value={rollNumber}
            onChange={(event) => setRollNumber(event.target.value)}
            style={inputStyles}
          />
        </label>
        <button type="submit" style={buttonStyles}>
          Submit
        </button>
      </form>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>First Name</th>
            <th style={thStyles}>Last Name</th>
            <th style={thStyles}>Age</th>
            <th style={thStyles}>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={index}>
              <td style={tdStyles}>{student.firstName}</td>
              <td style={tdStyles}>{student.lastName}</td>
              <td style={tdStyles}>{student.age}</td>
              <td style={tdStyles}>{student.rollNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyles = {
  borderCollapse: 'collapse',
  margin: '1rem 0',
};

const thStyles = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: '1px solid black',
  padding: '0.5rem',
  textAlign: 'left',
};

const tdStyles = {
  border: '1px solid black',
  padding: '0.5rem',
  textAlign: 'left',
};

export default StudentForm;
