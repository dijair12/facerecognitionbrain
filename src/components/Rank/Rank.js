import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, sua entrada de contagens atual é...`}
      </div>
      <div className="white f1">
        {`${entries}`}
      </div>
    </div>
  )
}

export default Rank;