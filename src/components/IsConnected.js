import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import MetaMaskOnboarding from '@metamask/onboarding';

const onboarding = new MetaMaskOnboarding();

class IsConnected extends Component {
    constructor(props) {
        super(props)

        this.state = {
            positive: false,
            content: 'Connect',
            accounts: []
        }
    }

    isConnected = async () => {
        if(MetaMaskOnboarding.isMetaMaskInstalled()) {
            
        this.setState({ accounts: await window.ethereum.request({ method: 'eth_requestAccounts' }) });
        if (this.state.accounts.length > 0) {
            this.setState({ positive: true, content: 'Connected' });
            onboarding.stopOnboarding();
        }
        
        }

    }

    render() {
        const { positive, content } = this.state; // destructuring the state
        return (
            <div>
                <Button
                    onClick={this.isConnected}
                    primary
                    positive={positive}
                >
                    {content}
                </Button>
            </div>
        )
    }
}

export default IsConnected
