import type {BookType} from "../types/Book.ts";

type props = {
    book: BookType;
}

export default function Book({book}: props) {
    return(
        <div>
            <span>AHHHHHH</span>
            <div className="p-4 bg-white rounded shadow mb-2">
                <h2 className="text-xl font-semibold">{book.name}</h2>
                <p className="text-sm text-gray-700">Auteur : {book.author} ({book.year})</p>
                <p className="text-sm">{book.read ? "📘 Lu" : "📕 Non lu"}</p>
            </div>
        </div>
    )
}
