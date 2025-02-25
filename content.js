chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "applyFilter") {
        let filterStyles = {
            "protanopia": "grayscale(50%) sepia(100%)",
            "deuteranopia": "grayscale(50%) sepia(50%)",
            "tritanopia": "grayscale(50%) hue-rotate(180deg)",
            "achromatopsia": "grayscale(100%)",
            "none": "none"
        };
        
        document.body.style.filter = filterStyles[request.filter] || "none";
    }
});
