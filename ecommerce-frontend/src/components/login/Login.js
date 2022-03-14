import React from "react";
import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    FormControlLabel,
    Checkbox,
    Link
} from "@mui/material";
import {useState} from "react";
import authService from '../../api/AuthService'
import {useNavigate} from "react-router-dom";


const Login = () => {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto"
    };

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        // Try to login user
        await authService.login(email, password).catch(reason => {
            // Log message when user login failed
            console.log(reason)
        });

        // Check if user logged in
        if (localStorage.getItem("user"))
            navigate('/');

        // alert(`Email : ${email} Password : ${password}`);
    }

    const btnstyle = {margin: "8px 0"};
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">

                    <h2>Sign In</h2>
                </Grid>
                <TextField
                    label="Email"
                    fullWidth
                    type={"email"}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                    onClick={handleSubmit}
                >
                    Sign in
                </Button>
                <Typography>
                    <Link href="#">Forgot password ?</Link>
                </Typography>
                <Typography>
                    {" "}
                    Do you have an account ?<Link href="/register">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;

