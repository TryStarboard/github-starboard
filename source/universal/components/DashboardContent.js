import React from 'react';

const DEFAULT_TAG_COLORS = {
  apacheconf: {bg: '#CCCCCC', fg: 'black'},
  c: {bg: '#555555', fg: 'white'},
  clojure: {bg: '#DB5855', fg: 'white'},
  coffeescript: {bg: '#244776', fg: 'white'},
  css: {bg: '#563D7C', fg: 'white'},
  'emacs lisp': {bg: '#CCCCCC', fg: 'black'},
  go: {bg: '#375EAB', fg: 'white'},
  html: {bg: '#E44B23', fg: 'white'},
  java: {bg: '#B07219', fg: 'white'},
  javascript: {bg: '#F1E05A', fg: 'black'},
  livescript: {bg: '#499886', fg: 'white'},
  'objective-c': {bg: '#438EFF', fg: 'white'},
  'objective-j': {bg: '#FF0C5A', fg: 'white'},
  python: {bg: '#3572A5', fg: 'white'},
  ruby: {bg: '#701516', fg: 'white'},
  shell: {bg: '#89E051', fg: 'white'},
  swift: {bg: '#FFAC45', fg: 'white'},
  typescript: {bg: '#2B7489', fg: 'white'},
};

const Repo = ({full_name, description, html_url, tags}) => (
  <div className="repo">
    <div className="repo__full-name">
      <a className="repo__name-link" target="_blank" href={html_url}>{full_name}</a>
    </div>
    <div className="repo__desc">{description}</div>
    <ul className="repo__tags">
      {tags[0] != null ? tags.map((tag) => {
        const style = {
          backgroundColor: DEFAULT_TAG_COLORS[tag.toLowerCase()].bg,
          color: DEFAULT_TAG_COLORS[tag.toLowerCase()].fg,
        };

        return <li key={tag} style={style}>{tag}</li>
      }) : null}
    </ul>
  </div>
);

const Tag = ({text, foreground_color, background_color}) => {
  const style = {
    backgroundColor: background_color || DEFAULT_TAG_COLORS[text.toLowerCase()].bg,
    color: foreground_color || DEFAULT_TAG_COLORS[text.toLowerCase()].fg,
  };

  return (
    <div className="tag" style={style}>
      <div className="tag__text">{text}</div>
    </div>
  );
};

export default ({stars, tags}) => (
  <div className='dashboard'>
    <div className="dashboard__tags">
      {tags.map((t) => <Tag key={t.id} {...t}/>)}
    </div>
    <div className="dashboard__repos">
      {stars.map((s) => <Repo key={s.id} {...s}/>)}
    </div>
  </div>
);
