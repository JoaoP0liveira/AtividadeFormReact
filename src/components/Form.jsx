import { useState } from "react";
import "./form.css";

function Form({ initialData, onSubmit, titulo, placeholder_1, placeholder_2, placeholder_3 }) {
  // Estado inicial é definido via props
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "O nome de usuário é obrigatório";
    }

    if (!formData.email) {
      newErrors.email = "O email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!formData.password) {
      newErrors.password = "A senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      onSubmit(formData);
    }
  };

  return (
    <div id="form-ui">
      <form onSubmit={handleSubmit} id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">{titulo}</div>
          </div>

          <section className="bg-stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>

          <div id="input-area">
            <div className="form-inp">
              <input
                name="username"
                placeholder={placeholder_1}
                type="text"
                value={formData.username || ""}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>
            <div className="form-inp">
              <input
                name="email"
                placeholder={placeholder_2}
                type="text"
                value={formData.email || ""}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div className="form-inp">
              <input
                name="password"
                placeholder={placeholder_3}
                type="password"
                value={formData.password || ""}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">
              Login
            </button>
          </div>



        </div>
      </form>
    </div>
  );
}

export default Form;
