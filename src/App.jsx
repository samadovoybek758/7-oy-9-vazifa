import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { REMOVE, CLEARE, SEARCH, CHANGEage, CHANGEname } from "./store/StudentsSlice";
import "./App.css";
import Modal from "./components/Modal";
import UpdateModal from "./components/updateModal";

function App() {
  const student = useSelector((state) => state.students.value);
  const idRef = useRef()
 
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [UpdateModalOpen, setUpdateModalOpen] = useState(false);
  const handleOpenupdateModal = () => setUpdateModalOpen(true);
  const handleCloseUpdateModal = () => setUpdateModalOpen(false);
 
  function deletBtn(id) {
    dispatch(REMOVE(id));
  }

  function cleareBtn(e) {
    e.preventDefault();
    dispatch(CLEARE());
  }

  function serachId(e) {
    e.preventDefault()

    dispatch(SEARCH(idRef.current.value))
    idRef.current.value = ''
  }

  function changeAge(id, name) {
    const newAge = prompt('Ozgartiradigan yosh')
    
    const student = {
      name: name,
      age: newAge,
      id: id
    }
    console.log(student);
    
    dispatch(CHANGEage(student))
  }
  function changeName(id, age) {
    const newName = prompt('Ozgartiradigan ismingiz')
    
    const student = {
      name: newName,
      age: age,
      id: id
    }
    console.log(student);
    
    dispatch(CHANGEname(student))
  }
  return (
    <div className="">

      <div className="mx-auto w-[600px] items-center flex  gap-4 mt-7  mb-4">
       <div className="flex flex-col gap-3 w-[300px]">
       <button
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
          onClick={cleareBtn}>cleare</button>

        <button
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
          onClick={handleOpenModal}>Student qo'shish
        </button>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
       </div>

       <div className="flex flex-col gap-4 w-[300px]">
        <input className="border border-solid border-orange-500 py-2 px-3 rounded-md" ref={idRef} type="number" />
        <button className="bg-blue-500 px-4 py-2 rounded-md text-white" onClick={serachId}>Qidirish</button>
       </div>
      </div>

      <div className="w-[1000px] flex flex-wrap gap-3 mt-5 mx-auto ">
        {student.length > 0 &&
          student.map(function (value,index) {
            return (
              <div key={index} className="p-5  border shadow-lg flex flex-col gap-3 rounded-md w-[300px] ">
                <div className="flex justify-between ">
                <h2 className="text-xl font-semibold text-gray-500">Name: {value.name}</h2>
                <button onClick={() => {changeName(value.id, value.age)}} className="bg-green-500 px-2 py-2 rounded-md text-white">Change name</button>
                </div>
                <div className="flex justify-between ">
                <h2 className="text-xl font-semibold text-gray-500">Age: {value.age}</h2>
                <button onClick={() => {changeAge(value.id, value.name)}} className="bg-green-500 px-2 py-2 rounded-md text-white">Change age</button>
                </div>
                <h2 className="text-xl font-semibold text-gray-500">ID: {value.id}</h2>
                <button
                className="py-2 bg-red-400 rounded-md hover:bg-red-500 hover:text-white border-none text-blue-500 "
                  onClick={() => {
                    deletBtn(value.id);
                  }}>delet</button>

                

                  <button className="py-2 bg-purple-400 text-white border-none rounded-md" onClick={handleOpenupdateModal}>tahrirlash</button>
                 <UpdateModal isOpen={UpdateModalOpen} onClose={handleCloseUpdateModal}></UpdateModal>
                
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
