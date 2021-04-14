import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    let burgerIngredients = [];
    for (let bI in props.ingredients) {
        for (let i = 1; i <= props.ingredients[bI]; i++) {
            burgerIngredients.push(bI);
        }
    }
    let providedIngredients = burgerIngredients.map((bI, i) => {
        return <BurgerIngredient type={bI} key={bI + i} />;
    });
    
    if (burgerIngredients.length === 0) {
        providedIngredients = <p>Please start adding ingredients!</p>;
    }

    // let trasformedIngredients = Object.keys(props.ingredients)
    //     .map(igkey => {
    //         return [...Array(props.ingredients[igkey])].map((_, i) => {
    //             return <BurgerIngredient type={igkey} key={igkey + i} />;
    //         });
    //     })
    //     .reduce((arr, el) => {
    //         return arr.concat(el)
    //     }, []);
    // if (trasformedIngredients.length === 0) {
    //     trasformedIngredients = <p>Please start adding ingredients!</p>;
    // }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {providedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;