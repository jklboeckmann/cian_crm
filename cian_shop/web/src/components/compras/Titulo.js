import React, { Component } from 'react'

export default function Titulo ({name,titulo}){

    return (
        <div className="row">
            <div className="mx-auto my-2 text-center text-title">
                <h1>
    {name} <strong className="text-b" >{titulo}</strong>
                </h1>
            </div>
        </div>
           
    )
    
}
