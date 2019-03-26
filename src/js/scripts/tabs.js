const btnTabItems = document.querySelectorAll('.btn-tab');
const tabContentItems = document.querySelectorAll('.tab-content__item');

if (btnTabItems) {
    [...btnTabItems].forEach(item => item.addEventListener('click', e => {
        e.preventDefault();

        const currItem = e.currentTarget;
        const currItemDataId = currItem.getAttribute('data-tab');

        [...tabContentItems].forEach(item => {
            item.classList.add('hidden');

            if (item.id === currItemDataId) {
                item.classList.remove('hidden');
            }
        });

        [...btnTabItems].forEach(item => item.classList.remove('active'));
        currItem.classList.add('active');
    }));
}
