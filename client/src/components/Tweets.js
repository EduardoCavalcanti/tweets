import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 20,
  },
  nested: {
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  body: {
    whiteSpace: 'pre-line',
  }
}));

function Tweets({ tweets, onDelete }) {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {tweets.map(i =>
        <ListItem key={i.id} className={classes.nested}>
          <ListItemText className={classes.body} primary={i.body} />
          <ListItemSecondaryAction>
            <IconButton onClick={(event) => onDelete(event, i.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </List>
  );
}

export default Tweets;
