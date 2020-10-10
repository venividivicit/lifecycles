import React from 'react'
import axios from 'axios'

export default class Board extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            value: "Ireland",
            data: null
        }
    }


    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    getCountryInfo = () =>{
        axios({
            method: "GET",
            url: `https://restcountries.eu/rest/v2/name/${this.state.value}`
        })
        .then((res) => {
            this.setState({data: res})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getCountryInfo()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.value !== prevState.value){
            console.log("Name has been changed")
        }
    }

    componentWillUnmount(){
        alert("The component will unmount")
    }

    render(){
        return(
            <div>
                <h1>Enter country name</h1>
                <input type="text" name="country" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.getCountryInfo}>Submit</button>
                <h1 name="capital">{this.state.data == null ? "no data": this.state.data.data[0].capital}</h1>
            </div>
        )
    }

}