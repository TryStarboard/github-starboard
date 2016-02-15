import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { reposWithTagDetailSelector } from './mapStateToProps';
import Repo from './Repo';

class ReposList extends Component {

  static contextTypes = {
    getAllRepos: PropTypes.func.isRequired,
    applyTagToRepo: PropTypes.func.isRequired,
    removeRepoTag: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.context.getAllRepos();
  }

  render() {
    const {
      applyTagToRepo,
      removeRepoTag,
    } = this.context;

    const { repos } = this.props;

    return (
      <div className="dashboard__repos">
        {repos.map((repo) =>
          <Repo {...repo} {...{applyTagToRepo, removeRepoTag}} key={repo.id}/>
        )}
      </div>
    );
  }
}

export default connect(
  createSelector(
    reposWithTagDetailSelector,
    (repos) => ({ repos })
  ),
  null,
  null,
  {pure: true}
)(ReposList);
