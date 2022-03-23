import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {add,sub,mul,div} from './Cal';

ReactDOM.render(<> 
<ol>
    <li>Sum is : {add(30,3)}</li>
    <li>Substraction is: {sub(30,3)}</li>
    <li>Multiplication is: {mul(30,3)}</li>
    <li>Divison is:{div(30,2)}</li>
</ol>
</>, document.getElementById('root'));
