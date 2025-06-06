<template>
  <div class="flex justify-center m-2">
    <div class="class=p-10 max-w-7xl w-full">
      <h1 class="text-bold text-[#EEE0D3] text-5xl mb-5">Instalacion de rust</h1>
      <section>
        <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">
          En sistemas Unix (Linux, macOS):
        </h2>
        <pre><code ref="codeBlock" class="bash my-5" >curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh </code></pre>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          Una vez que se complete la instalación, cierra y vuelve a abrir la terminal o
          ejecuta el siguiente comando para que los cambios tengan efecto:
        </p>
        <pre><code ref="codeBlock" class="bash my-5">source $HOME/.cargo/env</code></pre>
      </section>

      <section>
        <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">En sistemas Windows</h2>
        <ul class="text-[#EEE0D3] p-3 my-3 text-2xl leading-relaxed">
          <li>1 <strong>- Ve al sitio web oficial de Rustup: https://rustup.rs/.</strong></li>
          <li>2 <strong>- Descarga el instalador de Rustup haciendo clic en el botón "Descargar Rustup"</strong></li>
          <li>3 <strong>- Ejecuta el archivo descargado (por lo general, tiene un nombre similar a "rustup-init.exe")</strong></li>
          <li>4 <strong>- Se podra ver la version de rust instalada con rustc --version</strong></li>
        </ul>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          Si ves esta información, ¡has instalado Rust correctamente! Si no ves esta
          información, comprueba que Rust esté en la %PATH% variable de tu sistema de la siguiente manera.
        </p>

        <div class="commands">
          <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">En Windows CMD, utilice:</p>
          <pre><code ref="codeBlock" class="bash my-5">echo %PATH%</code></pre>

          <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">En PowerShell, utilice:</p>
          <pre><code ref="codeBlock" class="bash my-5">echo $env:Path</code></pre>

          <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">En Linux y macOS, utilice:</p>
          <pre><code ref="codeBlock" class="bash my-5">echo $PATH</code></pre>
        </div>
      </section>

      <section>
        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">Si no aparece en el PATH en linux se realiza lo siguiente</p>
        <pre><code ref="codeBlock" class="bash my-5">export PATH="$HOME/.cargo/bin:$PATH"</code></pre>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">luego se reinicia siempre y cuando la terminal sea bash</p>
        <pre><code ref="codeBlock" class="bash my-5">source ~/.bashrc  # O ~/.bash_profile, ~/.zshrc dependiendo de tu shell</code></pre>
      </section>

      <section>
        <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Actualización y desinstalación</h2>
        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          Una vez que se instala Rust a través de rustup, es fácil actualizar a
          una versión recién lanzada. Desde su shell, ejecute el siguiente script
          de actualización:
        </p>
        <pre><code ref="codeBlock" class="bash my-5">rustup update</code></pre>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          Para desinstalar Rust y rustup, ejecute el siguiente script de desinstalación
          desde su shell:
        </p>
        <pre><code ref="codeBlock" class="bash my-5">rustup self uninstall</code></pre>
      </section>

      <section>
        <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Documentación local</h2>
        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          La instalación de Rust también incluye una copia local de la documentación para
          que puedas leerla sin conexión. Ejecuta rustup doc para abrir la documentación local
          en tu navegador. Cada vez que la biblioteca estándar proporciona un tipo o una
          función y no está seguro de qué hace o cómo usarlo, utilice la documentación de
          la interfaz de programación de aplicaciones (API) para averiguarlo.
        </p>
      </section>

      <section>
        <h2 class="text-bold text-[#EEE0D3] text-3xl my-3">Primer programa en rust</h2>
        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">Creamos un archivo con extension .rs en este caso `hola_mundo.rs`</p>
        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">hola_mundo.rs</p>
        <pre><code ref="codeBlock" class="rust my-5">
          fn main() {
              println!("Hola mundo....")
          }
        </code></pre>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          Luego ubicado en el directorio donde se encuentra el archivo `hola_mundo.rs` vamos
          a compilar
        </p>
        <pre><code ref="codeBlock" class="bash my-5">rustc hola_mundo.rs</code></pre>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          Despues de compilar este genera un executable binario que podemos ejecutar de la
          siguiente manera en Linux
        </p>
        <pre><code ref="codeBlock" class="bash my-5">./hola_mundo</code></pre>
      </section>

      <section>
        <h2 class="text-bold text-[#EEE0D3] text-4xl my-3 italic" >NOTA: Para que se pueda ejecutar el compilador de rust tiene que estar instalado
          un compilador de c++ en la pc de lo contrario se puede instalar</h2>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">compilador de C en Unix</p>
        <pre><code ref="codeBlock" class="bash my-5">sudo apt install gcc</code></pre>

        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">compilador de C++ en Unix</p>
        <pre><code ref="codeBlock" class="bash my-5">sudo apt install g++</code></pre>
      </section>

      <section>
        <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">IDE y cadenas de herramientas de Rust</h2>
        <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
          Para el lenguaje de programación Rust, varios entornos de desarrollo integrados
          (IDE) y editores ofrecen un excelente soporte. Visual Studio Code es muy popular
          entre los desarrolladores de Rust gracias a su compatibilidad con Rust a través
          de los complementos "Rust Language Server" o "rust-analyzer". Otra opción popular
          es RustRover , un IDE dedicado al desarrollo en Rust de JetBrains. Además,
          también se utilizan `Sublime Text` y `Atom` con sus respectivos complementos de
          mejora de Rust. Para un enfoque más centrado en la terminal, Vim y Emacs
          incluyen modos Rust. Estos IDE y editores ofrecen diversas funciones, como
          autocompletado, resaltado de sintaxis y herramientas de depuración, que resultan
          útiles para la programación en Rust.
        </p>
      </section>
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
