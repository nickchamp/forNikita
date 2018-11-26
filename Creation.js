describe('Creation Entities at Memphis', function () {
    const path = require('path');
    const dirname = '/home/nickolay/Projects/Memphis-tests/TestData/';
    const fileToUpload = '../buffon.jpg';
    const absolutePath = path.resolve(dirname, fileToUpload);

    beforeEach(function () {
        browser.restart();
        browser.driver.manage().window().maximize();
        browser.get('https://app.memphis.io');
        element(by.id('loginEmail')).sendKeys('testdoit8@gmail.com');
        element(by.id('loginPassword')).sendKeys('123123');
        element.all(by.css('.btn.btn-default.sign-btn')).get(1).click();
    });

    afterEach(function () {
        element.all(by.css('.leftSideBarMosaicsTypeContainer')).get(0).all(by.css('.leftSideBarMosaicsTypeContainerItem')).last().click();
        element(by.id('GearMenu')).click();
        element.all(by.css('.collectionSettingsMenu')).get(0).element(by.id('archiveItemButton')).click();
        element.all(by.css('.leftSideBarMosaicsTypeContainer')).get(2).all(by.css('.leftSideBarMosaicsTypeContainerItem')).last().click();
        element(by.id('GearMenu')).click();
        element.all(by.css('.collectionSettingsMenu')).get(0).element(by.id('deleteItemButton')).click();
    });

   //  it('User can create new Collection', function () {
   //      let a = element.all(by.css('.leftSideBarMosaicsTypeContainerItemTitle.ng-binding')).count();
   //      element(by.id('CreateColl')).click();
   //      element(by.id('mosaic_title')).sendKeys('test');
   //      element(by.id('mosaic_content')).sendKeys('description');
   //      element.all(by.css('.btn.btn-info')).get(0).click();
   //      let b = element.all(by.css('.leftSideBarMosaicsTypeContainerItemTitle.ng-binding')).count();
   //      expect(b == a + 1);
   // });
   //
   // it('User can create new Tile', function () {
   //      element(by.id('CreateColl')).click();
   //      element(by.id('mosaic_title')).click().sendKeys('test');
   //      element(by.id('mosaic_content')).click().sendKeys('description');
   //      element.all(by.css('.btn.btn-info')).get(0).click();
   //      element(by.css('.editorPaneMosaicsListItemEditActionCancel')).click();
   //      let a = element.all(by.css('.editorPaneMosaicsListItemText.markdown.ng-scope.fr-view')).count();
   //      element(by.css('.editorPaneMosaicsListItemBottomHover')).click();
   //      element.all(by.id('new-tile-tooltip_0')).get(0).click();
   //      element(by.id('newItemTileContainer')).element(by.css('.fr-element.fr-view')).sendKeys('Tile');
   //      element(by.css('.editorPaneMosaicsListItemEditActionSave')).click();
   //      let b = element.all(by.css('.editorPaneMosaicsListItemInstrumentContainer.ng-hide-animate.ng-scope')).count();
   //      expect(b == a + 1);
   //  });
   //
   // it('User can create new Tile with adding the picture', function () {
   //      element(by.id('CreateColl')).click();
   //      element(by.id('mosaic_title')).click().sendKeys('test');
   //      element(by.id('mosaic_content')).click().sendKeys('description');
   //      element.all(by.css('.btn.btn-info')).get(0).click();
   //      element(by.css('.editorPaneMosaicsListItemEditActionCancel')).click();
   //      let a = element.all(by.css('.editorPaneMosaicsListItemText.markdown.ng-scope.fr-view')).count();
   //      element(by.css('.editorPaneMosaicsListItemBottomHover')).click();
   //      element.all(by.id('new-tile-tooltip_0')).get(0).click();
   //      element(by.id('newItemTileContainer')).element(by.css('.fr-element.fr-view')).click();
   //      element.all(by.css('.fr-floating-btn')).get(0).click();
   //      element.all(by.css('.fr-floating-btn')).get(1).sendKeys(absolutePath);
   //      browser.sleep(4000);
   //      element(by.css('.editorPaneMosaicsListItemEditActionSave')).click();
   //      let b = element.all(by.css('.editorPaneMosaicsListItemInstrumentContainer.ng-hide-animate.ng-scope')).count();
   //      expect(b == a + 1);
   //  });
   //
   //  it('User can create new Markdown', function () {
   //      element(by.id('CreateColl')).click();
   //      element(by.id('mosaic_title')).click().sendKeys('test');
   //      element(by.id('mosaic_content')).click().sendKeys('description');
   //      element.all(by.css('.btn.btn-info')).get(0).click();
   //      element(by.css('.editorPaneMosaicsListItemEditActionCancel')).click();
   //      let a = element.all(by.css('.editorPaneMosaicsListItemText.markdown.ng-scope.fr-view')).count();
   //      element(by.css('.editorPaneMosaicsListItemBottomHover')).click();
   //      element.all(by.id('new-markdown-tooltip_0')).get(0).click();
   //      element(by.id('newItemTile')).sendKeys('Markdown');
   //      element(by.css('.editorPaneMosaicsListItemEditActionSave')).click();
   //      let b = element.all(by.css('.editorPaneMosaicsListItemText.markdown.ng-binding.ng-scope')).count();
   //      expect(b == a + 1);
   //  });
   //
    it('User can add new File', function () {
        element(by.id('CreateColl')).click();
        element(by.id('mosaic_title')).click().sendKeys('test');
        element(by.id('mosaic_content')).click().sendKeys('description');
        element.all(by.css('.btn.btn-info')).get(0).click();
        element(by.css('.editorPaneMosaicsListItemEditActionCancel')).click();
        element(by.css('.editorPaneMosaicsListItemBottomHover')).click();
        element.all(by.id('file-tooltip__0')).get(0).sendKeys(absolutePath);
        element.all(by.css('.btn.btn-info')).get(0).click();
        browser.sleep(3000);
        expect(element(by.css('.editorPaneMosaicsListItemImageMainContainer')));
    });
});

