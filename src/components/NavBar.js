import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Userfront from '@userfront/react';

Userfront.init("8b68mprb");

const SignupForm = Userfront.build({
  toolId: "bnbrdb",
});
const LoginForm = Userfront.build({
  toolId: "okodrr",
});
const PasswordResetForm = Userfront.build({
  toolId: "kaonka",
})
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); 


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function NavBar() {
  let navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const home = () => {
    navigate("/");
  };
  const reset = () => {
    navigate("/reset");
  };

  const dashboard = () => {
    navigate("/dashboard");
  };

  const facts = () => {
    navigate("/facts");
  };

  function Login() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm />
      </div>
    );
  }
  
  function PasswordReset() {
    return (
      <div>
        <h2>Password Reset</h2>
        <PasswordResetForm />
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Home</h2>
        <SignupForm />
        </div>
    );
  }


  function Home() {
    return (
      <div className='user-welcome'>
        {"Hello " + Userfront.user.name + "!"}
      </div>
    );
  }
  
  function RequireAuth({ children }) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" color="#517062">
      <StyledBreadcrumb 
          
          component="a" 
          href="#" 
          icon={<HomeIcon fontSize="small" />}
          label="Home"
          onClick={home}
          />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Login"
          onClick={login}
        />
        <StyledBreadcrumb 
          component="a" 
          href="#" 
          label="Plant Facts"
          onClick={facts}
          />
        <StyledBreadcrumb
          component="a"
          href="#" 
          label="Dashboard"
          onClick={dashboard}
        />
        <StyledBreadcrumb 
        component="a" 
        href="#" 
        label="Password Reset"
        onClick={reset}
        />

        <StyledBreadcrumb 
        component="a" 
        href="#" 
        label="Logout"
        onClick={Userfront.logout}
        />

          <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<PasswordReset />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="/" element={<Home />} />
          </Routes> 
      </Breadcrumbs>
    </div>
  );
}
