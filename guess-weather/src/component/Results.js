import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getWeather} from '../store/actions/resultsAction'
import "./Results.css"
//import Alert from '@mui/material/Alert'; // can not resolve this componnet

 class Results extends Component {
    componentDidMount(){
        this.props.getWeather()   
    }


    render() {
       
       
        const {users} = this.props.users
        console.log(users.length)
        let failures = users.filter(u=> u.answer === false)
        console.log('debugging failure size: ' + failures.length)

        let result =  failures>= 3 ? "You loose" : "You win"
        return (
            <div>
                <br/>
                
                { 
                  users.length >=5
                  ?
                  // <Alert severity="info">result</Alert>
                  <p style={{color: 'blue'}}>Popup does not work yet<br/> 
                     {result} 
                  </p>
                
 
                  : users.map(u => 
                      <li>
                      <React.Fragment key={u.cur_temp}>  
                        <h6 style={{color: "green"}}>{u.temp}</h6> <br/>
                        <h6 style={{color: u.answer? "green": "red" }}>{u.cur_temp}</h6> 
                     </React.Fragment>
                     </li>
                 )
                }
              
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getWeather})(Results)
