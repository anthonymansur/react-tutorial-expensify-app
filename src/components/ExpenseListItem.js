// Export a stateless functional component 
// render description, amount, createdAt

import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
    <h3>{props.description}</h3>
    </Link>
    <p>Amount: {props.amount}</p>
    <p>Created at: {props.createdAt}</p>
  </div>
);
 
export default ExpenseListItem;