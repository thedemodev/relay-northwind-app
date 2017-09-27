import PropTypes from 'prop-types';
import React from 'react';
import Relay from 'react-relay/classic';
import Region from './Region';

class RegionList extends React.Component {
  static propTypes = {
    viewer: PropTypes.object,
  };

  render() {
    return (
      <div>
        <h3>Total {this.props.viewer.regionList.length} records</h3>

        {this.props.viewer.regionList.map((region, i) => {
          return <Region key={i} region={region} />;
        })}
      </div>
    );
  }
}

export default Relay.createContainer(RegionList, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        regionList {
          ${Region.getFragment('region')}
        }
      }
    `,
  },
});
