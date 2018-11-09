import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        

    }

    add = (id) => {
        axios.post(`/api/houses/${id}`).then(results => {
            this.props.getHouses(results.data)
        })
    }

    render () {


        return (
            <div>
                Dashboard
                < House />
            </div>
        )
    }
}