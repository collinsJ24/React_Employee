import React from 'react';
const List = (props) => {
  const { repos } = props;
  console.log(repos);
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
            <span className='repo-text'>{repos} </span>
  );
};
export default List;
