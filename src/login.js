import img1 from './img1.jpg'
import { motion } from 'framer-motion';

const Login = () =>{
    return(
        <div className="container1">

            <motion.div className="image1"
              initial = {{x : '-100vw'}}
              animate = {{x : 0}}
            >
                <img src={img1} alt="" className="img1" />
            </motion.div>

            <div className="right1">
                <motion.div className="Message"
                  initial= {{x : '-100vw'}}
                  animate= {{x : 0}}
                  transition= {{duration : 0.4, type : 'spring', stiffness : '80', delay : 0.5}}
                >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="welcome1">Welcome Back:)</div>
                    <div className="subtitle1">To keep connected with us please provide us with login information by email address and password</div>
                </motion.div>
                <motion.form action="" className="loginpg"
                   initial = {{x : '100vw'}}
                   animate = {{x : 0}}
                   transition = {{type : 'tween', duration : 1.5 }}
                >
                    <label htmlFor="Email" className='text1'><h4>Enter Email Address: </h4></label>
                    <input type="email" id="Email" className="Email"></input>
                    <br></br>
                    <label htmlFor="Password" className='text1'><h4>Enter Password: </h4></label>
                    <input type="text" id="Password" className="Password"></input>

                </motion.form>
                <a href="#" className="forgot">Forgot Password!</a>
                <motion.div className="buttons"
                   initial = {{y : '100vw'}}
                   animate = {{y : 0}}
                   transition = {{type : 'tween', duration : 1.5}}
                >
                    <motion.button className="loginnow"
                       whileHover={{
                        scale : 1.2,
                        boxShadow : "0px 0px 8px rgb(255,255,255)"
                       }}
                    >Login Now</motion.button>
                    <motion.button className="createacc"
                       whileHover={{
                        scale : 1.2,
                        boxShadow : "0px 0px 8px rgb(255,255,255)"
                       }}
                    >Create Account</motion.button>
                </motion.div>
            </div>

        </div>


    );

}

export default Login;