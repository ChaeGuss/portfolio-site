import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Styled from "styled-components";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { projects } from "../../data/constants";

const Heading = Styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 2rem;
`;

const index = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Heading>
          <h2>My Work</h2>
        </Heading>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {projects.map((result, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={result.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" marginBottom={1.5}>
                      {result.description}
                    </Typography>
                    {result.tags}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                   GitHub<a href={result.github}></a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default index;
