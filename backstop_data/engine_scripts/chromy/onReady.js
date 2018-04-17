module.exports = function (page, scenario, vp) {
  console.log('SCENARIO > ' + scenario.label);
  //require('./clickAndHoverHelper')(page, scenario);
  // add more ready handlers here...

  var hoverSelector = scenario.hoverSelector;
  var clickSelector = scenario.clickSelector;
  var postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  let actions = [];
  if (hoverSelector) {
    let hover = page.waitForSelector(hoverSelector).then(page.hover(hoverSelector));
    actions.push(hover);
  }

  if (clickSelector) {
    let click = page.waitForSelector(clickSelector).then(page.click(clickSelector));
    actions.push(click);
  }

  let products = page.evaluate(() => {
    let prodName = $j('.product__name');
    let childs = prodName.children();
    function changeName(element){
      element.text('Lorem ipsum dolor sit amet, consectetur adipiscing');
    }
    if(childs.length){
      changeName(childs.last());
    } else {
      changeName(prodName);
    }
  });

  actions.push(products);

  return Promise.all(actions);

};
