var webdriver = require('selenium-webdriver'),
	credentials = require('./credentials.json'),
	driver = new webdriver.Builder().
		withCapabilities(webdriver.Capabilities.chrome()).
		build();

driver.get('http://bookstrap.hackreactor.com/auth/login');
driver.findElement(webdriver.By.css('a.button')).click();
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'Sign in · GitHub';
 });
}, 1000);

driver.findElement(webdriver.By.css('input#login_field')).sendKeys(credentials.username);
driver.findElement(webdriver.By.css('input#password')).sendKeys(credentials.password);
driver.findElement(webdriver.By.css('div.auth-form-body > input.btn')).click();

driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'Bookstrap';
 });
}, 1000);


driver.get('http://bookstrap.hackreactor.com/attendance');

//TODO: click the Ready-To-Learn button , next line is not working properly.
//driver.findElement(webdriver.By.className('ready-to-learn')).click();
