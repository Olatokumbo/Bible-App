import React from "react";
import {VersePicker, VerseOutput} from "./components";
import styles from "./App.module.css";
import {fetchChapters, fetchVerses, final} from "./api";
import image from "./images/bible.png";
class App extends React.Component{
    constructor(props){
        super(props);
        this.handleVerse=this.handleVerse.bind(this);
        this.handleFinal=this.handleFinal.bind(this);
        this.state={
            book:"Gen",
            chapter: 50,
            realChapter: 1,
            realVerse: 1,
            verse:"1",
            text: "In the beginning God created the heaven and the earth.",
            displayBook: "Genesis",
            displayChapter:1,
            displayVerse:"1"
        }
    }
componentWillMount(){
    this.handleVerse(1);
}
    handleFinal = async(verses) =>{
        const {text, book_name, chapter, verse} = await final(this.state.book, this.state.realChapter, verses);
        this.setState({text: text, realVerse: verses, displayBook: book_name, displayChapter:chapter, displayVerse:verse });
    }
    handleChapter = async(book) =>{
        const data = await fetchChapters(book);
        this.setState({book: data[0].book_id,chapter:data[0].chapters });
    }
    handleVerse = async(chapter) =>{
        const data= await fetchVerses(this.state.book, chapter);
        this.setState({verse: data, realChapter: chapter});
    }
    render(){
        return(
            <div className={styles.container}>
            <img className={styles.image} src={image} alt="bible logo" />
            <VersePicker handleFinal={this.handleFinal} handleChapter={this.handleChapter} handleVerse={this.handleVerse} chapter={this.state.chapter} verse={this.state.verse}/>
            <VerseOutput passage={this.state.text} book={this.state.displayBook} chapter={this.state.displayChapter} verse={this.state.displayVerse}/>
            </div>
        );
    }
};

export default App;