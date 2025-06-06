<template>
  <div class="flex justify-center m-2">
    <div class="p-10 max-w-7xl w-full">

      <h1 class="text-bold text-[#EEE0D3] text-5xl mb-5">VARIABLES Y CONSTANTES</h1>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">VARIABLES</h2>
      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        Las variables en RUST son inmutables. Este es uno de los muchos incentivos que Rust te da para escribir tu código de una manera que aproveche la seguridad y la simultaneidad fácil que ofrece Rust.
        Sin embargo, aún tienes la opción de hacer que tus variables sean mutables. Para declarar una variable se usa la palabra reservada <code>let</code>.
      </p>

      <pre>
        <code ref="codeBlock" class="rust">
          let variable_numerica = 10;
          /* Para mostrar una variable de tipo de dato primitivo se usa dentro
          de comillas {} para decir que a partir de aqui mostrara el valor de
          la variable */
          println!("{}",variable_numerica)
        </code>
      </pre>

      <p class="text-[#EEE0D3] p-y3 text-2xl font-medium leading-relaxed">
        La variable <code>let variable_numerica</code> por defecto es inmutable, para que pueda ser mutable se le debe agregar la palabra reservada <code>mut</code>
      </p>

      <pre>
        <code ref="codeBlock" class="rust">
          let mut variable_numerica = 10;
          /* Para mostrar una variable de tipo de dato primitivo se usa dentro
          de comillas {} para decir que a partir de aqui mostrara el valor de
          la variable */
          variable_numerica = 20;
          println!("{}",variable_numerica)
        </code>
      </pre>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">CONSTANTES</h2>
      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        Al igual que las variables inmutables, las constantes son valores que están vinculados a
        un nombre y no pueden cambiar, pero existen algunas diferencias entre constantes y variables.
      </p>
      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        En primer lugar, no se permite el uso <code>mut</code> de constantes. Las
        constantes no son inmutables de forma predeterminada, sino que siempre lo son.
        Las constantes se declaran utilizando la palabra clave <code>const</code> en
        lugar de <code>let</code> y el tipo del valor debe estar anotado.
      </p>

      <pre>
        <code ref="codeBlock" class="rust">
            const THREE_IN_HOURS_OR_SECONDS :i32 = 60 * 60 * 3;
        </code>
      </pre>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">SOMBREADO</h2>
      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        Se le llama sombreado cuando una variable es declarada con un valor y luego es declarada nuevamente con otro valor. Los rustaceanos dicen que la primera variable está ensombrecida por la segunda,
        lo que significa que la segunda variable es lo que el compilador verá cuando uses el nombre de la variable.
      </p>
      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        En efecto, la segunda variable eclipsa a la primera, tomando cualquier uso del nombre de la variable para sí misma hasta que ella misma esté ensombrecida o el alcance termine.
        Podemos hacer sombra a una variable usando el mismo nombre y repitiendo el uso de la palabra clave <code>let</code> de la siguiente manera:
      </p>

      <pre>
        <code ref="codeBlock" class="rust">
          let x = 5;
          let x = x + 1;
          {
              let x = x * 2;
              println!(" el valor de x en el primer scope es: {x}");
          }
          println!(" el valor de x es : {x}");
          // el valor de x en el primer scope es: 12
          // el valor de x es : 6
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
