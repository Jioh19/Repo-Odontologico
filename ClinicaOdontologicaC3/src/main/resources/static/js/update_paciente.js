// window.addEventListener('load', function () {
// 	//Buscamos y obtenemos el formulario donde estan
// 	//los datos que el usuario pudo haber modificado de la pelicula
// 	const formulario = document.querySelector('#add_new_paciente');

// 	formulario.addEventListener('submit', function (event) {
// 		let peliculaId = document.querySelector('#id').value;
// 		console.log(document.querySelector('#id').value);
// 		//creamos un JSON que tendrá los datos de la película
// 		//a diferencia de una pelicula nueva en este caso enviamos el id
// 		//para poder identificarla y modificarla para no cargarla como nueva
// 		const formData = {
// 			id: document.querySelector('#id').value,
// 			nombre: document.querySelector('#nombre').value,
// 			apellido: document.querySelector('#apellido').value,
// 			cedula: document.querySelector('#cedula').value,
// 		};

// 		//invocamos utilizando la función fetch la API peliculas con el método PUT que modificará
// 		//la película que enviaremos en formato JSON
// 		const url = '/paciente';
// 		const settings = {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(formData),
// 		};
// 		fetch(url, settings).then((response) => response.json());
// 	});
// });

//Es la funcion que se invoca cuando se hace click sobre el id de una pelicula del listado
//se encarga de llenar el formulario con los datos de la pelicula
//que se desea modificar
function findBy(id) {
	const url = `/paciente/buscar/${id}`;
	const settings = {
		method: 'GET',
	};
	fetch(url, settings)
		.then((response) => response.json())
		.then((data) => {
			let paciente = data;
			console.log(paciente);
			document.querySelector('#id').value = paciente.id;
			document.querySelector('#nombre').value = paciente.nombre.toUpperCase();
			document.querySelector('#apellido').value = paciente.apellido.toUpperCase();
			document.querySelector('#cedula').value = paciente.cedula;
			document.querySelector('#fechaIngreso').value = paciente.fechaIngreso.toUpperCase();
			document.querySelector('#calle').value = paciente.domicilio.calle.toUpperCase();
			document.querySelector('#numero').value = paciente.domicilio.numero;
			document.querySelector('#localidad').value = paciente.domicilio.localidad;
			document.querySelector('#provincia').value = paciente.domicilio.provincia;
			document.querySelector('#email').value = paciente.email.toUpperCase();
			//el formulario por default esta oculto y al editar se habilita
		})
		.catch((error) => {
			alert('Error: ' + error);
		});
}

function updatePaciente(event) {
	event.preventDefault();
	const formData = {
		id: document.querySelector('#id').value,
		nombre: document.querySelector('#nombre').value,
		apellido: document.querySelector('#apellido').value,
		cedula: document.querySelector('#cedula').value,
		fechaIngreso: document.querySelector('#fechaIngreso').value,
		domicilio: {
			calle: document.querySelector('#calle').value,
			numero: document.querySelector('#numero').value,
			localidad: document.querySelector('#localidad').value,
			provincia: document.querySelector('#provincia').value,
		},
		email: document.querySelector('#email').value,
	};
	const url = `/paciente`;
	const settings = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	};

  fetch(url, settings)
    .then((response) => {
      console.log(response);
      location.reload();
    })
    .catch((err) => {
      console.log("ERROR " + error);
    });
}
