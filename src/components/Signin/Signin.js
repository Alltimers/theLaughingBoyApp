import React from 'react';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value.toLowerCase()})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value.toLowerCase()})
  }

  onSubmitSignIn = () => {
    fetch('https://brainobackend.onrender.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
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
              <legend className="intro ph0 mh0 center">Welcome</legend>
              <h4 className="title">
                to The Laughing Boy App.
              </h4>
              <p>Please <span>Log in</span> to hack images with my logo in their faces.</p>
              <div className="floating-label">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  onChange={this.onEmailChange}
                />
                <label htmlFor="email">Email:</label>
                <div className="icon">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg 
                    enableBackground="new 0 0 100 100"
                    version="1.1"
                    viewBox="0 0 100 100"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:none;}\n" }}
                    />
                    <g transform="translate(0 -952.36)">
                      <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                    </g>
                    <rect className="st0" width={100} height={100} />
                  </svg>
                </div>
              </div>
              <div className="floating-label">
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  onChange={this.onPasswordChange}
                />
                <label htmlFor="password">Password:</label>
                <div className="icon">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg
                    enableBackground="new 0 0 24 24"
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html: "\n\t.st0{fill:none;}\n\t.st1{}\n"
                      }}
                    />
                    <rect className="st0" width={24} height={24} />
                    <path className="st1" d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                    <path
                      className="st1"
                      d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z"
                    />
                    <path
                      className="st1"
                      d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <button 
                className="f6 grow"
                type="submit" 
                onClick={this.onSubmitSignIn}
                >
                  Log in
                </button>
                <a
                  onClick={() => onRouteChange('register')}
                  className="discrete f6 link white-80 pointer"
                  target="_blank"
                >
                  Sign Up
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

export default Signin;