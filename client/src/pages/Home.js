import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_USERS);
  const getNextUser = async () => {
    

  };
  // eslint-disable-next-line

  return (
    <main>
      <div className="flex-row justify-center">
      </div>
    </main>
  );
};

export default Home;
