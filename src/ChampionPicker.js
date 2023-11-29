import React from 'react';

class ChampionPicker extends React.Component {
    handleChange = (event) => {
        const value = event.target.value;
        const count = value ? parseInt(value, 10) : 0;
        this.props.setCount(count);
    };

    render() {
        return (
            <div className="mb-4">
                <label className="block mb-2 text-lg font-bold text-gray-700">Number of Champions to Pick: </label>
                <input type="number" onChange={this.handleChange} min="1" max="20" defaultValue="5" className="px-3 py-2 border border-gray-300 rounded-md" />
            </div>
        );
    }
}

export default ChampionPicker;
