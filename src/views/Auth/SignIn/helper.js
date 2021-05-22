import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/modules/auth/actions';

export const useHandleSubmit = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(login(values, () => {
        setSubmitting(false);
        history.push('/');
      }));
    }
  });
  return { formik };
};
