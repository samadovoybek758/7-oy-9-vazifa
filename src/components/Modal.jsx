import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {ADD} from '../store/StudentsSlice'

const Modal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

 

    const nameRef = useRef()
    const ageRef = useRef()
    const idRef = useRef()

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
       
        onClose();
    };

    function handleAdd(e) {
        e.preventDefault()

        let student = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            id: idRef.current.value
        }
          dispatch(ADD(student))

          nameRef.current.value = ''
          ageRef.current.value = ''
          idRef.current.value = ''
         
    }
    return (
        <div style={styles.overlay} >
            <div style={styles.modal} className='w-[400px] rounded-md'>
                <h2 className='text-center text-3xl text-violet-600 mb-2'>Modal</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className='text-2xl font-semibold text-gray-500'>Name</span>
                        <input 
                            className='input w-full p-2 border border-solid border-blue-300 rounded-md mt-2'
                            type="text" 
                            ref={nameRef}
                            
                        />
                    </label>
                    <br />
                    <label>
                    <span className='text-2xl font-semibold text-gray-500 '>Age</span>
                        <input 
                            className='input w-full p-2 border border-solid border-blue-300 rounded-md mt-2'
                            type="number" 
                            ref={ageRef}
                           
                        />
                    </label>
                    <br /> 
                    <label>
                        <span className='text-2xl font-semibold text-gray-500'>Id</span>
                        <input 
                            className='input w-full p-2 border border-solid border-blue-300 rounded-md mt-2'
                            type="text" 
                            ref={idRef}
                            
                        />
                    </label>
                    <br /><br />
                    <button onClick={handleAdd} className='w-full bg-blue-500 py-2 rounded-md border-none text-white mb-2' type="submit">Yuborish</button>
                    <button className='w-full bg-blue-500 py-2 rounded-md border-none text-white mb-2' type="button" onClick={onClose}>Yopish</button>
                </form>
            </div>
        </div>
    );
};



const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
};

export default Modal;
