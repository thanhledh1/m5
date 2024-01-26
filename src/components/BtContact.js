import React, { useState } from 'react';
import { Formik } from 'formik';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const BtContact = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidate = (values) => {
    let newErrors = {};

    if (!values.name) {
      newErrors.name = 'Required';
    }

    if (!values.email) {
      newErrors.email = 'Required';
    } else if (!REGEX.email.test(values.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!values.phone) {
      newErrors.phone = 'Required';
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    alert('Contact form submitted successfully!');
  };

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.name && 'custom-input-error'}`}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name || ''}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className={`custom-input ${errors.email && 'custom-input-error'}`}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email || ''}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className={`custom-input ${errors.phone && 'custom-input-error'}`}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={values.phone || ''}
                onChange={handleChange}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BtContact;