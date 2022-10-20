# Atividade prática

# 1 - Fazer um fork do projeto
No canto superior direito da tela do github há um botão `fork`. Clique nele
para criar uma cópia local no seu próprio github. Com isso, você conseguirá
utilizar todo o conteúdo existente e promover alterações no código sem que
impacte nos demais projetos.

# 2 - Crie um novo controller

Deverá conter os seguintes métodos: `listar`, `buscarId`, `buscarIdade` e `buscarSexo`

Para os métodos `buscarId`, `buscarIdade` e `buscarSexo`, o retorno da função deve conter apenas
os atributos `nome`, `sobrenome`e o atributo especifico da busca do método.

# 3 - Crie novas rotas

| Método | Caminho            | Descrição                | 
|--------|--------------------|--------------------------|
| GET    | '/usuario/listar'  | listar usuarios          | 
| GET    | '/usuario/:id'     | buscar um usuario com `id` passado como parâmetro da requisição | 
| POST   | '/usuario/idade'   | buscar usuarios com idade acima  do parametro "idade" passado no corpo da requisição (`body`)   | 
| POST   | '/usuario/sexo'    | buscar usuarios com sexo, por parametro "sexo" passado no corpo da requisição (`body`)   | 
