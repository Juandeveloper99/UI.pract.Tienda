import { fetchingresar } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const ingresar = await fetchingresar();
    const ingresarList = document.getElementById('ingresar-list');

    ingresar.forEach(libro => {
      const listItem = document.createElement('li');
      listItem.textContent = libro.nombre; // Asume que 'nombre' es una columna en tu tabla 'ingresar'
      ingresarList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching ingresar:', error);
  }

  const cors = require('cors');
app.use(cors());

});
