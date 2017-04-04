import { KarezaPage } from './app.po';

describe('kareza App', () => {
  let page: KarezaPage;

  beforeEach(() => {
    page = new KarezaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
