
// spec.js
  var pageObj = require('./pageobjects/pageObject');
  var staticData = require('./pageobjects/staticData.json');
var po;
describe('Protractor Demo App', function() {
  beforeEach(function(){
    browser.get('http://localhost:8100').then(function(){
      po = new pageObj();
    });
  });

  it("should have a title: 'Ionic'", function() {
    expect(po.getTitle()).toEqual(staticData.labels.title);
  });

  it("should have a Edit Button", function() {
    expect(po.getEditBtnTxt()).toEqual(staticData.buttons.edit);

  });

  it("After clicking on Edit button, This should go to the Contact Form page", function() {
    var clicked = po.editBtn.click();
    browser.sleep(2000);

    po.heading.getText().then(function(text) {
        expect(text).toEqual(staticData.labels.contactForm);
      });

  });

  it("Contact Form page should have Submit Button", function() {
    var clicked = po.editBtn.click();
    browser.sleep(2000);

    po.submitBtn.getText().then(function(text) {
      expect(text).toEqual(staticData.buttons.submit);
    });

  });

  it("After clicking on Submit button on Contact Form page, This should go to the First Page", function() {
    var clicked = po.editBtn.click();
    browser.sleep(1000);

    var clicked1 = po.submitBtn.click();
    browser.sleep(1000);

    var locator1 = po.editBtn.getText().then(function(text) {
      expect(text).toEqual(staticData.buttons.edit);
    });
  });

  it("After changing the Name and click on Submit button on Contact Form page, This should go to the First Page and changed name should be reflected", function() {
    var clicked = po.editBtn.click();
    browser.sleep(2000);




    var actions = browser.actions();
    actions.mouseMove(po.empName);
    actions.click();
    po.empInput.clear().sendKeys(staticData.inputs.randomText);
    actions.perform();


    // browser.sleep(2000);

    var clicked1 = po.submitBtn.click();
    browser.sleep(1000);

    po.empName.getText().then(function(text) {
      expect(text).toEqual(staticData.inputs.randomText);
    });
  });


});
/*spec.txtOpen
Displaying spec.txt.*/
