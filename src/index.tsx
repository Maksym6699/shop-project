import React from 'react'
import ReactDOM from 'react-dom/client'

// React element
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// const app = React.createElement("div", null, React.createElement('p', {id: 'test',}, 'Hello p'))

const app = (
    <div>
        <h1 id="test">Hello App</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            aliquid explicabo iusto ratione natus voluptatibus vero labore
            error. Laboriosam neque corporis explicabo? Pariatur libero veniam
            fuga atque dolore expedita impedit.
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
