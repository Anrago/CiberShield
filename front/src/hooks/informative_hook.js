import { useState, useEffect } from "react";

export default function useInformativeCards() {
    const [openCardId, setOpenCardId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    // Sync the two state variables
    useEffect(() => {
        if (openCardId !== null) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [openCardId]);

    useEffect(() => {
        // If modal is open, trigger the showModal method on the dialog
        if (isOpen) {
            const modal = document.getElementById('virusModal');
            if (modal) {
                modal.showModal();
            }
        }
    }, [isOpen]);

    const openCard = (cardId) => {
        setOpenCardId(cardId);
        setIsOpen(true);
    };

    const closeCard = () => {
        setOpenCardId(null);
        setIsOpen(false);
    };

    const isCardOpen = (cardId) => {

        return openCardId === cardId;
    };

    return {
        // New API
        openCard,
        closeCard,
        isCardOpen,
        openCardId,
        
        // Old API for backward compatibility
        isOpen,
        setIsOpen
    };
}