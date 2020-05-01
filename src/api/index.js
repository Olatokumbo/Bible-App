
import axios from "axios";

const url = "https://bible123-api.herokuapp.com"

export const fetchBooks = async() =>{
    const {data} = await axios.get(url);

    return(data); //.map((books) =>books.book_name)
}

export const fetchChapters = async(chapter) =>{
    try {
       const {data} = await axios.get(`${url}/${chapter}`);
    console.log(data);
    return(data); //.map((books) =>books.book_name)  
    } catch (error) {
        
    }
   
}
export const fetchVerses = async(book, chapter)=>{
    const {data} = await axios.get(`${url}/${book}/${chapter}`);
    console.log("Verse Length", data)
    return(data.length);
}

export const final = async(books, chapters, verses) => {
    const {data:{text, book_name, chapter, verse}} =await axios.get(`${url}/${books}/${chapters}/${verses}`);
    console.log("Text:", text);
    const modifiedData={
        text,
        book_name,
        chapter,
        verse
    }
    return(modifiedData);
}