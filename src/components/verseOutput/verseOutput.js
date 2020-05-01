import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import styles from "./verseOutput.module.css"
const VerseOutput = ({passage, book, chapter, verse}) => {
    return (
        <div className={styles.container}>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="body2" gutterBottom>
                            {passage}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                        {`${book} ${chapter}:${verse}`}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default VerseOutput;
