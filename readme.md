### app-angular-base

**Recordar adjuntar uno de los bloques con estilo para complementar este bloque.**

**se recomienda el uso de node 16 para tener compatibilidad con la libreria de mutation testing.**

Este bloque contiene la estructura necesaria para construir un proyecto en angular siguiendo la guia de estilos de angular.

[https://angular.io/guide/styleguide#style-guide](https://angular.io/guide/styleguide#style-guide)

Las caracter&iacute;sticas principales son
- Soporte de enrutamiento
- Manejo de seguridad
- Soporte lazy loading
- Arquitectura core-shared-feature
- Directiva para mostrar errores de formularios
- Pipe para uso de TrackBy dentro de los ngFor
- Pruebas unitarias y e2e
- Manejo centralizado de errores
- Libreria para realizar Mutation testing

#### Estructura del proyecto

Los archivos de la aplicaci&oacute;n se encuentran en la subcarpeta src. Las pruebas iniciales correspondientes de extremo a extremo se encuentran en la subcarpeta e2e.

El proyecto base est&aacute; estructurado en los m&oacute;dulos feature, shared y core. Asegurando una separaci&oacute;n adecuada de las preocupaciones, lo que facilitar&aacute; la escalabilidad a medida que su aplicaci&oacute;n crezca. Lo siguiente describe brevemente cada tipo de m&oacute;dulo.

##### M&oacute;dulo core
Deben estar lo transversal y de una sola instancia en la aplicaci&oacute;n. Por ejemplo: NavBar o interceptor.

##### M&oacute;dulo feature
Deben estar los componentes que implementan funcionalidades especificas de la aplicaci&oacute;n. Por ejemplo, el componente datos de contacto el cual es el componente que implementa la feature de contacto. Es posible tener compartidos dentro de esta feature.

##### M&oacute;dulo shared
Deben estar componentes o utilidades comunes a las diferentes feature. Por ejemplo, un componente de un bot&oacute;n azul que usted desea repetir en varios lugares. Un filtro para ser utilizado en todos los componentes.

#### Calidad en las pruebas:
El bloque cuenta con la libreria Stryker la cual nos ayuda a validar la calidad de las pruebas que estamos desarrollando.
Esta libreria funciona bajo el principio de mutation testing y se recomienda ejecutar la tarea **test:mutation** y luego revisar 
el informe generado. Siempre se debe buscar tener los mutantes vivos en cero.  

# todas las pruebas con mutation
$ npm run test:mutation

Despu&eacute;s de importar el proyecto se muestra de la siguiente manera


![enter image description here](https://drive.google.com/uc?export=download&id=1Kp5uXDxH42HE-1y1qkgx5nzUeeYnCq7A)


Hash de git relacionado: 1e220df2