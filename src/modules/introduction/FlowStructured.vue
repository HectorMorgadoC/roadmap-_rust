<template>
  <div class="flex justify-center m-2">
    <div class="p-10 max-w-7xl w-full">

      <h1 class="text-bold text-[#EEE0D3] text-4xl mb-5">ESTRUCTURAS DE FLUJO DE CONTROL</h1>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Condicionales ( Expresion if )</h2>
      <pre><code ref="codeBlock" class="rust">
    fn main() {
        let number = 3;

        if number &lt; 5 {
        println!("condition was true");
        } else {
        println!("condition was false");
        }
    }
      </code></pre>
      <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
        <strong>NOTA:</strong> Una de las cosas que rust tiene es que en la condición solo leerá un valor booleano,
        a diferencia de otros lenguajes que toman la existencia de un valor como booleano, rust no.
      </p>

      <h3 class="text-bold text-[#EEE0D3] text-2xl mb-3">Manejo de múltiples condiciones con else if</h3>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
      </code></pre>

      <h3 class="text-bold text-[#EEE0D3] text-2xl mb-3">Uso de if en una declaración let</h3>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}");
}
      </code></pre>
      <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
        <strong>NOTA:</strong> En este caso el tipo de dato que devolverán las condiciones tanto en el <code>if</code> como en el <code>else</code> deben ser el mismo, de lo contrario este generará un error.
      </p>

      <h2 class="text-bold text-[#EEE0D3] text-3xl mb-3">Bucles</h2>
      <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
        <strong>Rust tiene tres tipos de bucles: loop, while, for</strong>
      </p>

      <h3 class="text-bold text-[#EEE0D3] text-2xl mb-3">Bucle loop</h3>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    loop {
        println!("again!");
    }
}
// again!..........infinidades de veces
      </code></pre>

      <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">Otro ejemplo pero con un flujo de control:</p>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            // El break sirve para salir del bucle
            break counter * 2;
        }
    };
    println!("The result is {result}");
}
      </code></pre>
      <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">
        <strong>NOTA:</strong> El <code>break</code> sirve para salir del bucle, y <code>return</code> sirve para salir de la función donde se aplica.
      </p>

      <h3 class="text-bold text-[#EEE0D3] text-2xl mb-3">Bucle while</h3>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let mut number = 3;
    while number != 0 {
        println!("{number}!");
        number -= 1;
    }
    println!("LIFTOFF!!!");
}
      </code></pre>

      <h3 class="text-bold text-[#EEE0D3] text-2xl mb-3">Bucle for</h3>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let a = [10, 20, 30, 40, 50];

    for numbers in a {
        println!("el numero es: {numbers}")
    }
}
      </code></pre>

      <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">Para darle rango al for se realiza de la siguiente manera:</p>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let a = [10, 20, 30, 40, 50];

    for numbers in 1..3 {
        println!("el indice es: {}  y el valor {}",numbers,a[numbers])
    }
}
      </code></pre>

      <p class="text-[#EEE0D3] p-3 text-2xl font-medium leading-relaxed">Para poder usar el índice de la iteración:</p>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let a = [10, 20, 30, 40, 50];

    for (indice, numbers) in a.iter().enumerate() {
        println!("el indice es: {}  y el valor {}",indice,numbers)
    }
}
      </code></pre>

      <h3 class="text-bold text-[#EEE0D3] text-2xl mb-3">Etiquetas</h3>
      <pre><code ref="codeBlock" class="rust">
fn main() {
    let s = [[1,2,3],[4,5,6],[7.8.9]];
    let mut elements_searched = 0;
    let target_value = 10;
    'ouner: for i in 0..=2 {
        for j in 0..=2 {
            elements_searched += 1;
            if s[i][j] == target_value {
                break 'ouner;
            }
        }
    }
    print!("elementos travesados: {elements_searched}")
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
