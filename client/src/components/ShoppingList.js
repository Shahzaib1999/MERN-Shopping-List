import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/ItemActions'
import PropTypes from 'prop-types';

class ShopingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    onDelete = id =>{
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => {
                            return (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDelete.bind(this,_id)}
                                        >&times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            )
                        })
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShopingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapsStateToProps = (state) => ({
    item: state.item
})

export default connect(mapsStateToProps, 
    { getItems, deleteItem }
)(ShopingList);