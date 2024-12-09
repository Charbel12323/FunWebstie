import React, { useState } from "react";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission logic
        setFormStatus("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                Contact Me
            </h2>
            {formStatus && (
                <div className="bg-green-200 text-green-800 p-4 mb-6 rounded">
                    {formStatus}
                </div>
            )}
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactMe;
