import './App.css'
import Card from './components/Card/Card'
import Title from './components/Title/Title'



function App() {

  return (
    <>
      <Title titulo="Tienda Coder" />
      <hr />
      <Card>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Card>
      <Card>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </Card>
    </>
  );
}

export default App
