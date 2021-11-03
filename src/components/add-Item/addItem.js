import React,{ Component } from 'react';
import './addItems.css'

class AddItem extends Component{
    state={
        name:'',
        days:''
    }

    handelChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handelSubmit= (e)=>{
        e.preventDefault();
        console.log('hhhhhh'+this.state);

        if(this.state.name != '' && this.state.days != ''){
            this.props.addTask(this.state);
            // to empty input field after submit
            this.setState({
               name:'',
               days:''
            })
        }else{
            alert("Input fields can't be empty")  
        }
       
    }


    render(){
        return(
            <div>
              
            <form className="add text-center my-4 form-inline justify-content-center" onSubmit={this.handelSubmit}>
                
                <input className="form-control " type="text" name="name" id="name" placeholder="Enter your task..." onChange={this.handelChange} value={this.state.name} />
                <input className="form-control days mx-1" type="number" name="days" id="days" placeholder="How many days" onChange={this.handelChange} value={this.state.days} />
                <button type="submit" className="btn btn-default ">ADD</button>
            </form> 
            </div>
        )
    }
}

export default AddItem