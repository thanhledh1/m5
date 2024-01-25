import React, { useEffect, useState } from 'react';
function Effect(props) {
    const [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);
    const handleClick = (value) => {
        setNum1(value);
    }
    const handleClick2 = (value) => {
        setNum2(value);
    }
    ///chạy 1 lần duy nhất khi component được gắn vào
    useEffect (() => {
        console.log("gan vao");
    }, []);
    //// chạy khi bất cứ state nào thay đổi
    useEffect (() => {
        console.log("cap nhat");
    });
    ///// chạy khi state phụ thuộc thay đổi
    useEffect (() => {
        console.log("chay khi num2 thay doi");
    }, [num2]);
    return (
        <div>
            <h1>Effect</h1>
            <button onClick={()=>handleClick(10)}>Click</button>
            <button onClick={()=>handleClick2(15)}>Click</button>
        </div>
    );
}
export default Effect;