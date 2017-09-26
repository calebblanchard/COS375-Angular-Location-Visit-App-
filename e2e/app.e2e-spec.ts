import { LocationVisitAppPage } from './app.po';

describe('location-visit-app App', () => {
  let page: LocationVisitAppPage;

  beforeEach(() => {
    page = new LocationVisitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
