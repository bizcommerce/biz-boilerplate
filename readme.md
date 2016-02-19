# Biz Boilerplate
Aqui você encontrará um framework que auxilia no desenvolvimento de skins para o BIZ4.

Saiba mais sobre como é [desenvolver para o Biz4](http://biz4treinamento.dev.bizcommerce.com.br).

## Setup
```shell
## Clonando o projeto
git clone --depth 1 https://github.com/bizcommerce/biz-boilerplate.git nome-sua-loja

## Instalando dependências
npm install .

## Começando seu projeto
gulp watch
```

## Estrutura
```
├── css
│   ├── vars
│   │  ├── dev          (Endereço das imagens em dev e cores em Hexadecimal ou rgb)
│   │  ├── prod         (Tags do Biz4 de cores e imagens)
│   ├── general.styl    (Arquivo base stylus que gera o css via gulp dev ou gulp prod)
│   ├── general.css     (Arquivo final css)
│   ├── editable.css    
├── package.json        (Declaração das dependências do projeto mixins e modulos de build)
├── gulpfile.js         (Base de código das tarefas de automatização do projeto)
├── img
├── svg
├── js
│   ├── general.js
│   ├── editable.js
├── templates
│   ├── svg            (SVG sprites do skin gerados via gulp svg)
├── i18n               (Arquivos de internacionalização da loja)
```

## Stack
O framework **Biz Boilerplate** abraça o conceito "convention over configuration" e espera que os usuários familiarizem-se com as seguintes tecnologias:

### [Stylus](https://learnboost.github.io/stylus/)

Um preprocessador extremamente versátil, permite que você escreva as folhas de estilo usando chaves, ou apenas identação significativa.

O arquivo general.styl possui um exemplo da sintaxe sugerida, mas sinta-se a vontade para escrever do modo que preferir, seguindo a documentação do [Stylus](https://learnboost.github.io/stylus/).

Você pode compilar o arquivo stylus utilizando ferramenta de linha de comando global do stylus, mas recomendamos a utlização dos comandos locais ```gulp dev```, ```gulp prod``` e ```gulp watch```. Veja mais na sessão Comandos grunt.

#### Nib
Nib é uma biblioteca de mixins para Stylus com atalhos para declarações repetitivas e browser vendors.

### [Gulp](http://gulpjs.com/)
Escolhemos o Gulp como ferramenta de automatizações de tarefas, por causa de sua simplicidade e abundância de modulos para infinitos fins.
As tarefas do Gulp estão declaradas no arquivo "gulpfile.js" e suas dependências encontram-se em "package.json"

### Chrome Web developer Workspace
É uma opção nativa do Google Chrome que permite mapear arquivos locais e conferir seus efeitos na página, sem precisar recarrega-la.


## Gulp
Gulp é a ferramenta de build (automatização de tarefas) do Biz Boilerplate.

Comandos disponíveis:

* gulp dev
* gulp prod
* gulp watch
* gulp svg-min
* gulp svg

### gulp dev
O comando gulp dev gera o arquivo css utilizando as varíaveis de desenvolvimento e copia o resultado para o clipboard.
```shell
gulp dev
```

### gulp prod
O comando gulp dev gera o arquivo css utilizando as varíaveis de desenvolvimento e copia o resultado para o clipboard.
```shell
gulp prod
```

### gulp watch
O comando mais recomendado para se desenvolver offline, gera o arquivo css de desenvolvimento toda vez que o arquivo é alterado. (Não copia para o clipboard)
```shell
gulp watch
```

### gulp svg-min
Esta função otimiza os arquivos da pasta svg, removendo espaços em branco e atributos de estilo do vector.

```shell
gulp svg-min
```

### gulp svg
gulp svg é o commando responsável por gerar um svg-sprite do padrão symbol utilizando arquivos svgs dentro da data ```svg```.
O commando copia o svg sprite para o clipboard e salva o resultado em ```templates/symbol/svg/sprite.symbol.svg```

```shell
gulp svg
```

## Variáveis
O biz-boilerplate permite utilizar variáveis diferentes em desenvolvimento e produção.
Uma das vantagens é a criação de "alias" para tags do sistema.

Tags como '{{color1_font}}' e '{{color1_font_hover}}' são renderizadas pelo Biz4, de acordo com as configurações de cores de seu admin.
Para utilizar as tags de cores em desenvolvimento utilizando o chrome workspace (sem precisar salvar e publicar o arquivo), você declara-las da seguinte maneira:

### 1 - Configurando variáveis DEV
No arquivo css/vars/dev.styl
```
$color1_font = '#333333'
$color1_font_hover = '#f25f22'
```

### 2 - Configurando variáveis PROD
No arquivo vars/prod.styl
```
$color1_font = '{{color1_font}}'
$color1_font_hover = '{{color1_font_hover}}'
```

### 3 - Utilizando as variáveis
Para utilizar essas variáveis em seu arquivo general.styl:
```
a
  color unquote($color1_font)
  &:hover
    color unquote($color1_font_hover)
```

### 4 - Gerando versão DEV
Execute o seguinte comando na pasta de seu projeto
```shell
gulp dev
```

Gera o seguinte arquivo general.css
```css
a{
  color: #333333
}
a:hover{
  color: #f25f22
}
```

Esta versão pode ser mapeada no Chrome, que atualizará automaticamente sua página com a versão mais nova do css.


### 5 -  Gerando a versão PROD
Execute o comando a seguir
```shell
gulp prod
```

Gera o seguinte arquivo general.css
```css
a{
  color: '{{color1_font}}'
}
a:hover{
  color: '{{color1_font_hover}}'
}
```

Esta opção é a que deve ser colada e salva pelo painel na seção "css" "general".
Após salvo e publicado o css carregado em sua loja será:
```css
a{
  color: #333333
}
a:hover{
  color: #f25f22
}
```

## Setup
```shell
## Clonando o projeto
git clone --depth 1 https://github.com/bizcommerce/biz-boilerplate.git nome-sua-loja

## Instalando dependências
npm install .

## Começando seu projeto
gulp watch
```
