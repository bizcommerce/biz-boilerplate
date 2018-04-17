module.exports = function (page, scenario) {
  var hoverSelector = scenario.hoverSelector;
  var clickSelector = scenario.clickSelector;
  var postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  let actions = [];
  if (hoverSelector) {
    let hover = page.waitForSelector(hoverSelector).hover(hoverSelector);
    actions.push(hover);
  }

  if (clickSelector) {
    let click = page.waitForSelector(clickSelector).click(clickSelector);
    actions.push(click);
  }
  return Promise.all(actions);

  /*
  if (postInteractionWait) {
    chromy.wait(postInteractionWait);
  }
  */
};
