// import React from 'react';
// import axios from 'axios';
//
// class ChampionList extends React.Component {
//     state = {
//         allChampions: [],
//         selectedChampions: []
//     };
//
//     componentDidMount() {
//         this.fetchChampions();
//     }
//
//     componentDidUpdate(prevProps) {
//         if (this.props.count !== prevProps.count) {
//             this.pickRandomChampions();
//         }
//     }
//
//     fetchChampions = async () => {
//         const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json');
//         const champions = Object.values(response.data.data);
//         this.setState({ allChampions: champions }, this.pickRandomChampions);
//     };
//
//     pickRandomChampions = () => {
//         const { allChampions } = this.state;
//         const { count } = this.props;
//         let selected = [];
//
//         while (selected.length < count) {
//             const randomIndex = Math.floor(Math.random() * allChampions.length);
//             const champion = allChampions[randomIndex];
//             if (!selected.includes(champion)) {
//                 selected.push(champion);
//             }
//         }
//
//         this.setState({ selectedChampions: selected });
//     };
//
//     renderChampions = () => {
//         return this.state.selectedChampions.map((champion, index) => (
//             <div key={index}>
//                 <img src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion.id}.png`} alt={champion.name} />
//                 <p>{champion.name}</p>
//             </div>
//         ));
//     };
//
//     render() {
//         return (
//             <div>
//                 {this.renderChampions()}
//             </div>
//         );
//     }
// }
//
// export default ChampionList;

import React from 'react';
import axios from 'axios';

class ChampionList extends React.Component {
    state = {
        allChampions: [],
        selectedChampions: []
    };

    componentDidMount() {
        this.fetchChampions();
    }

    componentDidUpdate(prevProps) {
        if (this.props.count !== prevProps.count) {
            this.pickRandomChampions();
        }
    }

    componentDidMount() {
        this.fetchChampions();
    }

    fetchChampions = async () => {
        const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json');
        const champions = Object.values(response.data.data);
        this.setState({ allChampions: champions }, this.pickRandomChampions);
        this.props.setMaxChampions(champions.length);
    };

    pickRandomChampions = () => {
        const { allChampions } = this.state;
        const { count } = this.props;
        let selected = [];

        while (selected.length < count) {
            const randomIndex = Math.floor(Math.random() * allChampions.length);
            const champion = allChampions[randomIndex];
            if (!selected.includes(champion)) {
                selected.push(champion);
            }
        }

        this.setState({ selectedChampions: selected });
    };

    renderChampions = () => {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {this.state.selectedChampions.map((champion, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion.id}.png`} alt={champion.name} className="w-24 h-24 rounded-md" />
                        <p className="mt-2 text-sm font-semibold">{champion.name}</p>
                    </div>
                ))}
            </div>
        );
    };

    render() {
        return (
            <div className="mt-4">
                {this.renderChampions()}
            </div>
        );
    }
}

export default ChampionList;
