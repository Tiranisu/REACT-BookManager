import {useEffect, useState} from 'react'
// import Header from "./components/Header.tsx";
// import List from './components/List.tsx';
import Book from "./components/Book.tsx";
import type {BookType} from "./types/Book.ts";


export default function App() {
    const [books, addBooks] = useState<BookType[]>([])

    useEffect(() => {
        addBooks([{ id: Date.now(), name: "Nouveau livre", author: "Moi", year: 2024, read: false }])
    }, [books]);

    return (
     <div>
         <span>Ahhhh</span>
         {books[0] && <Book book={books[0]} />}
     </div>
    )
}
