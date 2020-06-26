import React,{Component} from 'react'

// const SearchBar = () =>{

// return <input/>

// }
class SearchBar extends Component
{
    constructor(props){

        super(props);
        this.state = {
            searchText: "",
            placeHolder: "Cherchez votre film...",
            intervalRequest: 1000,
            lockRequest: false
        }
      

    }
    render(){
        
        
    return ( 
        <div className="row">
            <div className="col-md-8 input-group">
        <input type="text" className="form-control input-lg" onChange = {this.handleChange.bind(this)} placeholder = {this.state.placeHolder}/>
        <span className="input-group-btn">

            <button className="btn btn-secondary" onClick={this.handleBtnClick.bind(this)}>GO</button>
        </span>
        
            </div>
        {/* <p>{this.state.searchText}</p> */}
        </div>

)}

    handleChange(event){

        // console.log("============");
        // console.log('une saisie',event.target.value);
        // console.log("============");
        this.setState({searchText:event.target.value});
        if(!this.state.lockRequest){

            this.setState({lockRequest:true});

            setTimeout(function(){
                 this.search();

            }.bind(this),this.state.intervalRequest)
        }
    }

    handleBtnClick(event){

            //    console.log("============");
            //    console.log('une saisie',event.target.value);
            //    console.log("============");
            this.search();
    }

    search()
    {
this.props.callback(this.state.searchText);
this.setState({lockRequest:false});
    }

}
export default SearchBar;