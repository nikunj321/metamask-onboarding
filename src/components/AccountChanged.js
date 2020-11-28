import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import MetaMaskOnboarding from '@metamask/onboarding';

const onboarding = new MetaMaskOnboarding();

class AccountChanged extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: 'A/C changed?',
            negative: true,
            positive: false
        }
    }

    accountChanged = () => {

        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum.on('accountsChanged', (newAccount) => {
                this.setState({ negative: false, content: 'Account Changed', positive: true })
            });
            onboarding.stopOnboarding();
        }

    }

    render() {
        const { content, negative, positive } = this.state;

        return (
            <div>
                <Button
                    onClick={this.accountChanged()}
                    positive={positive}
                    negative={negative}
                >
                    {content}
                </Button>
            </div>
        )
    }
}

export default AccountChanged
