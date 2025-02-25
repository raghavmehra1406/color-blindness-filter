document.getElementById("applyFilter").addEventListener("click", function () {
    let selectedFilter = document.getElementById("filter").value;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: applyColorFilter,
            args: [selectedFilter]
        });
    });
});

function applyColorFilter(filterType) {
    let filterStyles = {
        "protanopia": "grayscale(50%) sepia(100%)",
        "deuteranopia": "grayscale(50%) sepia(50%)",
        "tritanopia": "grayscale(50%) hue-rotate(180deg)",
        "achromatopsia": "grayscale(100%)",
        "none": "none"
    };

    document.body.style.filter = filterStyles[filterType] || "none";
}
