// função de somar

function soma(a, b) {
    return new Promise((resolve, reject) => {
      if (a === 0 || b === 0) {
        reject("Operação desnecessária");
      } else {
        const resultado = a + b;
        if (resultado < 0) {
          reject("A calculadora deve retornar apenas valores positivos");
        } else {
          resolve(resultado);
        }
      }
    });
  }

// função de subtrair

  function subtracao(minuendo, subtraendo) {
    return new Promise((resolve, reject) => {
      if (minuendo === 0 || subtraendo === 0) {
        reject("Operação inválida");
      } else {
        const resultado = minuendo - subtraendo;
        if (resultado < 0) {
          reject("A calculadora só pode retornar valores positivos");
        } else {
          resolve(resultado);
        }
      }
    });
  }

// função de multiplicar


  function multiplicacao(a, b) {
    return new Promise((resolve, reject) => {
      if (a < 0 || b < 0) {
        reject("A calculadora só pode retornar valores positivos");
      } else {
        const resultado = a * b;
        resolve(resultado);
      }
    });
  }
  


// criando uma função, chamando outras funções:

  async function calculos() {
    try {
      const resultadoSoma = await soma(5, 6);
      console.log("Soma:", resultadoSoma);
  
      const resultadoSubtracao = await subtracao(10, 3);
      console.log("Subtração:", resultadoSubtracao);
  
      const resultadoMultiplicacao = await multiplicacao(4, 6);
      console.log("Multiplicação:", resultadoMultiplicacao);
    } catch (error) {
      console.error("Erro:", error);
    }
  }


  // chamando a função

  calculos();
  