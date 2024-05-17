let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let video = document.getElementById("video");
let audio = document.getElementById("audio");
let imagen = document.getElementById("imagen");

let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");
let videoEditar = document.getElementById("videoEditar");
let audioEditar = document.getElementById("audioEditar");
let imagenEditar = document.getElementById("imagenEditar");

let idTarea = document.getElementById("idTarea");
let btnGuardar = document.getElementById("btnGuardar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");
let listaTareas = document.getElementById("listaTareas");

let tareas = [
    {
        nombre: "Adrian",
        fecha: "2024-05-07",
        descripcion: "Tarea1",
        video: "",
        audio: "",
        imagen: ""
    },
    {
        nombre: "Axel",
        fecha: "2024-05-07",
        descripcion: "Tarea2",
        video: "",
        audio: "",
        imagen: ""
    },
    {
        nombre: "Marco",
        fecha: "2024-05-07",
        descripcion: "Tarea3",
        video: "",
        audio: "",
        imagen: ""
    }
];

let agregarDatos = () => {
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        video: video.value,
        audio: audio.value,
        imagen: imagen.value
    });
    console.log(tareas);
};

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
};

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
};

let resetarFormulario = () => {
    nombre.value = '';
    fecha.value = '';
    descripcion.value = '';
    video.value = '';
    audio.value = '';
    imagen.value = '';
};

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row' id="${indice}">
            <div class='col-3 border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-2 border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-2 border p-3'>
                <video width="100%" controls>
                    <source src="${tarea.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class='col-2 border p-3'>
                <audio controls>
                    <source src="${tarea.audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div class='col-2 border p-3'>
                <img src="${tarea.imagen}" alt="Imagen" width="100%">
            </div>
            <div class="col-2 border p-3 text-center">
                <button class="btn btn-success" 
                onClick="editarTarea(${indice});" 
                data-bs-toggle="modal" data-bs-target="#exampleModalEditar">
                <i class="bi bi-pencil"></i> Editar</button>
            </div>
            <div class='col-2 border p-3 text-center'>
                <button class='btn btn-danger' 
                onClick ="borrarTarea(this,${indice});">
                <i class="bi bi-trash"></i> Borrar</button>
            </div>
        </div>
        `;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    resetarFormulario();
    mostrarTareas();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    tareas[indice].video = videoEditar.value;
    tareas[indice].audio = audioEditar.value;
    tareas[indice].imagen = imagenEditar.value;
    mostrarTareas();
    cerrarModalEditar();
});

let borrarTarea = (boton, indice) => {
    if (confirm("¿Estas seguro de eliminar este registro?")) {
        boton.parentElement.parentElement.remove();
        tareas.splice(indice, 1);
    }
};

let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    videoEditar.value = tareas[indice].video;
    audioEditar.value = tareas[indice].audio;
    imagenEditar.value = tareas[indice].imagen;
    idTarea.value = indice;
};

mostrarTareas();
