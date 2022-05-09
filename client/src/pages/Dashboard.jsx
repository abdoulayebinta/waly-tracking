import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <h1>Dashboard</h1>;
};
export default Dashboard;
