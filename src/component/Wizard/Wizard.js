import React, { Component } from 'react'

export default class Wizard extends Component {

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

    handleChange = (val, key) => {
        let obj = {}
        obj[key] = val 
        this.setState(obj)
    }
    
    render () {
        let { name, address, city, state, zipcode } = this.state
        return (
            <div>
                Wizard
                <div>
                   Name:<input value={ name } onChange={(e) => this.handleChange(e.target.value, 'name')} /> 
                </div>
                <div>
                Address:<input value={ address } onChange={(e) => this.handleChange(e.target.value, 'address')} />
                </div>
                <div>
                City:<input value={ city } onChange={(e) => this.handleChange(e.target.value, 'city')} />
                </div>
                <div>
                State:<input value={ state } onChange={(e) => this.handleChange(e.target.value, 'state')} />
                </div>
                <div>
                Zipcode:<input value={ zipcode } onChange={(e) => this.handleChange(e.target.value, 'zipcode')} />
                </div>
            </div>
            
        )
    }
}
