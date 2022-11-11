import img1 from './img1.jpg'

const Login = () =>{
    return(
        <div className="container1">

            <div className="image1">
                <img src={img1} alt="" className="img1" />
            </div>

            <div className="right1">
                <div className="Message">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="welcome1">Welcome Back:)</div>
                    <div className="subtitle1">To keep connected with us please provide us with login information by email address and password</div>
                </div>
                <form action="" className="loginpg">
                    <label htmlFor="Email" className='text1'><h4>Enter Email Address: </h4></label>
                    <input type="email" id="Email" className="Email"></input>
                    <br></br>
                    <label htmlFor="Password" className='text1'><h4>Enter Password: </h4></label>
                    <input type="text" id="Password" className="Password"></input>

                </form>
                <a href="#" className="forgot">Forgot Password!</a>
                <div className="buttons">
                    <button className="loginnow">Login Now</button>
                    <button className="createacc">Create Account</button>
                </div>
            </div>

        </div>

    );
}

export default Login;