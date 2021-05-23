import { useFormik } from 'formik';
import * as Yup from 'yup';
import moduleName from '../../redux/modules';

export const useAddTask = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    description: Yup.string().required('Description is required')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      description: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(addTask(values, () => {

      }));
    }
  });
  return { formik };
};
