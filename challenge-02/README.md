# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1, n2) {
	return n1 + n2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaNumber = soma(30, 5);
somaNumber + 5;

// Qual o valor atualizado dessa variável?
40

// Declare uma nova variável, sem valor.
var westeros;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuiValor(val) {
	westeros = val;

	return `O valor da variável agora é ${westeros}`;
}

// Invoque a função criada acima.
atribuiValor(27);

// Qual o retorno da função? (Use comentários de bloco).
/*
	O valor da variável agora é 27
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function mult(n1, n2, n3) {
  
  if(arguments.length < 3) {
  	console.log('Preencha todos os valores corretamente!');
  }
  else {
  	return (n1 * n2 * n3) + 2;
  }
  
}

// Invoque a função criada acima, passando só dois números como argumento.
mult(2, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
	Preencha todos os valores corretamente!
	undefined
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
mult(2, 4, 5)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
	42
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calc(n1, n2, n3) {
  
  if(arguments.length >= 0 && arguments.length <= 3) {
      if(arguments.length === 1) {
        return n1;
      }
      else if(arguments.length === 2) {
        return n1 + n2;
      }
      else if(arguments.length === 3) {
        return (n1 + n2) / n3;
      }
      else if(arguments.length === 0) {
        return false;
      }
    }
    else {
      return null;
    }
 
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
/*
	1. Nenhum argumento

		calc(); // false


	2. Um argumento

		calc(3); // 3


	3. Dois argumentos

		calc(10, 20); // 30

	4. Três argumentos

		calc(10, 10, 2); // 10

	5. Nenhuma condição

		calc(10, 10, 2, 40, 20); // null
*/


```