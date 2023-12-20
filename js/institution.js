export class Comentario {
constructor(usuario, star, descripcion) {
    this.usuario = usuario;
    this.star = star;
    this.descripcion = descripcion;
}
}

export class Institucion {
constructor(nombre, descripcion, imagen, direccion, zona, tipo, contacto, otros, sector, modalidad, comentarios) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.direccion = direccion;
    this.zona = zona;
    this.tipo = tipo;
    this.contacto = contacto;
    this.otros = otros;
    this.sector = sector;
    this.modalidad = modalidad;
    this.comentarios = comentarios || [];
    this.active = true;
}
}