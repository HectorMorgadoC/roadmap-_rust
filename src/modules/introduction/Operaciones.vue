<template>
  <div class="flex justify-center m-2">
    <div class="p-10 max-w-7xl w-full">

      <h1 class="text-bold text-[#EEE0D3] text-4xl mb-5">OPERACIONES</h1>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Operaciones Matemáticas</h2>
      <pre><code ref="codeBlock" class="rust">
let a = 10;
let b = 5;
println!("Suma: {}", a + b);
println!("Resta: {}", a - b);
println!("Multiplicación: {}", a * b);
println!("División: {}", a / b);
println!("Módulo: {}", a % b);
      </code></pre>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Operaciones Lógicas</h2>
      <pre><code ref="codeBlock" class="rust">
let x = true;
let y = false;
println!("AND lógico: {}", x && y);
println!("OR lógico: {}", x || y);
println!("NOT lógico: {}", !x);
      </code></pre>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Operaciones Comparativas</h2>
      <pre><code ref="codeBlock" class="rust">
let c = 15;
let d = 20;
println!("Igualdad: {}", c == d);
println!("Desigualdad: {}", c != d);
println!("Mayor que: {}", c > d);
println!("Menor que: {}", c < d);
      </code></pre>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Operadores de asignación</h2>
      <pre><code ref="codeBlock" class="rust">
let mut e = 25;
e += 5;
println!("Operador de asignación: {}", e);
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
