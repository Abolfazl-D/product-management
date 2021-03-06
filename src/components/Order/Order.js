import React from 'react';

import Wrapper from './../../hoc/Wrapper';
import Button from './../UI/Button/Button';
import Controls from './../Controls/Controls';


const Order = (props) => {
    const summery = Object.keys(props.products).map((item) => {
        return (
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )
    })

    return (
        <Wrapper>
            <h3>Order</h3>
            <ul>{summery}</ul>
            <p>Continue?</p>
            <Button btnType="success" click={props.continue}>
                Yes
            </Button>
            <Button btnType="danger" click={props.cancel}>
                No
            </Button>
            <p>Total Price: {props.price}</p>
        </Wrapper>
    );
};

export default Order;

//jaie ke sefaresh ha dare neshoon dade mishe