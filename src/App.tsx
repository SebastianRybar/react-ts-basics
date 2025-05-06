import './App.tsx'
import ViewBox from './components/PercentView.tsx'
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
    let cislo: number = 34;
    cislo -= 1;

    return(
        <>
           <ViewBox value={cislo + 1} max={100} makeColor = {(p) => "green"} />
           <ViewBox value={cislo + 1} max={200} makeColor = {(p) => "blue"} />
           <ViewBox value={30} max={300} makeColor={(p) => `rgb(${p*100*20},0,0)`} />
        </>
    )
}
export default App