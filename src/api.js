export async function fetchingresar() {
    const response = await fetch('http://localhost:3000/api/ingresar');
    const data = await response.json();
    return data;
  }
  