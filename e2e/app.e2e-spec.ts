import { SparksArrivalsPage } from './app.po';

describe('sparks-arrivals App', () => {
  let page: SparksArrivalsPage;

  beforeEach(() => {
    page = new SparksArrivalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
