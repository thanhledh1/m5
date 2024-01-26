// import React from "react";

// const MyForm = () => {
//   return (
//     <form>
//       <h1>Hello</h1>
//       <p>Enter your name:</p>
//       <input type="text" />
//     </form>
//   );
// };

// export default MyForm;


// import React, { useState } from "react";

// const MyForm = () => {
//   const [username, setUsername] = useState("");
//   const handleChange = event => setUsername(event.target.value);
//   return (
//     <form>
//       <h1>Hello </h1>
//       <p>Enter your name:</p>
//       <input type="text" onChange={handleChange} />
//     </form>
//   );
// }

// export default MyForm;


// Điều kiện để render (Conditional Rendering)
// Hãy xem ví dụ dưới đây và lưu ý những điều sau:
// Chúng ta tạo ra một biến trống, gọi là header
// Chúng ta thêm câu lệnh if để chèn nội dung vào biến header, nếu người dùng đã thực hiện bất kỳ thao tác nhập nào.
// Chúng ta chèn biến tiêu đề vào đầu ra, sử dụng dấu ngoặc nhọn.
// import React, { useState } from "react";

// function MyForm() {
//   const [username, setUsername] = useState("");
//   const handleChange = event => setUsername(event.target.value);
//   let header;
//   if (username) {
//     header = <h1>Hello {username}</h1>;
//   } else header = "";
//   return (
//     <div>
//       <form>
//         {header}
//         <p>Enter your name:</p>
//         <input type="text" value={username} onChange={handleChange} />
//       </form>
//     </div>
//   );
// }

// export default MyForm;

// Submitting Forms
// import React, { useState } from "react";

// function Submit() {
//   const [username, setUsername] = useState("");

//   const submitHandler = event => {
//     event.preventDefault();
//     alert("You are submitting " + username);
//   };
//   const handleChange = event => setUsername(event.target.value);
//   return (
//     <form onSubmit={submitHandler}>
//       <h1>Hello {username}</h1>
//       <p>Enter your name, and submit:</p>
//       <input type="text" onChange123={handleChange} />
//       <input type="submit" />
//     </form>
//   );
// }

// export default Submit;



//validiton
// import React, { useState } from "react";

// function Form() {
//   const [state, setState] = useState({
//     username: "",
//     age: null
//   });
//   const handleChange = event => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     if (nam === "age") {
//       if (!Number(val)) {
//         alert("Your age must be a number");
//       }
//     }
//     setState({ ...state, [nam]: val });
//   };

//   return (
//     <form>
//       <h1>
//         Hello {state.username} {state.age}
//       </h1>
//       <p>Enter your name:</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Enter your age:</p>
//       <input type="text" name="age" onChange={handleChange} />
//     </form>
//   );
// }

// export default Form;



// import React, { useState } from "react";

// function Form() {
//   const [state, setState] = useState({
//     username: "",
//     age: null
//   });

//   const handleChange = event =>
//     setState({ ...state, [event.target.name]: event.target.value });

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!Number(state.age)) {
//       alert("Your age must be a number");
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>
//         Hello {state.username} {state.age}
//       </h1>
//       <p>Enter your name:</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Enter your age:</p>
//       <input type="text" name="age" onChange={handleChange} />
//       <br />
//       <br />
//       <input type="submit" />
//     </form>
//   );
// }

// export default Form;



// import React, { useState, useEffect } from "react";

// function Form() {
//   const [state, setState] = useState({
//     username: "",
//     age: null,
//     errormessage: ""
//   });
//   const handleChange = event => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     let err = "";
//     if (nam === "age") {
//       if (val !== "" && !Number(val)) {
//         err = "Your age must be a number";
//       }
//     }
//     setState({ ...state, [nam]: val, errormessage: err });
//   };

//   return (
//     <form>
//       <h1>
//         Hello {state.username} {state.age}
//       </h1>
//       <p>Enter your name:</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Enter your age:</p>
//       <input type="text" name="age" onChange={handleChange} />
//       {state.errormessage}
//     </form>
//   );
// }

// export default Form;




import React, { useState } from "react";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = event => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {};
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}

export default FileUploadPage;