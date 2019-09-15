import React from 'react';
import TrelloList from './components/TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './components/TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'
class App extends React.Component {
  onDragEnd = () => {

  }
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h1>Hello</h1>
          <div style={styles.listsContainer}>
            {lists.map((list) => {
              return <TrelloList listId={list.id} key={list.id} title={list.title} cards={list.cards} />
            })}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}
const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
