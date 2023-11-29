import React from 'react';
import ChampionPicker from './ChampionPicker';
import ChampionList from './ChampionList';

class App extends React.Component {
    state = {
        count: 5
    };

    setChampionCount = (count) => {
        this.setState({ count });
    };

    render() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <ChampionPicker setCount={this.setChampionCount} />
                <ChampionList count={this.state.count} />
            </div>
        );
    }
}

export default App;
