import Router from 'koa-router';
import { getAll as getAllRepos } from '../../util/data/Repos';
import { getAll as getAllTags } from '../../util/data/Tags';
import renderReact from '../util/renderReact';

const authedRoute = new Router();

function *ensureAuthed(next) {
  if (this.req.isAuthenticated()) {
    yield next;
  } else {
    this.redirect('/login');
  }
}

authedRoute.get('/dashboard', ensureAuthed, function *(next) {
  this.reactState = yield {
    user: this.req.user,
    repos: getAllRepos(this.req.user.id),
    tags: getAllTags(this.req.user.id),
  };

  yield next;
}, renderReact);

authedRoute.get('/logout', ensureAuthed, function *() {
  this.req.logout();
  this.redirect('/login');
});

export { authedRoute as default };
