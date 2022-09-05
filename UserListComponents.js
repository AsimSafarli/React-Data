import React, { Component } from 'react'
import {Alert, Table} from 'reactstrap'
import FromComponents from './FromComponents';
class UserListComponents extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false,
      user:{},
    };
    this.hide=this.hide.bind(this);
  }
  hide(){
    this.setState({ visible: false})
  }
  render() {
    return (
      <>
        <div className='container'>
            <button className='btn btn-primary mt-5'
             onClick={()=>this.setState({visible:true})}>Add</button>

            <FromComponents 
            visible={this.state.visible} 
            hide={this.hide} 
            addUser={this.props.addUser}/>
            {this.props.users.length >0 ?(
               <Table>
               <thead>
                 <tr>
                   <th>#</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th> Username</th>
                   <th>Redakte</th>
                 </tr>
               </thead>
                 <tbody>
                   {
                     this.props.users.map((user)=>(
                       <tr key={user.id}>
                     <th scope="row">{user.id}</th>
                     <td>{user.name}</td>
                     <td>{user.surname}</td>
                     <td>{user.username}</td>
                     <td>
                       <button className='btn btn-warning'>Edit</button>
                       <button className='btn btn-danger mr-2'>Delete</button>
                     </td>
                   </tr>
                     ))
                   }
                 </tbody>
              </Table>
            ):(<Alert color="warning">
            There  aren't users.
          </Alert>)}
        </div>
      </>
    )
  }
}
export default  UserListComponents;

//<tr>
//<th scope="row">1</th>
//<td>Mark</td>
//<td>Otto</td>
//<td>@mdo</td>
//<td>
//  <button className='btn btn-warning'>Edit</button>
//  <button className='btn btn-danger mr-2'>Delete</button>
//</td>
//</tr>