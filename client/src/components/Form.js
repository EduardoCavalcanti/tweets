import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function ({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        multiline={true}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="body"
        label="What's up?"
        name="body"
        rows={3}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large">
        Tweet
        </Button>
    </form>
  );
}
