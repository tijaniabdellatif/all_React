import React,{Component} from 'react'

// const SearchBar = () =>{

// return <input/>

// }

class SearchBar extends Component{

    constructor(props){

        super(props);
        this.state = {searchText:"",placeHolder:"Cherchez votre film..."}
    }

    render(){

        return ( 
        <div>
        <input onChange = {this.handleChange.bind(this)} placeholder = {this.state.placeHolder}/>
        <p>{this.state.searchText}</p>
        </div>
)}

    handleChange(event){

        // console.log("============");
        // console.log('une saisie',event.target.value);
        // console.log("============");
        this.setState({searchText:event.target.value});
    }

}

export default SearchBar;