import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css"


function App() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
  };

  const handleFormSubmit = (data) => {
    console.log("Dados enviados:", data);
  };

  return (
    <div>
      <Header />
      <Form initialData={initialFormData} onSubmit={handleFormSubmit} titulo={"Cadastre-se"} placeholder_1={"Digite seu Username:"} placeholder_2={"Digite seu Email:"} placeholder_3={"Digite sua Senha:"} />
      <Form initialData={initialFormData} onSubmit={handleFormSubmit} titulo={"Login"} placeholder_1={"Digite seu Usuario:"} placeholder_2={"Insira seu Email:"} placeholder_3={"Insira sua Senha:"} />
    </div>
  );
}

export default App;