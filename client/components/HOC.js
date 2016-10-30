import React from 'react';

const ExtendComponent = (PassedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        increment(e) {
            e.preventDefault();
            this.setState({
                count: this.state.count + 1
            })
        }

        render() {
            return (
                <div>
                    <PassedComponent increment={this.increment.bind(this)} {...this.state} />
                </div>
            )
        }
    }
}
const Button = (props) => {
    return (
        <div>
            <button onClick={props.increment} className="btn">Click Me: {props.count} </button>
        </div>
    )
}

const Label = (props) => {
    return (
        <div>
            <label onMouseMove={props.increment} className="chip">Click Me: {props.count} </label>
        </div>
    )
}

const ExtendedButton = ExtendComponent(Button);
const ExtendedLabel = ExtendComponent(Label);

const Container = () => {
    return (
        <div>
            <ExtendedButton />
            <ExtendedLabel />
        </div>
    )
}
export default Container;