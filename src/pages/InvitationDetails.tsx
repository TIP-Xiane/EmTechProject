import { Link } from "react-router-dom";

const InvitationDetails = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3f0f12] via-[#5a151c] to-[#2f0a0e] text-emerald-100 p-8">
      <div className="max-w-3xl w-full bg-[#1f0b10]/80 border border-[#7f202a]/70 rounded-3xl p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <h1 className="text-4xl font-heading font-black tracking-tight text-[#ffcccc] mb-6">Invitation Details</h1>
        <p className="text-lg text-[#f4d3d6] leading-relaxed mb-6">
          Welcome to the invitation page. Here you can get complete details about the event,
          direction, and scheduling. We're excited to have you with us.
        </p>
        <ul className="space-y-3 text-[#fef2f2] mb-8">
          <li>• Date: June 20, 2026</li>
          <li>• Time: 5:00 PM - 9:00 PM</li>
          <li>• Location: Emerald Hall, City Center</li>
          <li>• Dress Code: Smart Casual with maroon accents</li>
        </ul>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-[#9e1f2e] hover:bg-[#a62a3a] transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default InvitationDetails;
