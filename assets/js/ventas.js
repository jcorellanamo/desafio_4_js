const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'assets/img/hotel10.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        wifi: false,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'assets/img/hotel9.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        wifi: true,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'assets/img/hotel8.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        wifi: false,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa moderna en suburbios',
        src: 'assets/img/hotel7.jpg',
        descripcion: 'Casa moderna con jardín en los suburbios',
        ubicacion: '1010 Suburb Lane, Pleasantville, CA 12345',
        habitaciones: 5,
        costo: 3000,
        wifi: true,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa moderna en suburbios',
        src: 'assets/img/hotel6.jpg',
        descripcion: 'Casa moderna con jardín en los suburbios',
        ubicacion: '1010 Suburb Lane, Pleasantville, CA 12345',
        habitaciones: 5,
        costo: 3000,
        wifi: false,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa moderna en suburbios',
        src: 'assets/img/hotel5.jpg',
        descripcion: 'Casa moderna con jardín en los suburbios',
        ubicacion: '1010 Suburb Lane, Pleasantville, CA 12345',
        habitaciones: 5,
        costo: 3000,
        wifi: true,
        smoke: false,
        pets: true
    }
];

//Interpolación

function mostrarPropiedadesVenta() {
    const contenedor = document.getElementById('propiedades-venta');
    let html = '';
    propiedades_venta.forEach(propiedad => {
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

document.addEventListener('DOMContentLoaded', mostrarPropiedadesVenta);
