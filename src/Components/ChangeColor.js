import {atom,useRecoilState} from 'recoil'
 const colorState =atom ({
    key:'colorState',
    default:'blue'
 })
 export default function ChangeColor(){
    const [color,setColor] =useRecoilState(colorState)

    const handleClick =() =>{
        setColor(color === 'blue' ? 'red' :'blue')
    }

    return (
        <>
        <h1 style={{color:color}}>i will change color</h1>
        <button onClick ={handleClick}>
            change color
        </button>
        </>
    )
 }