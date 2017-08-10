import { ALocalizationPage } from './app.po';

describe('a-localization App', () => {
  let page: ALocalizationPage;

  beforeEach(() => {
    page = new ALocalizationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
