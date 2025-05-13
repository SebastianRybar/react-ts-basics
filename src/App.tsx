import './App.tsx'
import ViewBox from './components/PercentView'
import { useState } from 'react';
// type Address ={
//     street: string,
//     city: string,
//     country: string
// }

// type MyType = {
//     name: string,
//     age: number,
//     doIt: (h: number) => number,
//     isAlive: boolean,
//     hobbies: Array<string>,
//     address?: Address
// }

// const myPerson: MyType = {
//     name: 'John',
//     age: 30,
//     doIt: (h: number) => h + 1,
//     isAlive: true,
//     hobbies: ['reading', 'gaming'],
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         country: 'USA'
//     }
// }
// type Arrowtype = (x: number) => number

// const arrow1 = (x):number => x + 1

// const arrow2 = (x):number => (
//     x + 1
// )

// const arrow3 = (x):number => {
//     x = 2;
//     return(
//         x + 1
//     )
    
// }

const App = () => {

 const [rangeValue, setRangeValue] =  useState(100);
 const initialValue: number = 50;
    // let cislo: number = 34;
    // cislo -= 1;
    return(
        <>
        <div>
            <input type="range" min={0} max={200} onChange={(e)=>{setRangeValue}} defaultValue={initialValue}></input>
        </div>
        {console.log(rangeValue)}
           { <ViewBox value={rangeValue} max={100} makeColor = {(p) => "green"} />
            /*
           <ViewBox value={cislo + 1} max={200} makeColor = {(p) => "blue"} />
           <ViewBox value={30} max={300} makeColor={(p) => `rgb(${p*100*20},0,0)`} /> */}
        </>
    )
}
export default App