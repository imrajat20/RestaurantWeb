// import React, { useContext } from "react";
// import classes from './MealItemForm.module.css';
// import Input from "../../UI/Input";
// import CartContext from "../../../store/cart-context";

// const MealItemForm = (props) => {
//     const cartCtx = useContext(CartContext);

//     const addItemToCart = (event) => {

//         event.preventDefault();
//         let quantity = document.getElementById('amount_' +props.id).value;
//         cartCtx.addItem({...props.item, quantity: quantity});
//         //cartCtx.items.push(props.item);
        
//     };

//     return <form className={classes.form}>
//         <Input label = 'Amount' input= {{
//             id: 'amount_' +props.id,
//             type: 'number',
//             min: '1',
//             max: '5',
//             step: '1',
//             defaultValue: '1'
//         }}></Input>
//         <button onClick={addItemToCart}>+ Add</button>
//     </form>
// };

// export default MealItemForm;


import React, { useContext, useRef } from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef(); // Using useRef to access input value

    const addItemToCart = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const amount = parseInt(enteredAmount); // Parsing string to integer
        if (isNaN(amount) || amount <= 0 || amount > 5) {
            // Validating amount
            return;
        }
        cartCtx.addItem({...props.item, quantity: amount});
    };

    return (
        <form className={classes.form} onSubmit={addItemToCart}>
            <Input 
                label='Amount' 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
                ref={amountInputRef} // Associating the input ref
            />
            <button type="submit">+ Add</button> {/* Changed onClick to type="submit" */}
        </form>
    );
};

export default MealItemForm;
