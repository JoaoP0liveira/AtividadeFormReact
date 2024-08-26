import { useState } from "react";
import "./form.css";

function Form({ initialData, onSubmit }) {
  // Estado inicial é definido via props
  const [formData, setFormData] = useState(initialData);

  // Atualiza o estado ao alterar algum campo do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Chama a função passada via props ao submeter
  };

  return (
//     <form onSubmit={handleSubmit} className="formContainer">
//       <div className="formGroup">
//         <label>Nome:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="formGroup">
//         <label>E-mail:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="formGroup">
//         <label>Telefone:</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </div>

//       <button type="submit">Cadastrar</button>
//     </form>

<div id="form-ui">
<form onSubmit={handleSubmit} id="form">
  <div id="form-body">
    <div id="welcome-lines">
      <div id="welcome-line-1">Spotify</div>
      <div id="welcome-line-2">Welcome Back, Loyd</div>
    </div>

    <section className="bg-stars">
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
    </section>

    <div id="input-area">
      <div className="form-inp">
        <input placeholder="Email Address" type="text" />
      </div>
      <div className="form-inp">
        <input placeholder="Password" type="password" />
      </div>
    </div>
    <div id="submit-button-cvr">
      <button id="submit-button" type="submit">
        Login
      </button>
    </div>
    <div id="forgot-pass">
      <a href="#">Forgot password?</a>
    </div>
    <div id="bar"></div>
  </div>
</form>
</div>

  );
}

export default Form;