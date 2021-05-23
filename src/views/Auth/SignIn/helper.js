import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/modules/auth/actions';

export const useHandleSubmit = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const formData = new FormData();
      formData.append('username', values.username);
      formData.append('password', values.password);
      dispatch(login(formData, (res) => {
        setSubmitting(false);
        if (!res) history.go('/');
      }));
    }
  });
  return { formik };
};
