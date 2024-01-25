import React, { useState } from 'react';

function StudentManage(props) {
    const [studentList, setStudentList] = useState([])
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const [isValid, setIsValid] = useState(false)
    const [indexSelected, setIndexSelected] = useState(-1)
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = () => {
        if (form.name == "" && form.phone == "" && form.email == "") {
            alert("vui long nhap")
        }
        else {
            // alert("xu ly")
            // const user = {
            //     name: form.name,
            //     phone: form.phone,
            //     email: form.email,
            // }
            const user = { ...form }
            let newStudentList = [...studentList]
            if (indexSelected == -1) {
                newStudentList.push(user)
            } else {
                newStudentList[indexSelected] = user
            }
            console.log(newStudentList);
            setStudentList(newStudentList)
            /// lam rong o input
            setForm({
                name: "",
                phone: "",
                email: "",
            })
            // Dặt lại chế độ thêm mới
            setIndexSelected(-1)
        }
    }
    const handleEdit = (key) => {

        let newStudentList = [...studentList]
        let student = newStudentList[key]
        setForm(student)
        setIndexSelected(key)
    }
    const handleDelete = (key) => {
        let newStudentList = [...studentList]
        newStudentList.splice(key)
        setStudentList(newStudentList)
        // Đặt lại chế độ thêm mới
        setIndexSelected(-1)
    }
    return (
        <div>
            <h1>Quản lý sinh viên</h1>
            <h3>{form.name} - {form.phone} - {form.email}</h3>
            <div>
                <label>Name: </label>
                <input name="name" value={form.name} onChange={handleChange} />
            </div>
            <div>
                <label>Phone: </label>
                <input type="number" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div>
                <label>Email: </label>
                <input name="email" value={form.email} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sử dụng phương thức map() để in danh sách student
                    Tạo button Edit với onClick gọi tới hàm handleSelect
                    Tạo button Delete với onClick gọi tới hàm handleDelete
                */ }
                    {
                        studentList.map((item, key) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(key)}>Edit</button>
                                    <button onClick={() => handleDelete(key)}>Delete</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StudentManage;