<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="flex flex-col justify-center items-start h-auto m-20 font-sans font-semibold">
        <h1>¿Qué es Rust?</h1>
<p>
  Rust es un lenguaje de programación compilado, de propósito general y multiparadigma (aunque no soporta las características de los mismos en su totalidad) que está siendo desarrollado por Fundación Rust. Es un lenguaje de programación multiparadigmático que soporta programación funcional pura, por procedimientos, imperativa y orientada a objetos.
</p>
<p>
  Rust es un lenguaje de tipado estático, lo que significa que el tipo de una variable se determina durante la compilación, y tiene una extensa biblioteca llamada Biblioteca Estándar, que proporciona un rico conjunto de funciones, algoritmos y estructuras de datos para diversas tareas.
</p>

<h2>¿Por qué Rust?</h2>
<p>
  Rust cuenta con características imprescindibles para tomar en cuenta al momento de escogerla como tecnología principal o para implementar en tus proyectos. Aquí una lista de las características principales de Rust:
</p>

<ul>
  <li><strong>Seguridad:</strong> Rust se destaca por su sistema de seguridad de memoria que atrapa errores de acceso no autorizado y problemas de asignación de memoria en tiempo de compilación, lo que evita vulnerabilidades comunes como desbordamientos de búfer y fugas de memoria.</li>
  <li><strong>Rendimiento:</strong> Rust proporciona un control preciso sobre la asignación y liberación de memoria, lo que permite la creación de código altamente eficiente sin sacrificar la seguridad.</li>
  <li><strong>Concurrencia:</strong> Rust ofrece herramientas de concurrencia seguras que facilitan la escritura de programas paralelos y concurrentes sin preocuparse por problemas de carrera.</li>
  <li><strong>Legibilidad y mantenibilidad:</strong> Su sistema de tipos y concordancia de patrones promueve un código más legible y mantenible, lo que es fundamental en proyectos a largo plazo.</li>
  <li><strong>Versatilidad:</strong> Rust es adecuado para una amplia gama de aplicaciones, desde desarrollo de sistemas hasta aplicaciones web y embebidas.</li>
</ul>

<pre><code>
NOTA: Empresas notables, como Mozilla (el navegador Firefox está parcialmente escrito en Rust),
Dropbox (utiliza Rust para ciertas partes de su infraestructura de almacenamiento),
y Amazon Web Services (AWS utiliza Rust para herramientas internas)
</code></pre>

<h2>Canales de Rust</h2>
<ul>
  <li>
    <strong>1. Canal Stable:</strong> Este es el canal más estable y confiable. Las versiones de Rust en este canal han pasado por rigurosas pruebas y se consideran adecuadas para su uso en producción.
  </li>
  <li>
    <strong>2. Canal Beta:</strong> En este canal, se prueban características nuevas que se han considerado lo suficientemente maduras como para ser probadas en un entorno más amplio antes de ser lanzadas oficialmente en el canal estable. Aunque estas versiones son más estables que las de Nightly, aún pueden contener algunos errores o cambios que podrían afectar la compatibilidad con versiones anteriores.
  </li>
  <li>
    <strong>3. Canal Nightly:</strong> Este es el canal más experimental y menos estable. Aquí es donde se introducen las características más nuevas y emocionantes de Rust. Estas versiones se actualizan diariamente con el trabajo más reciente del equipo de desarrollo de Rust. Aunque las características en este canal pueden ser emocionantes, también pueden ser menos confiables y más propensas a errores.
  </li>
</ul>

<h2>Seguridad de la memoria y abstracciones de costo cero</h2>
<p>
  Rust es un lenguaje de programación de sistemas que se ejecuta increíblemente rápido, previene errores de segmentación y garantiza la seguridad de los subprocesos. Cuenta con la característica de "seguridad de memoria sin recolección de elementos no utilizados", un atributo que distingue a Rust.
</p>
<p>
  La "seguridad de memoria" consiste en garantizar que el software no cause fugas de memoria ni punteros colgantes al acceder a la memoria del sistema. En Rust, la seguridad de la memoria se logra mediante un sistema llamado propiedad, con un conjunto de reglas que el compilador verifica en tiempo de compilación. Este sistema de propiedad elimina la necesidad de recolección de elementos no utilizados o la gestión manual de memoria, asegurando así la ejecución rápida del software y un entorno de memoria más seguro.
</p>
<p>
  Las funciones de gestión de memoria de Rust incluso admiten programación concurrente, ofreciendo opciones de acceso a estados compartidos y mutables que garantizan la seguridad de los subprocesos y reducen el riesgo de inseguridad de los mismos.
</p>
<p>
  La abstracción de coste cero es otro concepto clave que Rust implementa. En general, las abstracciones en los lenguajes de programación permiten escribir código a alto nivel (como en Python) y ejecutarlo a bajo nivel (como en C). Sin embargo, estas abstracciones suelen tener un coste en tiempo de ejecución.
</p>
<p>
  Por el contrario, Rust busca proporcionar muchas abstracciones útiles, como iteradores y cierres, que no sacrifican el rendimiento en tiempo de ejecución. Esto significa que se puede escribir código de alto nivel en Rust, y el compilador de Rust lo optimizará para que se ejecute tan rápido como el código de bajo nivel escrito manualmente.
</p>


    </div>

</template>
