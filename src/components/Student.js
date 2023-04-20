import React, { useState } from 'react';
// import './App.css';

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <br />
        <label>
          Roll Number:
          <input
            type="text"
            value={rollNumber}
            onChange={(event) => setRollNumber(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
              <td>{student.rollNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentForm;
