import Header from "./components/Header";
import Form from "./components/Form";


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
      <Form initialData={initialFormData} onSubmit={handleFormSubmit} />
      </div>
  );
}

export default App;