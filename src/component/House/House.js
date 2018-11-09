import React from 'react'

export default function House() {


    removeHouse = (id) => {
        axios.delete(`/api/remove${id}`).then(results => {
            this.props.removeHouse(results.data)
        })
    }


    return (

        <div>
            House
            <button onClick={ () => removeHouse(id)}>Delete House</button>
        </div>

    )
}