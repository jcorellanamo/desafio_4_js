const propiedades_alquiler = [
    {
        nombre: 'Apart Hotel',
        src: 'assets/img/hotel1.jpg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        wifi: true,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'assets/img/hotel11.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        wifi: false,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        wifi: true,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento en la playa',
        src: 'assets/img/hotel2.jpg',
        descripcion: 'Hermoso departamento frente al mar con acceso directo a la playa',
        ubicacion: '999 Beach Road, Oceanview, CA 34567',
        habitaciones: 3,
        costo: 3000,
        wifi: false,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento en la playa',
        src: 'assets/img/hotel3.jpg',
        descripcion: 'Hermoso departamento frente al mar con acceso directo a la playa',
        ubicacion: '999 Beach Road, Oceanview, CA 34567',
        habitaciones: 3,
        costo: 3000,
        wifi: true,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento en la playa',
        src: 'assets/img/hotel4.jpg',
        descripcion: 'Hermoso departamento frente al mar con acceso directo a la playa',
        ubicacion: '999 Beach Road, Oceanview, CA 34567',
        habitaciones: 3,
        costo: 3000,
        wifi: false,
        smoke: true,
        pets: true
    }
];

//Interpolación

function mostrarPropiedadesAlquiler() {
    const contenedor = document.getElementById('propiedades-alquiler');
    let html = '';
    propiedades_alquiler.forEach(propiedad => {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.wifi ? 'text-success' : 'text-danger'}"><i class="${propiedad.wifi ? 'fas fa-wifi' : 'fas fa-ban'}"></i> ${propiedad.wifi ? 'Wifi' : 'Sin Wifi'}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"><i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
                    </div>
                </div>
            </div>
        `;
    });
    contenedor.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', mostrarPropiedadesAlquiler);
