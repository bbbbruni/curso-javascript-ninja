/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var starks = ['Bruno', 21, false, undefined, new Date()];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function killCersei(args) {

	return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

killCersei(starks)[1]; // => 21

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(arg, num) {

	return arg[num];
}

myFunction(starks, 3); // => undefined

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr = [{ nome: 'bruno' }, 531, true, null, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

myFunction(arr, 0); // => { nome: 'bruno' }
myFunction(arr, 1); // => 531
myFunction(arr, 2); // => true
myFunction(arr, 3); // => null
myFunction(arr, 4); // => NaN

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {

	var obj = {

		'harry potter': {
			quantidadePaginas: 676,
			autor: 'JK Rowling',
			editora: 'Rocco',
		},
		'mochileiro das galaxias': {
			quantidadePaginas: 231,
			autor: 'Douglas Adams',
			editora: 'Pan Books',
		},
		'martin': {
			quantidadePaginas: 24659,
			autor: 'George RR Martin',
			editora: 'Coxinha',
		},
	};

	return !bookName ? obj : obj[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var bookChoice = 'harry potter';

`O livro ${bookChoice} tem ${book(bookChoice).quantidadePaginas} páginas!`; // O livro mochileiro tem 231 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

`O autor do livro ${bookChoice} é ${book(bookChoice).autor}`; // O autor do livro mochileiro é Douglas Adams

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

`O livro ${bookChoice} foi publicado pela editora ${book(bookChoice).editora}.`; // O livro harryPotter foi publicado pela editora Rocco.


