import '@/app/styles/fonts.scss';
import '@/app/styles/global.scss';
import { Board, SideBar } from '@/widgets';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api");

        if (!response.ok) {
          throw new Error(`HTTP ошибка! Статус: ${response.status}`);
        }

        const result = await response.json();
        setData(result || result);
      } catch (error) {
        setError(error);
        console.error('Ошибка:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(!data ? 'Loading...' : data)

  return (
    <main className='wrapper'>
      <SideBar />
      <Board />
    </main>
  )
}

export default App
