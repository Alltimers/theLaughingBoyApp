import React from 'react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value.toLowerCase()})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value.toLowerCase()})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://brainobackend.onrender.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 white-80">
          <div className="measure">

             <div action="" className="log-in" autoComplete="off">
                <legend className="f1 fw6 ph0 mh0 center">Sign Up</legend>
                <h4>
                  to start hacking faces!
                </h4>
                <p>Please <span>create</span> your personal account</p>
                <div className="floating-label-signup">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    onChange={this.onNameChange}
                  />
                  <label htmlFor="email">Name:</label>

                </div>
                <div className="floating-label-signup">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    onChange={this.onEmailChange}
                  />
                  <label htmlFor="email">Email:</label>

                </div>
                <div className="floating-label-signup">
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={this.onPasswordChange}
                  />
                  <label htmlFor="password">Password:</label>

                </div>
                <div>
                  <button 
                  className="f6 grow center"
                  type="submit" 
                  onClick={this.onSubmitSignIn}>
                    Create
                  </button>
                  <a
                    onClick={() => onRouteChange('signin')}
                    className="discrete-signup f6 link white-80 center pointer"
                    target="_blank"
                  >
                    I've got an account
                  </a>
                </div>
              </div>
          </div>
        </main>
      </article>
              <div className='center v-btm white-80'>
          <footer>
          <p>Designed and developed with ❤ by Pablo Osti.<br />
          <span className='footer'>Inspired by the <a href="https://en.wikipedia.org/wiki/List_of_Ghost_in_the_Shell_characters#Laughing_Man">Laughing Man
          </a> incident in Ghost in the Shell SAC,
          and based on the <a href="https://en.wikipedia.org/wiki/File:Laughing_Man.png">logo
          </a> designed by Paul Nicholson.
          </span>
          </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Register;