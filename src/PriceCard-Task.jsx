import "./PriceCard.css"
const data = [
    {
        choice: "FREE",
        title: "$0/month",
        features: [
            { offer: "Single User", isEnabled: true },
            { offer: "50GB Storage", isEnabled: true },
            { offer: "Unlimited Public Projects", isEnabled: true },
            { offer: "Community Access", isEnabled: true },
            { offer: "Unlimited Private Projects", isEnabled: false },
            { offer: "Dedicated Phone Support", isEnabled: false },
            { offer: "Free Subdomain", isEnabled: false },
            { offer: "Monthly Status Reports", isEnabled: false },
        ],
    },

    {
        choice: "PLUS",
        title: "$9/month",
        features: [
            { offer: "5 Users", isEnabled: true },
            { offer: "50GB Storage", isEnabled: true },
            { offer: "Unlimited Public Projects", isEnabled: true },
            { offer: "Community Access", isEnabled: true },
            { offer: "Unlimited Private Projects", isEnabled: true },
            { offer: "Dedicated Phone Support", isEnabled: true },
            { offer: "Free Subdomain", isEnabled: true },
            { offer: "Monthly Status Reports", isEnabled: false },
        ],
    },

    {
        choice: "PRO",
        title: "$49/Month",
        features: [
            { offer: "Unlimited Users", isEnabled: true },
            { offer: "50GB Storage", isEnabled: true },
            { offer: "Unlimited Public Projects", isEnabled: true },
            { offer: "Community Access", isEnabled: true },
            { offer: "Unlimited Private Projects", isEnabled: true },
            { offer: "Dedicated Phone Support", isEnabled: true },
            { offer: "Free Subdomain", isEnabled: true },
            { offer: "Monthly Status Reports", isEnabled: true },
        ],
    },
];

const Subscriptions = () => {
    return (

        <div
            style={{
                backgroundcolor: "skyblue",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}

        >

            {data.map((Val) => (

                <div key={Val.title}
                    style={{ border: "18px solid #0265e7", margin: "15px", padding: "30px" }}
                >
                    <p>{Val.choice}</p>
                    <h2>{Val.title}</h2>

                    {Val.features.map((feat) => (
                        <p key={feat.offer}
                        >

                            {feat.isEnabled && <i className="fa-solid fa-check"></i>}
                            {!feat.isEnabled && <i className="fa-solid fa-x"></i>}
                            {" "}
                            {feat.offer}</p>

                    ))}

                    <div>
                        <button className="btn">button</button>
                    </div>
                </div>

            ))}
        </div>
    )
};
export default Subscriptions;