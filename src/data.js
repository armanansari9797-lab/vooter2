export const knowledgeBase = {
    greeting: {
        text: "Hello! I'm CivicGuide, your personal election assistant. How can I help you prepare for the upcoming elections today?",
        options: [
            { text: "How do I register?", action: "registration" },
            { text: "Election Timeline", action: "timeline" },
            { text: "Voting Process", action: "process" }
        ]
    },
    registration: {
        text: "Registering to vote is the first step! Here's how you do it:",
        steps: [
            "Check your eligibility (must be 18+ and a citizen).",
            "Gather your documents (ID, proof of address).",
            "Fill out the registration form online or in person.",
            "Submit and wait for your Voter ID card."
        ],
        options: [
            { text: "What documents do I need?", action: "documents" },
            { text: "Show me the timeline", action: "timeline" }
        ]
    },
    timeline: {
        text: "Here is the general timeline for the upcoming election cycle:",
        steps: [
            "Registration Deadline: 30 days before election day",
            "Early Voting Begins: 15 days before election day",
            "Absentee Ballot Request Deadline: 7 days before",
            "Election Day: Don't forget to vote!"
        ],
        options: [
            { text: "Tell me about the voting process", action: "process" }
        ]
    },
    process: {
        text: "Voting on election day is simple if you're prepared:",
        steps: [
            "Find your designated polling station.",
            "Bring your Voter ID or approved identification.",
            "Check in with the poll workers.",
            "Proceed to the voting booth and cast your ballot.",
            "Get your 'I Voted' sticker!"
        ],
        options: [
            { text: "What documents do I need?", action: "documents" },
            { text: "Go back to start", action: "greeting" }
        ]
    },
    documents: {
        text: "You will generally need one or more of the following documents to register or vote:",
        steps: [
            "Government-issued Photo ID (Driver's License, Passport)",
            "Utility bill with your name and current address",
            "Bank statement",
            "Birth certificate (for initial registration)"
        ],
        options: [
            { text: "How do I register?", action: "registration" }
        ]
    },
    unknown: {
        text: "I'm not quite sure about that specific question, but I can help you with registration, timelines, the voting process, or required documents. What would you like to know?",
        options: [
            { text: "How do I register?", action: "registration" },
            { text: "Voting Process", action: "process" }
        ]
    }
};
