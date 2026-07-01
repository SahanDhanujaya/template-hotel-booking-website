import React from "react";
import { useLoader } from "../../context/LoaderProvider"; // Adjust path as needed
import { DotLoader } from "react-spinners";

export const Loader: React.FC = () => {
    const { isLoading } = useLoader();

    // Render nothing if loading is false
    if (!isLoading) return null;

    return (
        <div 
            className="fixed inset-0 z-100 flex items-center justify-center"
            role="alert" 
            aria-busy="true"
        >
            {/* Spinner */}
            {/* <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" /> */}
            <DotLoader color="#0F766E" />
        </div>
    );
};