import React, { PureComponent } from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Grid = styled.div `
  display: grid;
  grid-template-columns: 5fr 5fr 2fr;
  grid-template-rows: 38px;
  grid-gap: 15px;
  max-width: 800px;
  margin: 130px auto 20px;

  @media (max-width: 780px){
    grid-template-rows: 38px 38px 38px;
    grid-template-columns: 1fr;
  }
`;

class SearchBar extends PureComponent {
  state = { term: '', genre: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term, this.state.genre);
  };

  render() {
    //TODO for each in the drop down state we will create a custom row of movies with a header.
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Grid>
          <Form.Input
            inverted
            type='text'
            placeholder='Movie, Show, or Actor/Actress '
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value, genre: '' })}
          />
          <Dropdown
            placeholder='Crazy Sub-Genres'
            fluid
            selection
            options={this.props.genres}
            lazyLoad
            clearable
            search
            value={this.state.genre}
            onChange={(e, d) => {
              this.setState({ term: '', genre: d.value });
            }}
          />
          <Button style={{margin: '0'}} type='submit'>Search</Button>
        </Grid>
      </Form>
    );
  }
}

export default SearchBar;
