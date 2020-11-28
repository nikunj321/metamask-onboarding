import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import MetaMaskOnboarding from '@metamask/onboarding';

const onbording = new MetaMaskOnboarding();

class Isinstalled extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            negative: false,
            positive: false,
            content : 'Is Installed'
        }
        
    }

    isInstalled = () => {
        let installed = MetaMaskOnboarding.isMetaMaskInstalled();
        this.setState({ positive : installed});
        this.setState({ negative : !installed});
        if(!installed) {
            onbording.startOnboarding();
            this.setState({ content : 'start onBoarding'});
        }
    }

    render() {
        return (
            <div>
                <Button
                    onClick={this.isInstalled}
                    primary
                    positive={this.state.positive}
                    negative={this.state.negative}
                >
                    {this.state.content}
                    </Button>
            </div>
        )
    }
}

export default Isinstalled
