<template>
  <div class="flex justify-center m-2">
    <div class="p-10 max-w-7xl w-full">

      <h1 class="text-bold text-[#EEE0D3] text-4xl mb-5">FUNCIONES</h1>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Función básica</h2>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
      </code></pre>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Función con parámetros</h2>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    another_function(5);
}

fn another_function(x: i32) {
    println!("The value of x is: {x}");
}
      </code></pre>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Funciones con valores de retorno</h2>
      <pre><code ref="codeBlock" class="rust">
fn five() -> i32 {
    5
}

fn main() {
    let x = five();

    println!("The value of x is: {x}");
}
      </code></pre>

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
