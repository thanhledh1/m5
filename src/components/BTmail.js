import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SendEmailForm = () => {
  const initialValues = {
    to: '',
    title: '',
    message: '',
    file: null,
  };

  const validationSchema = Yup.object().shape({
    to: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email address'),
    title: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Gửi email và thực hiện các xử lý khác ở đây
    console.log('Sending email:', values);

    // Reset form sau khi gửi email thành công
    resetForm();
    alert('Sent successfully!!!');
  };

  return (
    <div>
      <h1>Send Email</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>
                To:
                <Field type="text" name="to" />
                <ErrorMessage name="to" component="div" className="error" />
              </label>
            </div>
            <div>
              <label>
                Title:
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" className="error" />
              </label>
            </div>
            <div>
              <label>
                Message:
                <Field as="textarea" name="message" />
                <ErrorMessage name="message" component="div" className="error" />
              </label>
            </div>
            <div>
              <label>
                Upload file:
                <Field type="file" name="file" />
              </label>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendEmailForm;