/* eslint-disable no-unused-vars */

import './style.css'
import {MdCancel}from 'react-icons/md'
import { styleToast } from '../../data';
import { useToast } from '../../contexts/ToastContext';
import { useEffect } from 'react';

export const Toast = ({id, type, message}) => {
    const {removeToast} = useToast()

    useEffect(() => {
        setTimeout(() => {
            removeToast(id)
        }, 3000)
    }, [])

    return (
        <div className={`toast-type ${type + '-toast'}`}>
            <div className='toast-type__content toast__type--appear'>
                <i className={styleToast[type].icon}></i>
                <span>{message}</span>
            </div>
            <div onClick={() => removeToast(id)} className='close-btn'><MdCancel color='white'/></div>
        </div>
    )
};

