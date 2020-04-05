
import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';

const SingleSheet = props => (
  <table className="table">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      {props.db.samplesheet.map(data => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

SingleSheet.propTypes = {
  db: PropTypes.shape({
    samplesheet: PropTypes.arrayOf(PropTypes.object)
  })
};

export default withGoogleSheets('samplesheet')(SingleSheet);