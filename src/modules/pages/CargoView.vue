<template>
  <div class="flex justify-center m-2">
    <div class="class=p-10 max-w-7xl w-full">
      <h1 class="text-bold text-[#EEE0D3] text-4xl mb-5">
    CARGO
  </h1>
  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Cargo es el sistema de compilación y el administrador de paquetes de Rust. La mayoría de
    los habitantes de Rust utilizan esta herramienta para administrar sus proyectos de
    Rust porque Cargo se encarga de muchas tareas por usted, como compilar su código,
    descargar las bibliotecas de las que depende su código y compilar esas bibliotecas. (A las bibliotecas de las que su código necesita las denominamos dependencias ).
  </p>
  <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Creando proyecto con cargo.</h2>
  <pre><code ref="codeBlock" class="bash">cargo new hola_cargo --bin</code></pre>
  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    De esta manera se crea un proyecto binario sin el `--bin` se crea un proyecto de biblioteca.
  </p>
  <pre><code ref="codeBlock" class="bash">
    cargo new hola_cargo
    cd hola_cargo
  </code></pre>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    El primer comando crea un nuevo directorio y un proyecto llamado hello_cargo .
    Hemos llamado a nuestro proyecto hello_cargo y Cargo crea sus archivos en un
    directorio con el mismo nombre. Vaya al directorio hello_cargo y enumere los
    archivos. Verá que Cargo generó dos archivos y un directorio para nosotros:
    un archivo Cargo.toml y un directorio src con un archivo main.rs dentro.
  </p>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    También se ha inicializado un nuevo repositorio Git junto con un archivo
    .gitignore . Los archivos Git no se generarán si se ejecuta cargo new dentro
    de un repositorio Git existente; puede anular este comportamiento utilizando
    <strong>cargo new --vcs=git</strong>.
  </p>

  <h3 class="text-bold text-[#EEE0D3] text-2xl mb-3">Nombre del archivo: Cargo.toml</h3>

  <pre><code ref="codeBlock" class="rust">
    [package]
    name = "hola_cargo"
    version = "0.1.0"
    edition = "2021"
    [dependencies]
  </code></pre>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Este archivo está en formato TOML ( Tom's Obvious, Minimal Language ), que es el
    formato de configuración de Cargo. La primera línea, `[package]`, es un encabezado
    de sección que indica que las siguientes instrucciones configuran un paquete.
    A medida que agreguemos más información a este archivo, agregaremos otras secciones.
  </p>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Las siguientes tres líneas establecen la información de configuración que Cargo
    necesita para compilar tu programa: el nombre, la versión y la edición de Rust
    que se utilizará. Hablaremos de la editionclave en el Apéndice E. La última línea,
    <strong>[dependencies]</strong>, es el comienzo de una sección para que enumeres
    cualquiera de las dependencias de tu proyecto. En Rust, los paquetes de código se
    conocen como crates . No necesitaremos ningún otro crate para este proyecto, pero
    sí en el primer proyecto del Capítulo 2, por lo que utilizaremos esta sección de
    dependencias. Ahora abre src/main.rs y echa un vistazo:
  </p>

  <pre><code ref="codeBlock" class="rust">
    fn main() {
    println!("Hello, world!");
    }
  </code></pre>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Cargo ha generado un programa “¡Hola, mundo!”, ¡tal como el que escribimos
    anteriormente, las diferencias entre nuestro proyecto y el proyecto que generó
    Cargo son que Cargo colocó el código en el directorio src y tenemos un archivo
    de configuración Cargo.toml en el directorio superior.
  </p>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Cargo espera que los archivos de origen se encuentren dentro del directorio src.
    El directorio de proyecto de nivel superior es solo para archivos README,
    información de licencia, archivos de configuración y cualquier otra cosa que no
    esté relacionada con el código. El uso de Cargo le ayuda a organizar sus proyectos.
    Hay un lugar para todo y todo está en su lugar.
  </p>

  <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Construcción y gestión de un proyecto de cargo</h2>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Ahora veamos qué es diferente cuando creamos y ejecutamos el programa "Hola mundo"
    con Cargo. Desde el directorio hola_cargo , crea tu proyecto ingresando el
    siguiente comando:
  </p>

  <pre><code ref="codeBlock" class="bash">
    cargo build
    Compiling hello_cargo v0.1.0 (file:///projects/hola_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 2.85 secs
  </code></pre>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Este comando crea un archivo ejecutable en target/debug/hola_cargo
    (o target\debug\hola_cargo.exe en Windows) en lugar de en el directorio actual.
    Debido a que la compilación predeterminada es una compilación de depuración,
    Cargo coloca el binario en un directorio llamado debug.
    Puede ejecutar el ejecutable con este comando:
  </p>
  <pre><code ref="codeBlock" class="bash">./target/debug/hola_cargo # or .\target\debug\hola_cargo.exe on Windows</code></pre>
  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Acabamos de crear un proyecto con cargo buildy lo ejecutamos con
    ./target/debug/hello_cargo, pero también podemos usar cargo run para
    compilar el código y luego ejecutar el ejecutable resultante,
    todo en un solo comando:
  </p>
  <pre><code ref="codeBlock" class="bash">
    cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs
    Running `target/debug/hello_cargo`
    Hello, world!
  </code></pre>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Usarlo cargo run es más conveniente que tener que recordar ejecutar cargo build
    y luego usar la ruta completa al binario, por eso la mayoría de los desarrolladores
    usan cargo run. Tenga en cuenta que esta vez no vimos ningún resultado que indicara
    que Cargo estaba compilando hello_cargo. Cargo se dio cuenta de que los archivos no
    habían cambiado, por lo que no volvió a compilar, sino que simplemente ejecutó el binario.
    Si hubiera modificado su código fuente, Cargo habría reconstruido el proyecto antes de
    ejecutarlo y habría visto este resultado:
  </p>
  <pre><code ref="codeBlock" class="bash">
    cargo run
    Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.33 secs
    Running `target/debug/hello_cargo`
    Hello, world!
  </code></pre>

  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Cargo también proporciona un comando llamado cargo check. Este comando verifica
    rápidamente el código para asegurarse de que se compile, pero no produce un ejecutable:
  </p>

  <pre><code ref="codeBlock" class="bash">
    cargo check
    Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)
  Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs
  </code></pre>

  <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Construyendo para la liberación</h2>
  <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
    Cuando tu proyecto esté finalmente listo para su lanzamiento, puedes usar
    <strong>cargo build --release</strong> para compilarlo con optimizaciones. Este comando
    creará un ejecutable en <strong>target/release</strong> en lugar de <strong>target/debug</strong>.
    Las optimizaciones hacen que tu código Rust se ejecute más rápido, pero al activarlas
    se alarga el tiempo que tarda tu programa en compilarse. Es por eso que hay dos perfiles
    diferentes: uno para desarrollo, cuando quieres reconstruir de forma rápida y frecuente,
    y otro para construir el programa final que le darás a un usuario que no se reconstruirá
    repetidamente y que se ejecutará lo más rápido posible. Si estás evaluando el tiempo de
    ejecución de tu código, asegúrate de ejecutar <strong>cargo build --release</strong> y evaluar con
    el ejecutable en <strong>target/release</strong>.
  </p>

    </div>
  </div>

</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import hljs from 'highlight.js/lib/core'
    import rust from 'highlight.js/lib/languages/rust'
    import bash from 'highlight.js/lib/languages/bash'
    import 'highlight.js/styles/github-dark.css' // puedes cambiar estilo

    hljs.registerLanguage('rust', rust)
    hljs.registerLanguage('bash',bash)

    const codeBlock = ref<HTMLElement | null>(null)

    onMounted(() => {
        const blocks = document.querySelectorAll('code')
          blocks.forEach((block) => {
          hljs.highlightElement(block as HTMLElement)
        })
})
</script>
