import { Col, Row, Spinner } from 'reactstrap';

const Loading = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner type='grow' color='primary' />
      <Spinner type='grow' color='secondary' />
      <Spinner type='grow' color='success' />
      <Spinner type='grow' color='danger' />
      <Spinner type='grow' color='warning' />
      <Spinner type='grow' color='info' />
    </div>
  );
};

export default Loading;
