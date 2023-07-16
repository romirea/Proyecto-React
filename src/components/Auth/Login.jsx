import "./Login.scss"
import { useState } from "react"

const Login = () => {

    const[values, setValues] = useState({
        email: " ",
        password: ""
    })

    const handleInputChange = (e) => {
    console.log(e.target.name)
    setValues({
        ...values,
    [e.target.name]: e.target.value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefaul()
        console.log("Submit")
        console.log(values.email)
        console.log(values.password)
    }
    return(
        <div className="auth-container">
            <div className="auth-modal">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input value={values.email} onChange={handleInputChange} type="email" placeholder="email" className="form-control" name="email"/>
                    <input value={values.password} onChange={handleInputChange} type="password" placeholder="contraseña" className="form-control" name="password" />

                    <button className="btn btn-primary" type="submit">Login</button>
                </form>

            </div>

        </div>
    )
}

export default Login