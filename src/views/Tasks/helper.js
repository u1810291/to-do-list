import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/modules/tasks/actions';
import { useHideModal } from '../../hooks';

export const useAddTask = () => {
  const dispatch = useDispatch();
  const { hideModal } = useHideModal();
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email().required('Email is required'),
    description: Yup.string().required('Description is required')
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      description: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const formData = new FormData();
      formData.append('username', values.username);
      formData.append('email', values.email);
      formData.append('text', values.description);
      dispatch(addTask(formData, (success) => {
        if (success) hideModal();
      }));
    }
  });

  return { formik };
};
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
    Header: 'Username',
    accessor: 'username'
  },
  {
    id: 4,
    Header: 'Description',
    accessor: 'description',
    disableSortBy: true
  },
  {
    id: 5,
    Header: 'Status',
    accessor: 'status'
  }
];

export const headerToolTips = [{}];

export const toolTips = [
  {
    name: 'View',
    icon: 'pdf',
    onClick: (pickupId, { history }) => {
      history.push({
        path: `/pickups/view/${pickupId}`,
        title: 'View'
      });
    }
  },
  {
    name: 'Download as PDF',
    icon: 'pdf',
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert('Download as PDF');
    }
  }
];
