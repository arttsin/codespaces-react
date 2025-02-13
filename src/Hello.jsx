
import './Hello.css'
import { useState } from 'react';
function MyButton() {
    const [count, setcount] = useState(0);
    function handleClick() {
        setcount(count + 1);
    }
    function reset() {
        setcount(0);
    }
    return (<>
        <button onClick={handleClick}> You clicked{count} Times </button>
        <button onClick={reset} >Reset</button>
        </>
    );

}
function Hello() {
    let name = "RinlnwZA";
    let isAdmin = true;
    const products = [
        { title: "Cabbage", id: 1 },
        { title: "Garlic", id: 2 },
        { title: "Apple", id: 3 }
    ];

    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <div className='block'>
            <h1 style={{ color: "black" }} >Hello, {name.toUpperCase()}</h1>
            <h2> I am Computer Engineer</h2>
            <ol>{listItems}</ol>
            {isAdmin ? <MyButton /> : <p>You are not Admin</p>}

        </div>
    );
}
export default Hello;                     