import { useEffect, useState } from 'react';

const database_id = '22f238cc864e4a1496e42e3d8a2c05c6';

function App() {
  const [db, setDB] = useState({});

  useEffect(() => {
    // We fetch the data from the local server that we're running
    fetch('http://localhost:3000/' + database_id).then(async (resp) => {
      setDB(await resp.json())
    });
  }, []);

  return (
    <div>
      {db.title?.[0]?.plain_text}
    </div>
  );
}

export default test;