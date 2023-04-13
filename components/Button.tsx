import React from 'react'

const Button = (props: any) => {
    return (
        <div onClick={props.onClick} className={`text-white py-2 px-3 text-center rounded-full cursor-pointer ${props.style}`}>
            {props.title}
        </div>
    )
}

export default Button