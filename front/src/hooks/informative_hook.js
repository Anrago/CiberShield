import { useState, useEffect } from "react";

export default function useInformativeCards() {
    const [openCardId, setOpenCardId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [malware, setMalware] = useState(null);

    useEffect(() => {
        if (openCardId !== null) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [openCardId]);

    useEffect(() => {
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
        malware,
        setMalware,
        isOpen,
        setIsOpen
    };
}