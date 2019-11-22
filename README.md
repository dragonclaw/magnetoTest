# Examen Mercadolibre 

Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar contra los X-Mens. 

Te ha contratado a ti para que desarrolles un proyecto que detecte si un humano es mutante basándose en su secuencia de ADN.

Para eso te ha pedido crear un programa con un método o función con la siguiente firma: 

``boolean isMutant(String[] dna);``

En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN.

Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN. 


| A | T | G | C | G | A |
| ------ | ------ | ------ | ------ |  ------ | ------ |
| C | A | G | T | G | C | 
| T | T | A | T | T | T |
| A | G | A | A | G | G |
| G | C | A | T | C | A |
| T | C | A | C | T | G |


| A | T | G | C | G | A |
| ------ | ------ | ------ | ------ |  ------ | ------ |
| C | A | G | T | G | C |
| T | T | A | T | G | T |
| A | G | A | A | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |



##### No-Mutante Mutante 
Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras iguales, de forma oblicua, horizontal o vertical. 
Ejemplo (Caso mutante):

``String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};``

En este caso el llamado a la función isMutant(dna) devuelve "true". 

Desarrolla el algoritmo de la manera más eficiente posible. 

### Desafíos:

**Nivel 1**: Programa (en cualquier lenguaje de programación) que cumpla con el método pedido por Magneto. 

**Nivel 2**: Crear una API REST, hostear esa API en un cloud computing libre (Google App Engine, Amazon AWS, etc), crear el servicio “/mutant/” en donde se pueda detectar si un humano es mutante enviando la secuencia de ADN mediante un HTTP POST con un Json el cual tenga el siguiente formato: 

`` POST → /mutant/ { “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] } ``

En caso de verificar un mutante, debería devolver un **HTTP** **200-OK**, en caso contrario un **403-Forbidden** 

**Nivel 3**: Anexar una base de datos, la cual guarde los ADN’s verificados con la API. Solo 1 registro por ADN. Exponer un servicio extra "/stats" que devuelva un Json con las estadísticas de las verificaciones de ADN: {“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4} 

Tener en cuenta que la API puede recibir fluctuaciones agresivas de tráfico (Entre 100 y 1 millón de peticiones por segundo). 

Test-Automáticos, Code coverage > 80%, Diagrama de Secuencia / Arquitectura del sistema. 

#### Entregar: 
- Código Fuente (Para Nivel 2 y 3: En repositorio github). (CHECK)
- Instrucciones de cómo ejecutar el programa o la API. (Para Nivel 2 y 3: En README de github). (CHECK)
- URL de la API (Nivel 2 y 3). (CHECK)
- Formato PDF para documentos (Nivel 3). (CHECK)

# IMPORTANTE
Se tomo en cuenta para determinar si un DNA es de un mutante que tenga **MÁS de UNA** secuencia de 4 letras **(desde 2 en adelante)**.

Si se desea que el validador de DNA sea **DESDE UNA** secuencia de 4 letras **(1 en adelante)**, es un simple fix en el codigo.

# PASOS PARA INSTANCIAR
Para instanciar la API de forma local necesitan utilizar el comando 

``$ git clone https://github.com/dragonclaw/magnetoTest.git`` 

Con la ruta de este proyecto de github.

El node utilizado para la instanciacion es el LTS 8.12.0 aunque cualquier version superior deberia funcionar sin problemas

Luego deben de realizar un `` $ npm install``

Esto instalara las dependencias del proyecto **EXPRESSJS, SEQUELIZE entre otros**

Para correr el proyecto deben iniciar el servidor utilizando el comando ``$ npm start`` y el servidor estara corriendo en el puerto 3000.

Ingresar al navegador de su preferencia y colocar [http://localhost:3000](http://localhost:3000)

Si la respuesta del servidor es:

``` json
{
success: true,
msg: "Api working!"
}
```
El servidor esta funcionando correctamente.

# PASOS PARA ACCEDER A LA API HOSTEADA

El host de la API se encuentra en la siguiente URL:
[http://52.39.106.8/:3000](http://52.39.106.8/:3000)
Si la respuesta del servidor es:

``` json
{
success: true,
msg: "Api working!"
}
```
El servidor esta funcionando correctamente.

El proceso node esta corriendo en una instancia de PM2 de un servidor AWS(EC2), igualmente la base de datos esta alojada en AWS (RDS) en una version Free-Tier (t2.micro).

Se adjunta en un PDF la arquitectura del sistema y el diagrama de secuencias

# RUTAS DEL SERVIDOR

```
GET → / {
Parameters:
none,
description:'Root of API'
```
```
POST → /mutant/ {
Parameters:
"dna":[]
Example: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
Description:'Expect an array of strings representing the DNA'
Returns:
Status(200)OK if DNA string array correspond to a mutant,
Status(403)FORBIDDEN if DNA string array correspond to a human

```
```
GET → /stats/
Parameters:
none,
Description:'See stats on the DB of mutants-humans ratio'

Returns:
JSON

{
	count_mutant_dna:  1,
	count_human_dna:  2,
	ratio:  0.5
}

```

### CODE-COVERAGE & TESTING

Las pruebas unitarias se realizaron mediante el comando

``` npm run test ```

Utilizando **Mocha - Chai - Supertest**

En el cual se agregaron las pruebas unitarias para los Endpoints establecidos.

El code-coverage se realizo utilizando **Istambul(nyc)**, se deja adjunto.

```
-------------------------|----------|----------|----------|----------|-------------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------|----------|----------|----------|----------|-------------------|
All files                |    93.51 |       80 |    88.24 |    93.24 |                   |
 magnetoTest             |    77.27 |        0 |        0 |    77.27 |                   |
  app.js                 |    77.27 |        0 |        0 |    77.27 |    25,31,32,35,36 |
 magnetoTest/controllers |    92.31 |    66.67 |      100 |    92.31 |                   |
  indexController.js     |      100 |      100 |      100 |      100 |                   |
  mutantController.js    |    86.67 |    66.67 |      100 |    86.67 |             12,19 |
  statsController.js     |      100 |      100 |      100 |      100 |                   |
 magnetoTest/models      |     91.3 |    77.78 |      100 |     91.3 |                   |
  MutantsDNA.js          |      100 |      100 |      100 |      100 |                   |
  index.js               |       90 |    77.78 |      100 |       90 |             13,30 |
 magnetoTest/routes      |      100 |      100 |      100 |      100 |                   |
  index.js               |      100 |      100 |      100 |      100 |                   |
  mutant.js              |      100 |      100 |      100 |      100 |                   |
  routes.js              |      100 |      100 |      100 |      100 |                   |
  stats.js               |      100 |      100 |      100 |      100 |                   |
 magnetoTest/services    |    98.36 |    96.15 |      100 |    98.18 |                   |
  isMutant.js            |    98.36 |    96.15 |      100 |    98.18 |                11 |
-------------------------|----------|----------|----------|----------|-------------------|
```


