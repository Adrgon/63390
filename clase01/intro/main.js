//let root = document.querySelector('#root')
/* root.innerHTML = `<h1>Hello world</h1>`

let h2 = document.createElement('h2')
h2.textContent = 'Hello again'
root.appendChild(h2)   */

function App() {
    return React.createElement('h2', {}, 'Hello world')
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
