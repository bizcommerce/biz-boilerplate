![Biz boilerplate logo](https://github.com/bizcommerce/biz-boilerplate/raw/master/img/boilerplate-logo.png)

> Framework para customização de temas Bizcommerce. Saiba mais sobre como é [desenvolver para o Biz4](http://biz4treinamento.dev.bizcommerce.com.br).

# Comece agora
```shell
## Clonando o projeto
git clone https://github.com/bizcommerce/biz-boilerplate.git nome-sua-loja
cd nome-sua-loja

## Instalando dependências
npm install .

## Começando seu projeto
npx gulp watch
```

## Guia
* [Estrutura](#estrutura)
* [Variáveis](#variaveis)
* [Stack](#stack)
* [Gulp Tasks](#gulp-tasks)

## Estrutura
```
├── css
│   ├── vars              (Tags do Biz4 de cores e imagens)
│   │  ├── dev            (Endereço das imagens em dev e cores em Hexadecimal ou rgb)
│   │  ├── prod
|   ├── main              (Layout e componentes do tema)
|   |  ├── base.css       (Bundle dos componentes e layout no formato .css)
|   ├── theme             (Sobrescreva tudo que precisar do tema aqui)
|   |  ├── general.styl   (Arquivo principal que indexa todos os overwrites do tema)
|   ├── one.styl          (Base do bundle final incluindo ./main e ./theme
├── package.json          (Declaração de informações e pacote de depências NODE.js & NPM)
├── skin.json             (Configurações de mapeamento e testes da loja em desenvolvimento)
├── gulpfile.js           (Tarefas automatizadas do projeto)
├── img                   (Imagens utilizadas no projeto como background ou via tag img)
├── svg                   (Icones desta pasta podem se transformam em svg-sprite)
├── js
│   ├── one.js            (Arquivo Javascript principal da loja)
├── templates
│   ├── svg               (SVG sprites do skin gerados via gulp svg)
├── i18n                  (Arquivos de internacionalização da loja)
```

## Variáveis
### 🔸🔹 Cores 🔹🔸
O painel do biz 4 é capaz de renderizar seu css utilizando cores previamente definidas em **["Design -> Configurações rápidas -> Cores"](https://www.bizcommerce.com.br/recursos/cores/)**.

![Configurando cores da loja](https://www.bizcommerce.com.br/wp-content/uploads/2017/09/CoresLoja3.png)

### Opções
Você pode utilizar cores configuradas no tema através de varíáveis disponíveis no [editor css](https://www.bizcommerce.com.br/recursos/editor-de-css/) da biz.

* @bg(1)
* @bg_hover(1)
* @bg(2)
* @bg_hover(2)
* @bg(3)
* @bg_hover(3)

### Exemplo
O Seguinte código adicionado no editor css do painel biz

```css
body {
  background:  @bg(1)
}
```
Resultará em 

```css
body {
  background:  #cccccc
}
```

### Images
Além de cores pre-definidas você também pode utilizar variáveis de imagens em seu CSS.
Após o upload de uma imagem no painel biz as imagens estão diponíveis em forma de variáveis.
```css
body{
  background-image: url(@img(gatinho))
}
```
Resultará em:
```css
body{
  background-image: url('/media/gatinho.png')
}
```

### Pré-processadores
As "biz vars" só funcionam no editor de css em seu painel biz, ao clicar em salvar as variáveis serão compiladas para arquivo de modo que possam ser visualizadas na web.

Para utilizar as variáveis biz em seu preprocessador, pode-se utilizar a sintaxe de variáveis de sua própria linguagem como "alias" para as "biz vars".

Veja um exemplo utilizando **Stylus**
```stylus
$color1_font = '@color(1)'
$color1_font_hover = '@color(1:hover)'
```

Este projeto está preparado para utilizar varíáveis com valores regulares da web durante o desenvolvimento, sem a necessidade de colar o código no editor da biz.
Para mais informações confira a pasta **/vars/dev.styl**.


## Stack
O framework **Biz Boilerplate** abraça o conceito "convention over configuration" e espera que os usuários familiarizem-se com as seguintes tecnologias:

## [Stylus](https://learnboost.github.io/stylus/)

Um preprocessador extremamente versátil, permite que você escreva as folhas de estilo usando chaves, ou apenas identação significativa.

O arquivo general.styl possui um exemplo da sintaxe sugerida, mas sinta-se a vontade para escrever como preferir, seguindo a documentação do [Stylus](https://learnboost.github.io/stylus/).

Você pode compilar o arquivo stylus utilizando ferramenta de linha de comando global do stylus, mas recomendamos a utlização dos comandos locais ```gulp dev```, ```gulp prod``` e ```gulp watch```. Veja mais na sessão comandos gulp.

## [Gulp](http://gulpjs.com/)
Escolhemos o Gulp como ferramenta de automatizações de tarefas, por causa de sua simplicidade e abundância de modulos.
As tarefas do Gulp estão declaradas no arquivo "gulpfile.js" e suas dependências encontram-se em "package.json"

Comandos disponíveis:

* gulp dev
* gulp prod
* gulp watch
* gulp svg-min
* gulp svg

## Gulp tasks
Confira agora as tarefas automatizadas disponíveis neste boilerplate.

### gulp dev
O comando gulp dev gera o arquivo css final  utilizando as **varíaveis de desenvolvimento** e copia o resultado para o clipboard.
```shell
gulp dev
```

### gulp prod
O comando gulp prod gera o arquivo css final utilizando as **varíaveis de produção** e copia o resultado para o clipboard.
```shell
gulp prod
```

### gulp watch
O comando mais recomendado para longas manutenções ou desenvolvimentos de novos temas. Gera o arquivo css de desenvolvimento toda vez que o arquivo é alterado. (Não copia para o clipboard)
```shell
gulp watch
```

### gulp svg-min
Esta função otimiza os arquivos da pasta svg, removendo espaços em branco e atributos de estilo do vector.

```shell
gulp svg-min
```

### gulp svg
gulp svg é o commando responsável por gerar um svg-sprite do padrão symbol utilizando arquivos svgs dentro da pasta ```svg```.
O commando copia o svg sprite para o clipboard e salva o resultado em ```templates/symbol/svg/sprite.symbol.svg```

```shell
gulp svg
```