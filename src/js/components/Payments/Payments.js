import React from "react";

export class Payments extends React.Component {
    render() {
        return (
            <div>
                <button>Pay Me</button>
                <form action="/v1/charge" method="POST">
                    <script
                        src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                        data-key="pk_test_ZX78aKKGEfFwzu634U6LmYKJ"
                        data-amount="999"
                        data-name="DraconicSystems"
                        data-description="Example charge"
                        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                        data-locale="auto">
                    </script>
                </form>
            </div>
        );
    }
}