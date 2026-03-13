import { useState, useEffect } from "react";

export default function useInformativeCards() {
    const [openCardId, setOpenCardId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [malware, setMalware] = useState(null);
    const [example, setPhishingExample] = useState('');
    
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

    const exampleSeleciton = (example) => {
        setPhishingExample(example);
    }


    const openCard = (cardId) => {
        exampleSeleciton(cardId);
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
        setIsOpen,
        example,
    };
}