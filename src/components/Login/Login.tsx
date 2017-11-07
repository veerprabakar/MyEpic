// import * as React from 'react';

// // interface Props { 
 
// // }

// export class Login extends React.Component {
//     public username = '';
//     error= false;
//     constructor() {
//         super();
//         this.state = {
//             username: '',
//             error: false
//         };
//     }

//     handleUsernameChange(event: any) {
//         this.setState({
//             username: event.target.value
//         });
//     }

//     handleLogin(event: any) {
//         event.preventDefault();
    
//         this.setState({
//           //isAuthenticated: this.state.username === Login.username,
//           //error: this.state.username !== Login.username,
//         });
    
//         this.props.store.setState({
//           //isAuthenticated: this.state.username === Login.username
//         });
//     }
//     render() {
//         return (
//           <form className="form-inline">
//             <div className="alert alert-info">Valid username: {this.username}</div>
//             <p>Login</p>
//             {this.state.error && <div className="alert alert-danger">Wrong username!</div>}
//             <input type="text" 
//                    className="form-control" 
//                    placeholder="username" 
//                    onChange={ (event) => this.handleUsernameChange(event) } />
        
//             <button type="submit" 
//                     className="btn btn-primary" 
//                     onClick={ (event) => this.handleLogin(event) }>Login</button>
//           </form>
//         );
//     }
// }