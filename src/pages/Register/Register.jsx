import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>RegisterForm</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
