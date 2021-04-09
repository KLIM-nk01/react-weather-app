import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input name={'city'} type={'text'} placeholder={'City'}/>
                <button>get weather</button>
            </form>
        );
    }
}

export default Form;