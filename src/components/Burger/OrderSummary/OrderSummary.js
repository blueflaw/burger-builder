import React, { Component} from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

import classes from './OrderSummary.module.css';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('[OrderSummary.js] componentWillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
                <Aux>
                    <h1>You Order</h1>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p>Total Price: <strong>₱{this.props.price.toFixed(2)}</strong></p>
                    <p>Continue to cheack out?</p>
                    <div className={classes.SummaryFooter}>
                        <Button btnType="Ok" clicked={this.props.purchaseContinued}>Continue</Button>
                        <Button btnType="Cancel" clicked={this.props.purchaseCancelled}>Cancel</Button>
                    </div>
                </Aux>
            );
    }
};

export default OrderSummary;
