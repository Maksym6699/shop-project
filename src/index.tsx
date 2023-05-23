import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import Content from './Content'

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={1} />
            <Content
                text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, repudiandae. Asperiores voluptatem dicta rerum quasi tempora? Optio exercitationem rem ullam iste, dicta quasi facilis nam,corporis dolor fugit inventore? Libero."
                text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, repudiandae. Asperiores voluptatem dicta rerum quasi tempora? Optio exercitationem rem ullam iste, dicta quasi facilis nam,corporis dolor fugit inventore? Libero."
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// 1. Винести Content в окремий файл
// 2. Описати дві прописи text1, text2, які мають бути string і передати туди дані
