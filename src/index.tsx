import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

// React element
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// const app = React.createElement("div", null, React.createElement('p', {id: 'test',}, 'Hello p'))

// JSX
// const app = (
//     <div>
//         <h1 id="test">Hello App</h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
//             aliquid explicabo iusto ratione natus voluptatibus vero labore
//             error. Laboriosam neque corporis explicabo? Pariatur libero veniam
//             fuga atque dolore expedita impedit.
//         </p>
//     </div>
// )
const Title = () => {
    return <h1>Hello App Component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                repudiandae. Asperiores voluptatem dicta rerum quasi tempora?
                Optio exercitationem rem ullam iste, dicta quasi facilis nam,
                corporis dolor fugit inventore? Libero.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                animi sint labore maxime at quia iusto. Possimus ducimus quas,
                doloremque beatae omnis unde itaque voluptas velit aliquam porro
                quae dignissimos.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
