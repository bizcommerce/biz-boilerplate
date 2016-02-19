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


## Varíaveis
Afim de oferecer maior autonomia aos desenvolvedores disponibiliza tags em seu sistema que podem ser utilizadas dentro de arquivos css e javascript.
As tags trazem informações como cores da loja (definidas em configurações rápidas do sistema) bem como endereço completo das imagens cadastradas (em Design -> Imagens).

Para poder compilar seus arquivos stylus utilizando as tags do sistema é necessário criar alias para elas utlizando variáveis do stylus.

Ex
```
$bg_home = '{{css_image name="bg-home"}}'
```
E para utilizar o css "offline" mapeando via Chrome Workspace é necessário colocar um valor real para a variável.
```
$bg_home = 'https://biz4.dev.bizcommerce.com.br/media/interface/images/bg-home.png'
```

Nosso framework possui 2 arquivos dedicados ao registro de varíaveis css/vars/dev.styl e css/vars/prod.styl.

**css/vars/dev.styl**
Permite o uso das váriaveis de modo estático e local via chrome workspace

```
$color1_font = '#333333'
$color1_font_hover = '#f25f22'
$color1_bg = '#fafafa'
$color1_bg_hover = '#fff8f2'

$bg_home = 'https://biz4.dev.bizcommerce.com.br/media/interface/images/bg-home.png'
$bg_bar = 'https://biz4.dev.bizcommerce.com.br/media/interface/images/bg-bar.png'
$bg_simplify_life = 'https://biz4.dev.bizcommerce.com.br/media/interface/images/bg-simplify-life.png'
```

**css/vars/prod.styl**
Renderiza as variáveis conforme as tags do sistema e é o modo como o css deve ser salvo no painel.
```
$color1_font = '{{color1_font}}'
$color1_font_hover = '{{color1_font_hover}}'
$color1_bg = '{{color1_bg}}'

$bg_home = '{{css_image name="bg-home"}}'
$bg_bar = '{{css_image name="bg-bar"}}'
$bg_simplify_life = '{{css_image name="bg-simplify-life"}}'
```

Para utlizar as varíaveis de "dev" ou "prod" você pode pode incluir as variáveis do ambiente desejado no começo de arquivo .styl com ```@require "vars/dev"``` ou ```@require "vars/prod```.

### Gerando css dev e prod
Mas recomendamos fortemente o uso dos comandos ```gulp dev``` ```gulp prod``` para compilar seu css e não precisar trocar a importação de varíaveis toda vez que troca o ambiente.

## Gulp
Gulp é a ferramenta de build (automatização de tarefas) do Skin base.

Comandos disponíveis:

* gulp dev
* gulp prod
* gulp watch
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

### gulp svg
gulp svg é o commando responsável por gerar um svg-sprite do padrão symbol utilizando arquivos svgs dentro da data ```svg```.
O commando copia o svg sprite para o clipboard e salva o resultado em ```templates/symbol/svg/sprite.symbol.svg```

```shell
gulp svg
```

### gulp svg-min
Esta função otimiza os arquivos da pasta svg, removendo espaços em branco e atributos de estilo do vector.

```shell
gulp svg-min
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
