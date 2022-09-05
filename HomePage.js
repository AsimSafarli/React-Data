import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import UserListComponents from '../components/UserListComponents';
import { v4 as uuidv4 } from 'uuid';
class HomePage extends Component {
    constructor(props){
        super(props );
        this.state={
         users:[
          {
            id:uuidv4(),
            name:'Asim',
            surname:'Safarli',
            username:'asimsafarli',
          },
          {
            id:uuidv4(),
            name:'Mark',
            surname:'Otto',
            username:'markotta',
          },
          {
            id:uuidv4(),
            name:'Jacob',
            surname:'Thornton',
            username:'jacobthornton',
          },
          {
            id:uuidv4(),
            name:'Larry',
            surname:'The Bird',
            username:'larrythebird',
          }
         ]
        }
      this.addUser = this.addUser.bind(this);
    }
    addUser=(name,surname,username)=>{
      if((name,surname,username)){
        const users = [...this.state.users];
        users.push({
          id:uuidv4(),
          name:name,
          surname:surname,
          username:username,
        });
        this.setState({users});
      }
    };
  render() {
    return (
      <> <div className='container'>
            <Navbar color='light' expand='md' light>
           <NavbarBrand href="/">reactstrap</NavbarBrand>
         </Navbar>
        </div>
        <UserListComponents
         users={this.state.users} 
         addUser={this.addUser}/>
      </>
    )
  }
}
export default  HomePage;