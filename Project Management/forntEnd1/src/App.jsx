import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

const App = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await axios.get('http://localhost:5000/api/projects');
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className='bg-[#1e1b4b] min-h-screen  items-center justify-center'>
      <h1 className='text-3xl text-center pt-20  mb-10 font-bold text-white'>📋 Project Management Tool</h1>
      <ProjectForm fetchProjects={fetchProjects} />
      <ProjectList projects={projects} fetchProjects={fetchProjects} />
    </div>
  );
};

export default App;
