import React from 'react';
import axios from 'axios';

const ProjectList = ({ projects, fetchProjects }) => {
  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="flex justify-center mt-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-gradient-to-r from-blue-500 to-cyan-300 shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
            <p className="text-gray-100 mb-2">{p.description}</p>
            <p className="text-sm text-gray-200 mb-4">
              Status: <span className="text-white font-bold">{p.status}</span>
            </p>
            <button
              onClick={() => deleteProject(p._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
