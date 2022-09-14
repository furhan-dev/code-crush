import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  // eslint-disable-next-line
  const { loading, data } = useQuery(QUERY_USERS);

  return (
    <main>
      <div className="flex-row justify-center">
      </div>
    </main>
  );
};

export default Home;
