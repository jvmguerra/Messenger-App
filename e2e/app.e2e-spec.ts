import { MessengerPage } from './app.po';

describe('messenger App', () => {
  let page: MessengerPage;

  beforeEach(() => {
    page = new MessengerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
