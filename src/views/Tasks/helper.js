import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/modules/tasks/actions';
import { useHideModal } from '../../hooks';

export const useAddTask = () => {
  const dispatch = useDispatch();
  const { hideModal } = useHideModal();
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
        hideModal();
      }));
    }
  });

  return { formik };
};
export const data = [{
  id: 1,
  email: 'some@mail.com',
  description: 'Complete Todo task manager',
  status: 'open'
}, {
  id: 2,
  email: 'some2@mail.com',
  description: '2 Complete Todo task manager',
  status: 'open'
}, {
  id: 3,
  email: '3some@mail.com',
  description: '3 Complete Todo task manager',
  status: 'open'
}, {
  id: 4,
  email: '4some@mail.com',
  description: '4 Complete Todo task manager',
  status: 'open'
}, {
  id: 5,
  email: '5some@mail.com',
  description: '5 Complete Todo task manager',
  status: 'open'
}];
export const header = [
  {
    id: 1,
    Header: 'ID',
    accessor: 'id'
  },
  {
    id: 2,
    Header: 'Email',
    accessor: 'email'
  },
  {
    id: 3,
    Header: 'Description',
    accessor: 'description'
  },
  {
    id: 4,
    Header: 'Status',
    accessor: 'status'
  }
];
