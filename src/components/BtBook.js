import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function BtBook() {
  const [books, setBooks] = React.useState([]);
  const [selectedBook, setSelectedBook] = React.useState(null);

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleDelete = (book) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b !== book));
  };

  return (
    <div>
      <Formik
        initialValues={{
          title: selectedBook ? selectedBook.title : '',
          quantity: selectedBook ? selectedBook.quantity.toString() : '',
        }}
        enableReinitialize={true} // Cho phép cập nhật giá trị ban đầu khi selectedBook thay đổi
        validate={(values) => {
          const errors = {};

          if (!values.title.trim()) {
            errors.title = 'Tiêu đề là trường bắt buộc';
          }

          if (!Number.isInteger(Number(values.quantity))) {
            errors.quantity = 'Số lượng phải là một số';
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          const newBook = {
            title: values.title,
            quantity: parseInt(values.quantity),
          };

          if (selectedBook) {
            // Chỉnh sửa thông tin sách
            setBooks((prevBooks) =>
              prevBooks.map((book) => (book === selectedBook ? newBook : book))
            );
            setSelectedBook(null);
          } else {
            // Thêm thông tin sách
            setBooks((prevBooks) => [...prevBooks, newBook]);
          }

          resetForm();
        }}
      >
        <Form>
          <div>
            <label>
              Tiêu đề:
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </label>
          </div>
          <div>
            <label>
              Số lượng:
              <Field type="text" name="quantity" />
              <ErrorMessage name="quantity" component="div" />
            </label>
          </div>
          <button type="submit">{selectedBook ? 'Chỉnh sửa' : 'Thêm'}</button>
        </Form>
      </Formik>

      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Số lượng</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => handleEdit(book)}>Chỉnh sửa</button>
                <button onClick={() => handleDelete(book)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BtBook;
