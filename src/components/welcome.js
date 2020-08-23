import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return(
            <div>
                Bienvenido {this.props.nombre} a {this.props.app}
            </div>
        )
    }
}

export default Welcome;