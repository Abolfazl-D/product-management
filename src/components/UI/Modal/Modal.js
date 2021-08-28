import React from 'react';
import Wrapper from './../../../hoc/Wrapper';
import Backdrop from './../Backdrop/Backdrop';

import './Modal.css'


const Modal = (props) => {
    return (
        <Wrapper>
        <Backdrop show={props.show} click={props.modalClose}/>
            <div className={"modal"}
                style={{
                    transform: props.show ? 'transLateY(0)' : 'transLateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}
            >
                {props.children}
            </div>
        </Wrapper>
    );
};

export default Modal;