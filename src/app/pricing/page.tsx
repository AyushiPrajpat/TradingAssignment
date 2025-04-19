// app/pricing/page.tsx

export default function PricingPage() {
    const plans = [
      {
        title: "Free",
        price: "$0",
        description: "Perfect for getting started",
        features: [
          "Basic analytics",
          "Up to 5 projects",
          "Community support",
        ],
        buttonText: "Get Started",
        highlight: false,
      },
      {
        title: "Pro",
        price: "$29",
        description: "For growing businesses",
        features: [
          "Advanced analytics",
          "Up to 20 projects",
          "Priority support",
          "Custom domains",
        ],
        buttonText: "Start Free Trial",
        highlight: true,
      },
      {
        title: "Business",
        price: "$99",
        description: "For larger teams",
        features: [
          "Enterprise analytics",
          "Unlimited projects",
          "24/7 phone support",
          "Custom integrations",
          "SLA guarantee",
        ],
        buttonText: "Contact Sales",
        highlight: false,
      },
      {
        title: "Enterprise",
        price: "Custom",
        description: "For organizations",
        features: [
          "Custom solutions",
          "Dedicated support team",
          "Custom contracts",
          "On-premise options",
          "Advanced security",
        ],
        buttonText: "Talk to Sales",
        highlight: false,
      },
    ];
  
    return (
      <div className="py-20 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Simple, transparent pricing</h2>
        <p className="text-gray-600 mb-12">Choose the perfect plan for your needs</p>
  
        <div className="grid lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md border ${
                plan.highlight ? "border-blue-500 shadow-md relative" : "border-gray-100"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
  
              <h3 className="text-lg text-gray-800 font-semibold mb-1">{plan.title}</h3>
              <p className="text-3xl text-gray-800 font-bold mb-1">{plan.price}"<span className="text-base text-gray-500 font-normal">/month</span></p>
              <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
  
              <ul className="text-left text-gray-800 text-sm space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-600">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
  
              <button
                className={`w-full py-2 rounded-md border font-medium text-sm ${
                  plan.highlight
                    ? "bg-blue-600 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
  
        <p className="mt-10 text-sm text-blue-600">
          Have questions? <a href="/faq" >Check our FAQ</a>
        </p>
      </div>
    );
  }
  