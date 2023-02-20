import React, { useState } from 'react'
import Componant1 from './Componant1'

function Componant2() {
    const [name, setName] = useState("")
    const [value, setValue] = useState([])
    function Addhandler() {
        setValue([...value, name])
        setName("")
    }
    function Deletehandler(index) {
        const delData = [...value]
        delData.splice(index, 1)
        setValue([...delData])

    }

    return (
        <div>
            <form onSubmit={(e) => (e.preventDefault())}>
                <div className='div'>
                    <div className='inputName'>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                    </div>
                    <button className='Addbtn' onClick={Addhandler}>Add</button>
                </div>
            </form>
            {value.map((val, index) => <Componant1 key={index} name1={val} handler={Deletehandler} />)}
        </div>
    )
}

export default Componant2;