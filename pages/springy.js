import { Spring, Keyframes, config } from 'react-spring'
import { Component } from 'react';
import Page from '../layouts/main';

const CartoonContainer = Keyframes.Spring({
    running: [
        { transform: 'translateX(-100px)' }, 
        { transform: 'translateX(350px)', config: { 
            tension: 390, friction: 180
        } }
    ],
    panting: [{ opacity: 1, delay: 10000 }],
    sleeping: [{ opacity: 1 }],
    vanish: [{ opacity: 0 }],
    runningleft: [{ transform: 'translateX(-500px)', delay: 0, config: { 
            tension: 170, friction: 160
        } 
    }]
})

class Springy extends Component {
    state = {
        image: '/static/gifs/running.gif',
        action: 'running'
    }

    interact = () =>  {
        console.log('interacting in state:', this.state.action);

        switch (this.state.action) {
            case 'sleeping':
                this.setState({ image: '/static/gifs/runningleft.gif', action: 'runningleft' });
                break;
            case 'panting':
                this.setState({ image: '/static/gifs/sleeping.gif', action: 'sleeping' });
                break;
            default:
        }
    }

    transition = () => {
        console.log('handling rest transition for: ', this.state.action);
        switch (this.state.action) {
            case 'running':
                this.setState({ image: '/static/gifs/panting.gif', action: 'panting' });
                break;
            case 'panting':
                this.setState({ image: '/static/gifs/sleeping.gif', action: 'sleeping' });
                break;
            case 'runningleft':
                this.setState({ action: 'vanish' });
                break;
            case 'vanish':
                if (this.state.action != 'vanish') {
                    this.setState({ action: 'vanish' });
                };
                break;
            case 'sleeping':
                break;
            default:
                this.setState({ image: '/static/gifs/sleeping.gif', action: 'sleeping' })
                break;
        }
    }

    render() {
        const action = this.state.action;
        const image = this.state.image;
        return(
            <Page>
                <div className="animated-div">
                    <CartoonContainer 
                        state={action}
                        onRest={this.transition}>
                            {props => <div style={props}><img onClick={this.interact} src={image} className="animation" /></div>}
                    </CartoonContainer>
                </div>
            </Page>
        )
    }
}

export default Springy;