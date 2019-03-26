const shareLinks = document.querySelectorAll('.btn-share');
const documentUrl = document.URL;

const SHARELINKS = {
    twitter: {
        key: 'twitter-share',
        path: `https://twitter.com/share?url=${documentUrl}`
    },
    facebook: {
        key: 'facebook-share',
        path: `https://www.facebook.com/sharer/sharer.php?u=${documentUrl}`
    },
    linkedin: {
        key: 'linkedin-share',
        path: `https://www.linkedin.com/shareArticle?mini=true&url=${documentUrl})`
    }
};

if (shareLinks) {
    [...shareLinks].forEach(item => item.addEventListener('click', e => {
        e.preventDefault();

        const currItem = e.currentTarget;
        const currItemDataId = currItem.getAttribute('data-js');
        let shareWindow;

        if (currItemDataId === SHARELINKS.twitter.key) {
            shareWindow = window.open(SHARELINKS.twitter.path, 'twitter-popup', 'left=5, top=5, margin=20, height=350, width=600');
        } else if (currItemDataId === SHARELINKS.facebook.key) {
            shareWindow = window.open(SHARELINKS.facebook.path, 'facebook-popup', 'left=5, top=5, margin=20, height=350, width=600');
        } else if (currItemDataId === SHARELINKS.linkedin.key) {
            shareWindow = window.open(SHARELINKS.linkedin.path, 'linkedin-popup', 'left=5, top=5, margin=20, height=350, width=600');
        } else {
            shareWindow = '';
        }

        if (shareWindow.focus) {
            shareWindow.focus();
        }

        return false;
    }));
}
