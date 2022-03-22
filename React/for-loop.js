//Code written is in react and jsx module

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let var1;
let dt = new Date().getHours();
const sty = {};
if(dt>=1&&dt<12){
     var1 ='Good Morning';
     sty.color = 'green';
}
else if(dt>=12 && dt<19){
     var1 = 'Good afternoon';
     sty.color = 'red';
}
else{
     var1 = 'Good night';
     sty.color='black';
}


ReactDOM.render(
<>
    
    <div>
        <h1>
            Hello sir, <span style={sty}> {var1}  </span>
        </h1>
    </div>
    
</>
,document.getElementById('root'));
