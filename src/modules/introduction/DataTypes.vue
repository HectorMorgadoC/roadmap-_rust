<template>
  <div class="flex justify-center m-2">
    <div class="p-10 max-w-7xl w-full">

      <h1 class="text-bold text-[#EEE0D3] text-5xl mb-5">TIPOS DE DATOS</h1>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipos de datos escalares</h2>
      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        Un tipo escalar representa un valor único. Rust tiene cuatro tipos escalares principales: números enteros, números de punto flotante, booleanos y caracteres.
      </p>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipos de numeros enteros</h2>

      <h3 class="text-bold text-[#EEE0D3] text-3xl my-2">Enteros con signo</h3>
      <pre>
      <code ref="codeBlock" class="rust">
        let uno: i8 = -10; //8 bits range -128 a 127
        let dos: i16 = -10; //16 bits range -32768 a 32767
        let tres: i32 = -10; //32 bits range -2127483648 a 2127483647
        let cuatro: i64 = -10; //64 bits range -9223372036854775807 a 9223372036854775806
        let cinco: i128 = -10; //64 bits range -170141183460469231731687303715884105728 a 170141183460469231731687303715884105727
        let seis: isize = -10; // signo de arco, 8 bits en arquitectura de 64 bits 4 bits en arquitectura 32 bits
      </code>
      </pre>

      <h3 class="text-bold text-[#EEE0D3] text-3xl my-2">Enteros sin signo</h3>
      <pre>
      <code ref="codeBlock" class="rust">
        let uno: u8 = 10; //8 bits range 0 a 255
        let dos: u16 = 10; //16 bits range 0 a 65535
        let tres: u32 = 10; //32 bits range 0 a 4294967295
        let cuatro: u64 = 10; //64 bits range 0 a 18446744073709551615
        let cinco: u128 = 10; //128 bits range 0 a 340282366920938463463374607431768211455
        let seis: isize = -10; // sin signo de arco, 8 bits en arquitectura de 64 bits 4 bits en arquitectura 32 bit
      </code>
      </pre>

      <h3 class="text-bold text-[#EEE0D3] text-3xl my-2">Literales enteros</h3>
      <pre>
        <code ref="codeBlock" class="rust">
        let decimal = 10_255; // 10255
        let hexadecimal = 0xff; // 255
        let octal = 0o377; //255
        let binario = 0b110110 //54
        </code>
      </pre>

      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        <strong class="font-bold">NOTA:</strong> <em>desbordamientos de enteros</em> : Digamos que tienes una variable de tipo <code>u8</code> que puede contener valores entre 0 y 255.
        Si intentas cambiar la variable a un valor fuera de ese rango, como 256, se producirá un desbordamiento de enteros, lo que puede dar lugar a uno de dos comportamientos.
        En modo depuración, Rust hace que el programa entre en pánico; en modo release, realiza un ajuste de complemento a dos.
      </p>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipos de numeros flotantes</h2>
      <pre>
        <code ref="codeBlock" class="rust">
        let numero_flotante: f64 = 45.67; // F64
        let otrioflotamte :f32 = 34.67; //F32
        </code>
      </pre>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipos booleano</h2>
      <pre>
        <code ref="codeBlock" class="rust">
        let t = true;
        let f: bool = false; // de manera esplicita
        </code>
      </pre>

      <h3 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipo de caracter</h3>
      <pre>
        <code ref="codeBlock" class="rust">
        let c = 'z';
        let z: char = 'ℤ'; // with explicit type annotation
        let heart_eyed_cat = '😻';
        </code>
      </pre>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipos de datos compuestos</h2>
      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        Los tipos compuestos pueden agrupar varios valores en un solo tipo. Rust tiene dos tipos compuestos primitivos: tuplas y matrices.
      </p>

      <h3 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipo tupla</h3>
      <pre>
        <code ref="codeBlock" class="rust">
        let tup: (i32, f64, u8) = (500, 6.4, 1);
        println!("{:?}",tup) // (500, 6.4, 1)
        </code>
      </pre>

      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">Patron para desestructurar:</p>
      <pre>
        <code ref="codeBlock" class="rust">
        let tup: (i32, f64, u8) = (500, 6.4, 1);
        let (x, y, z) = tup;
        println!("el valor de y es : {y}") // el valor de y es 6.4
        </code>
      </pre>

      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">De manera individual:</p>
      <pre>
        <code ref="codeBlock" class="rust">
        let tup: (i32, f64, u8) = (500, 6.4, 1);
        let y = tup.1;
        println!("el valor de y es : {y}") // el valor de y es 6.4
        </code>
      </pre>

      <h3 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipo array</h3>
      <pre>
        <code ref="codeBlock" class="rust">
        let a: [i32; 5] = [1, 2, 3, 4, 5];
        </code>
      </pre>

      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        También puede inicializar un arreglo para que contenga el mismo valor para cada elemento:
      </p>

      <pre><code ref="codeBlock" class="rust">
      let a = [3; 5];
      </code></pre>

      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">Acceder a un valor por medio del indice</p>
      <pre><code ref="codeBlock" class="rust">
      let a = [1, 2, 3, 4, 5];
      let first = a[0]; // el valor es 1
      let second = a[1]; // el valor es 2
      </code></pre>

      <p class="text-[#EEE0D3] py-3 text-2xl font-medium leading-relaxed">
        <strong class="font-bold">NOTA:</strong> en los arreglos, si se intenta acceder a un índice que no exista, el compilador entra en pánico.
      </p>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipo de datos de colección</h2>

      <h3 class="text-bold text-[#EEE0D3] text-3xl my-3">Tipo vector</h3>
      <pre><code ref="codeBlock" class="rust">
          let vec:Vec&lt;i32&gt; = vec![1, 2, 3];
      </code></pre>

      <h3 class="text-bold text-[#EEE0D3] text-3xl my-3">Tipo hashmap</h3>
      <pre><code ref="codeBlock" class="rust">
      use std::collections::HashMap;
      let mut mapa = HashMap::new();
      mapa.insert("clave", 10);
      </code></pre>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Tipo String (cadena dinámica)</h2>
      <pre><code ref="codeBlock" class="rust">
      let titulo: String = String::from("Caballo viejo");
      </code></pre>

      <h2 class="text-bold text-[#EEE0D3] text-4xl my-3">Literal cadena (referencia de secuencia de caracteres)</h2>
      <pre><code ref="codeBlock" class="rust">
      let titulo: &str = "Caballo viejo";
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
