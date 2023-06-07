/* eslint-disable no-unused-vars */

import './style.css'
import {MdCancel}from 'react-icons/md'
import { styleToast } from '../../data';
import { removeToastFromList } from '../Context/action';
import { useModal } from '../useHook';
import { useEffect, useRef } from 'react';



export const Toast = ({props}) => {

    const [state, dispatch] = useModal()

    const ref = useRef()

    const handleRemove = (id) => {
    
        dispatch(removeToastFromList(id))

        
    }

    console.log(ref)


    return (
        <div className='toast-type' ref={ref}
        style={styleToast[props.type]}>
            <div className='toast-type__content toast__type--appear'>
                <i className={styleToast[props.type].icon}></i>
                <span>{props.message}</span>
            </div>
            <div onClick={() => handleRemove(props.id)} className='close-btn'><MdCancel/></div>
        </div>
    )
};

