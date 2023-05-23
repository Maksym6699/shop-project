import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

type TitleProps = {
    title: string
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title} Component</h1>
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
            <Title title="App" />
            <Title title="React" />
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
