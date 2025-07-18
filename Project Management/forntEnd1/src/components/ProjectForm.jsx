import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = ({ fetchProjects }) => {
  const [form, setForm] = useState({ name: '', description: '', status: 'Not Started' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/projects', form);
    fetchProjects();
    setForm({ name: '', description: '', status: 'Not Started' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-blue-50 to-cyan-100 shadow-xl rounded-3xl p-8 max-w-lg mx-auto mt-20 border border-gray-300"
    >
      <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">Add New Project</h2>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Project Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter project name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter project description"
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        ></textarea>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
