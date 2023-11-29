import React from 'react';
import ChampionPicker from './ChampionPicker';
import ChampionList from './ChampionList';

class App extends React.Component {
    state = {
        count: 5,
        maxChampions: 0
    };

    setMaxChampions = (max) => {
        this.setState({ maxChampions: max });
    };

    setChampionCount = (count) => {
        this.setState({ count });
    };

    render() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <ChampionPicker setCount={this.setChampionCount} maxChampions={this.state.maxChampions} />
                <ChampionList count={this.state.count} setMaxChampions={this.setMaxChampions} />
            </div>
        );
    }
}

export default App;
