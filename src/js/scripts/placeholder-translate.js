const placeholders = document.querySelectorAll('input[placeholder]');
const placeholdersArr = [...placeholders];
const placeholdersFirst = [...placeholders][0];

if (placeholdersArr.length) {
    placeholdersArr.forEach((input, i) => {
        const placeholderEl = document.createElement('div');
        placeholderEl.className = "placeholders hidden";
        placeholderEl.innerText = input.placeholder;

        $('.email-form').append(placeholderEl);
    });

    // Save the first placeholder in a closure
    let originalPH = placeholdersFirst.placeholder;

    // Check for changes and update as needed
    setInterval(() => {
        if (isTranslated()) {
            updatePlaceholders();
            originalPH = placeholdersFirst.placeholder;
        }
    }, 500);

    const placeholdersDiv = document.querySelectorAll('.placeholders');

    const isTranslated = () => originalPH !== [...placeholdersDiv][0].innerText;

    const updatePlaceholders = () => placeholdersArr.forEach((item, i) => {
        item.placeholder = [...placeholdersDiv][i].innerText;
        originalPH = placeholdersFirst.placeholder;
    });
}
