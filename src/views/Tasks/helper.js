/* eslint-disable no-nested-ternary */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../../redux/modules/tasks/actions';
import { useHideModal } from '../../hooks';
import EditTask from '../../components/Tasks/EditTask';
import UpdateStatus from './UpdateStatus';

const edit = (id) => {
  const dispatch = useDispatch();
  const { hideModal } = useHideModal();
  const validationSchema = Yup.object({
    text: Yup.string(),
    status: Yup.number()
  });
  const formik = useFormik({
    initialValues: {
      text: '',
      status: undefined
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const formData = new FormData();
      if (values.text) formData.append('text', values.text);
      if (values.status) formData.append('status', parseInt(values.status, 10));
      dispatch(editTask({ id, formData }, (res) => {
        if (res) hideModal();
      }));
    }
  });
  return { formik };
};

export const dataMaker = (data) => data.map(({
  status, ...rest
}) => ({
  ...rest,
  status: {
    ...status,
    title: 'Update status',
    name: status === 0 ? 'Not completed'
      : status === 1 ? 'Not completed edited by admin'
        : status === 10 ? 'Completed'
          : status === 11 ? 'Completed and edited by admin' : '',
    color: {
      bg: status === 0 ? '#FF461E'
        : status === 1 ? '#FFB11E'
          : status === 10 ? '#32CC1D'
            : status === 11 ? '#2448FE' : ''
    },
    component: <UpdateStatus edit={edit} id={rest.id} />
  }
}));
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
    accessor: 'status',
    type: 'status'
  }
];

export const headerToolTips = [{}];

export const toolTips = [
  {
    name: 'Edit',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Edit task',
        body: () => <EditTask id={id} edit={edit} />
      });
    }
  }
];
