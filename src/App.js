import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './components/Student';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/addStudent" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
