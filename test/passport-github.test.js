'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-github.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-github-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportGithub')
      .expect(200);
  });

  it('should GET /passport/github redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/github')
      .expect('Location', /^https:\/\/github.com\/login\/oauth\/authorize\?response_type=code&redirect_uri=http/)
      .expect(302);
  });

  it('should GET /passport/github/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/github/callback')
      .expect('Location', /^https:\/\/github.com\/login\/oauth\/authorize\?response_type=code&redirect_uri=http/)
      .expect(302);
  });
});
