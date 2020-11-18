import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const items = useSelector(state => state.items)

  return (
    <div className="home page">
      <h1>Home Page</h1>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Admin ID</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td><Link to={`/${item.id}`}>{item.id}</Link></td>
                <td><Link to={`/${item.id}/${item.adminId}`}>{item.adminId}</Link></td>
                <td>{item.complete ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>  
  );
}

export default Home;
