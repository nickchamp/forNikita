describe('LogIn at Memphis', function () {

    beforeEach(function () {
        browser.restart();
    });

    it('Should LogIn User to Memphis application', function () {
        browser.driver.manage().window().maximize();
        browser.get('https://app.memphis.io');
        element(by.id('loginEmail')).sendKeys('testdoit8@gmail.com');
        element(by.id('loginPassword')).sendKeys('123123');
        element.all(by.css('.btn.btn-default.sign-btn')).get(1).click();
        expect(element(by.css('body > div:nth-child(1) > div > div.mainHeaderComponentContainer > div.mainHeaderComponentContainerUserInfoContainer > ul')));
  });

    it('Should not LogIn User to Memphis application', function () {
        browser.driver.manage().window().maximize();
        browser.get('https://app.memphis.io');
        element(by.id('loginEmail')).sendKeys('testdoit8@gmail.com');
        element(by.id('loginPassword')).sendKeys('321321');
        element.all(by.css('.btn.btn-default.sign-btn')).get(1).click();
        browser.sleep(500);
        let popupAlert = browser.switchTo().alert().getText();
        expect(popupAlert).toEqual('Incorrect password');
    });
});
