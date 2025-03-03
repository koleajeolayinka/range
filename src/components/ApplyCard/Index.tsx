import {FC, JSX} from "react";

interface ApplyCardProps {
    type: 'Individual' | 'Team';
    description: string;
    icon: JSX.Element;
}


const ApplyCard: FC<ApplyCardProps> = ({ type, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-64">
            <div className="text-sky-500 text-4xl mb-4">{icon}</div>
            <p className="text-gray-600">
                To apply as a <strong>{type}</strong>, click here
            </p>
            <button className="mt-4 px-6 py-2 cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2">
                {type} <span className="text-lg">→</span>
            </button>
        </div>
    );
};

export default ApplyCard;