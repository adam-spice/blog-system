import { useState } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { signup } from '../../actions/auth';
import Error from '../Error';
import Loading from '../Loading';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    error: '',
    loading: true,
    message: '',
    showForm: false,
  });

  const {
    name,
    username,
    email,
    password,
    error,
    loading,
    message,
    showForm,
  } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { name, username, email, password };
    const response = await signup(user);

    if (response.error) {
      setValues({ ...values, error: response.error, loading: false });
    } else {
      setValues({
        ...values,
        name: '',
        username: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: response.message,
        showForm: false,
      });
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () => (loading ? <Loading /> : null);
  const showError = () => (error ? <Error>error</Error> : null);

  const signupForm = () => {
    return (
      <>
        {showLoading()}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for='name'>Name</Label>
            <input
              value={name}
              onChange={handleChange('name')}
              id='name'
              type='text'
              className='form-control'
              placeholder='Type your name'
            />
          </FormGroup>
          <FormGroup>
            <Label for='name'>Username</Label>
            <input
              value={username}
              onChange={handleChange('username')}
              id='name'
              type='text'
              className='form-control'
              placeholder='Type your username'
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <input
              value={email}
              onChange={handleChange('email')}
              type='email'
              className='form-control'
              placeholder='Type your email'
            />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <input
              value={password}
              onChange={handleChange('password')}
              type='password'
              className='form-control'
              placeholder='Type your password'
            />
          </FormGroup>
          <Button color='primary'>Submit</Button>
        </Form>
      </>
    );
  };

  return <>{signupForm()}</>;
};

export default SignupComponent;
