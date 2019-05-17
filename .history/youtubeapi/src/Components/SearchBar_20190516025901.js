import react from 'react';

class SearchBar extends React.Component{
    state = {
        refreshText: ''
    };
    /**SET THE STATE AS YOU TYPE */
    typing = (e) => {
        this.setState({
            refreshText: e.target.value,
        });
    }
}
