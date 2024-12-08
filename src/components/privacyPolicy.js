import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-6 border-b-4 border-blue-500 inline-block">
                    Privacy Policy
                </h1>
                <p className="text-gray-700 leading-relaxed">
                    At <strong>Charbel's Tech Reviews Blog</strong>, accessible from{" "}
                    <a
                        href="https://charbelblog.vercel.app"
                        className="text-blue-500 hover:underline"
                    >
                        https://charbelblog.vercel.app
                    </a>
                    , one of our main priorities is the privacy of our visitors. This
                    Privacy Policy document contains types of information that is
                    collected and recorded by Charbel's Tech Reviews Blog and how we use
                    it.
                </p>

                <h2 className="text-2xl font-bold text-blue-500 mt-6">
                    Information We Collect
                </h2>
                <p className="text-gray-700 mt-2">
                    When you visit our website, we may collect certain information
                    automatically, including your IP address, browser type, referring
                    website, and the time and date of your visit. If you voluntarily
                    contact us or subscribe to our newsletter, we may collect your name
                    and email address.
                </p>

                <h2 className="text-2xl font-bold text-blue-500 mt-6">
                    How We Use Your Information
                </h2>
                <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                    <li>To provide, operate, and maintain our website.</li>
                    <li>To improve, personalize, and expand our content.</li>
                    <li>
                        To understand and analyze how you use our website, helping us
                        optimize your experience.
                    </li>
                    <li>To communicate with you, including for customer service.</li>
                    <li>To send updates, newsletters, and promotional content.</li>
                </ul>

                <h2 className="text-2xl font-bold text-blue-500 mt-6">
                    Cookies and Web Beacons
                </h2>
                <p className="text-gray-700 mt-2">
                    Like any other website, we use "cookies" to store information,
                    including visitor preferences and the pages on the website that were
                    accessed or visited. This information is used to optimize the user's
                    experience by customizing our web page content.
                </p>

                <h2 className="text-2xl font-bold text-blue-500 mt-6">
                    Google AdSense
                </h2>
                <p className="text-gray-700 mt-2">
                    We use Google AdSense to serve ads on our website. Google may use
                    cookies to serve ads based on your prior visits to our site or other
                    websites. You can learn more about Google’s use of cookies by
                    visiting their{" "}
                    <a
                        href="https://policies.google.com/technologies/ads"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Advertising Policies page
                    </a>
                    .
                </p>

                <h2 className="text-2xl font-bold text-blue-500 mt-6">
                    Third-Party Privacy Policies
                </h2>
                <p className="text-gray-700 mt-2">
                    Charbel's Tech Reviews Blog's Privacy Policy does not apply to other
                    advertisers or websites. Thus, we encourage you to consult the
                    respective Privacy Policies of these third-party ad servers for more
                    detailed information.
                </p>

                <h2 className="text-2xl font-bold text-blue-500 mt-6">
                    Your Consent
                </h2>
                <p className="text-gray-700 mt-2">
                    By using our website, you hereby consent to our Privacy Policy and
                    agree to its terms.
                </p>

                <h2 className="text-2xl font-bold text-blue-500 mt-6">Updates</h2>
                <p className="text-gray-700 mt-2">
                    We may update this Privacy Policy from time to time. If we make
                    changes, we will update the date at the bottom of this page.
                </p>

                <p className="text-gray-700 mt-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
