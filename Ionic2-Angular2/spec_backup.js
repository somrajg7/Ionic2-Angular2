
// spec.js
describe('Protractor Demo App', function() {
  beforeEach(function(){
    browser.get('http://localhost:8100');
  });

  it("should have a title: 'Ionic'", function() {
    expect(browser.getTitle()).toEqual('Ionic');
  });

  it("should have a Edit Button", function() {
    var locator = by.id('editButton');
    var el = element(locator);
    el.getText().then(function(text){
      expect(text).toEqual('Edit');
    });
  });
  
  it("After clicking on Edit button, This should go to the Contact Form page", function() {
    var clicked = element(by.id('editButton')).click();
    browser.sleep(2000);
    
    var locator = by.id('heading');
      var el = element(locator);
      el.getText().then(function(text) {
        expect(text).toEqual('Contact Form');
      });
    
  });

  it("Contact Form page should have Submit Button", function() {
    var clicked = element(by.id('editButton')).click();
    browser.sleep(2000);
    
    var locator = by.id('submitButton');
    var el = element(locator);
    el.getText().then(function(text) {
      expect(text).toEqual('Submit');
    });
    
  });
  
  it("After clicking on Submit button on Contact Form page, This should go to the First Page", function() {
    var clicked = element(by.id('editButton')).click();
    browser.sleep(1000);

    var clicked1 = element(by.id('submitButton')).click();
    browser.sleep(1000);
    
    var locator1 = by.id('editButton');
    var el = element(locator1);
    el.getText().then(function(text) {
      expect(text).toEqual('Edit');
    });  
  });

  it("After changing the Name and click on Submit button on Contact Form page, This should go to the First Page and changed name should be reflected", function() {
    var clicked = element(by.id('editButton')).click();
    browser.sleep(2000);

    

   
    var actions = browser.actions();
    actions.mouseMove(element(by.id('empName')));
    actions.click();
    element(by.xpath('//*[@id="empName"]/input')).clear().sendKeys("Hiln");
    actions.perform();
    
    
    // browser.sleep(2000);
    
    var clicked1 = element(by.id('submitButton')).click();
    browser.sleep(1000);
    
    var locator1 = by.id('empName');
    var el = element(locator1);
    el.getText().then(function(text) {
      expect(text).toEqual("Hiln");
    });  
  });
  
  
});
/*spec.txtOpen
Displaying spec.txt.*/