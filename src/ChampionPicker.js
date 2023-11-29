import React from 'react';

class ChampionPicker extends React.Component {
    state = {
        error: '',
    };

    handleChange = (event) => {
        const value = event.target.value;
        const count = value ? parseInt(value, 10) : 0;

        if (count > this.props.maxChampions) {
            this.setState({ error: `You have exceeded the maximum number of champions (${this.props.maxChampions}).` });
        } else {
            this.setState({ error: '' });
            this.props.setCount(count);
        }
    };

    render() {
        const { error } = this.state;

        return (
            <div className="flex flex-col items-center justify-center w-full">
                <label className="block mb-2 text-lg font-bold text-gray-700">Number of Champions to Pick: </label>
                <input
                    type="number"
                    onChange={this.handleChange}
                    min="1"
                    max="150"
                    defaultValue="5"
                    className="px-3 py-2 border border-gray-300 rounded-md"
                />
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>
        );
    }
}

export default ChampionPicker;
