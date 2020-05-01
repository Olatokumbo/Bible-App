import React, { useState, useEffect } from "react";
import { Grid, FormControl, NativeSelect, InputLabel } from "@material-ui/core";
import styles from "./versePicker.module.css";
import { fetchBooks } from "../../api";
const VersePicker = ({ handleFinal, handleChapter, handleVerse, chapter, verse }) => {
    const [books, setBooks] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [verses, setVerses] = useState([]);
    useEffect(() => {
        const fetchedBooks = async () => {
            setBooks(await fetchBooks());
        }
        fetchedBooks();
    }, []);

    useEffect(() => {
        const array = [];
        for (let i = 1; i <= chapter; i++) {
            array.push(i);
        }
        console.log(array);
        setChapters(array);
    }, [chapter]);

    useEffect(() => {
        const array1 = [];
        for (let i = 1; i <= verse; i++) {
            array1.push(i);
        }
        console.log(array1);
        setVerses(array1);
    }, [verse]);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={4} className={styles.book}>
                    <FormControl className={styles.input}>
                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                            Book
                  </InputLabel>
                        <NativeSelect onChange={(e) => (handleChapter(e.target.value))}>
                            <option value="" disabled>Book</option>
                            {books.map((data) => (<option key={data.book_id} value={data.book_id}>{data.book_name}</option>))}
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} className={styles.book}>
                    <FormControl className={styles.input}>
                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                            Chapter
                  </InputLabel>
                        <NativeSelect onChange={(e) => handleVerse(e.target.value)}>
                        <option value="" disabled>Chapter</option>
                            {chapters.map((data) => (<option key={data} value={data}>{data}</option>))}
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} className={styles.book}>
                    <FormControl className={styles.input}>
                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                            Verse
                  </InputLabel>
                        <NativeSelect onChange={(e) => handleFinal(e.target.value)}>
                        <option aria-label="0" value="" />
                            {verses.map((data) => (<option key={data} value={data}>{data}</option>))}
                        </NativeSelect>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
}

export default VersePicker;
