# DAW_parcial2_A01746540

## Instrucciones para probarlo

Esta conectado a la base de datos de la estancia 18.234.222.26
Use una base de datos llamada ciudades_A01746540 para evitar que se cruce con la de mi compañera Maxine
Corre sobre el puerto 8084

### Para crear un objeto
No permite duplicados y si lo intentas se incrementa el contador

POST
```
http://localhost:8084/ciudades/agregarCiudad
```
```
{
    "ciudad":"Washigton DC",
    "pais":"EEUU",
    "descripcion":"Monumento Washington",
    "contador":1
}
```
### Para obtener la lista de ciudades POR PAIS
GET
```
http://localhost:8084/ciudades/obtenerCiudadporPais
```
```
{
    "pais":"México"
}
```
### Para obtener la lista de ciudades TOTAL
GET
```
http://localhost:8084/ciudades/obtenerCiudad
```
```
{
    "pais":"México"
}
```
### Para borrar una ciudad
POST
```
http://localhost:8084/ciudades/borrarCiudad
```
```
{
    "ciudad":"Brasil"
}
```
### Para actualizar una ciudad
POST
```
http://localhost:8084/ciudades/actualizarCiudad
```
```
{
    "ciudad":"México",
    "pais":"Estados Unidos Mexicanos",
    "descripcion":"Hola, este es un cambio de descripción"
}
```
