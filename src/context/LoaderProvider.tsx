import React, { createContext, useState, useContext, type ReactNode } from "react";

// 1. Define the interface for the context state
interface LoaderProps {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

// 2. Create the context with a default value
// eslint-disable-next-line react-refresh/only-export-components
export const LoaderContext = createContext<LoaderProps>({
    isLoading: false,
    setIsLoading: () => {}
});

// 3. Create the Provider component
interface LoaderProviderProps {
    children: ReactNode;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (context === undefined) {
        throw new Error("useLoader must be used within a LoaderProvider");
    }
    return context;
};
