import React, { useState } from 'react'

const Pagination = ({page, setPage, max}) => {

    const [input, setInput] = useState(1)

    const nextPage = () => {
        setInput(parseInt(input+1))
        setPage(parseInt(page + 1))
    }

    const previousPage = () => {
        setInput(parseInt(input-1))
        setPage(parseInt(page-1))
    }

    const onKeyDown = (e) => {
        if(e.keyCode == 13) {
            setPage(parseInt(e.target.value))

            if(parseInt(e.target.value) < 1 || parseInt(e.target.value) > Math.ceil(max) || isNaN(parseInt(e.target.value))) {
                setPage(1)
                setInput(1)
            }
        } else {
            setPage(parseInt(e.target.value))
        }
    }

    const onChange = (e) => setInput(e.target.value)

    return (
        <div className='pagination1'>
            <button disabled={page == 1 || page < 1} className='btn' onClick={previousPage}><i className="fa-sharp fa-solid fa-caret-left"></i></button>
            <input value={input} autoComplete='off' onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)}/>
            <p className=''>de {Math.ceil(max)} Pag</p>
            <button disabled={page == Math.ceil(max) || page > Math.ceil(max)} className='btn' onClick={nextPage}><i className="fa-solid fa-caret-right"></i></button>
        </div>
    )
}


export default Pagination