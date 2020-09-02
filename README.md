# testes-automatizados-jasmine
Estudo inicial em testes automatizados em códigos Javascript utilizando o framework Jasmine.

Framework de testes automatizados Jasmine

- Estrutura de pastas
	- lib - Biblioteca do framework.
	- src - Arquivos a serem testados.
	- spec - Testes (asserts).
	- SpecRunner.html - Interface de relatório.

![Estrutura de pastas](https://github.com/lucasgdo/testes-automatizados-jasmine/blob/master/src/1stsnap.png?raw=true)

- Classe de teste

![Classe de teste](https://github.com/lucasgdo/testes-automatizados-jasmine/blob/master/src/2ndsnap.png?raw=true)

- Método describe: Define o nome do teste a ser apresentado no relatório e quais testes serão apresentados.
	- Método it: Descreve o comportamento específico que deverá ser analisado e define o teste.
	- Método beforeEach: Usado quando se necessita de um mesmo trecho de código em vários testes.

![Métodos](https://github.com/lucasgdo/testes-automatizados-jasmine/blob/master/src/3rdsnap.png?raw=true)

- Padrão de classe Builder: Serve como um criador de instâncias a serem utilizadas nos testes.
	- Métodos podem ser criados com intuito de auxiliar caso seja necessária alguma mudança nos dados.
	
![Padrão Builder](https://github.com/lucasgdo/testes-automatizados-jasmine/blob/master/src/4thsnap.png?raw=true)
