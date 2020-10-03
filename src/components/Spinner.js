import React from 'react'

export default function Spinner(){
    return(
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Cargando...</span>
            </div>
        </div>
    );
}