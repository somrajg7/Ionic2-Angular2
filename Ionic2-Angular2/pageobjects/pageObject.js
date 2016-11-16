var pageObj = (function(){
    function pageObject(){
      this.editBtn=element(by.id('editButton'));
      this.heading=element(by.id('heading'));
      this.submitBtn=element(by.id('submitButton'));
      this.empName=element(by.id('empName'));
      this.empInput=element(by.xpath('//*[@id="empName"]/input'));
    }
    pageObject.prototype.getTitle = function(){
      return browser.getTitle().then(function(text){
        return text;
      });
    },
    pageObject.prototype.getEditBtnTxt = function(){
      return this.editBtn.getText().then(function(text){
        return text;
      });
    }
    return pageObject;
})();



module.exports = pageObj;
