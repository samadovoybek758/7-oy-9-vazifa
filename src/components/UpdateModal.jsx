import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal oyna uchun stil berish
Modal.setAppElement('#root');

const UpdateModal = ({ isOpen, onRequestClose }) => {
  const [student, setStudent] = useState({ name: '', age: '', id: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student); // Bu yerda student obyektini ishlatishingiz mumkin
    onRequestClose(); // Modalni yopish
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Student Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Age:</label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">ID:</label>
            <input
              type="text"
              name="id"
              value={student.id}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
            Submit
          </button>
        </form>
        <button onClick={onRequestClose} className="mt-4 text-blue-500">
          Close
        </button>
      </div>
    </Modal>
  );
};


export default UpdateModal