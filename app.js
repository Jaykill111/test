class FaceBook {

    constructor() {
        this.FacebookBtn = document.getElementById("facebook");
        this.events();
    }
    
    events() {
    
        if (this.FacebookBtn) {
            this.FacebookBtn.addEventListener("click", this.openFacebook.bind(this));       
        }
    }
    
    openFacebook(e) {
        const IS_IOS = (navigator.userAgent.match(/iPad/i) != null) || (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
        const IS_ANDROID = (navigator.userAgent.match(/android/i) != null) || (navigator.userAgent.match(/Android/i) != null);
    
    
        if(IS_IOS) {
            setTimeout( function () { getURL(); }, 25);
            this.FacebookBtn.href = "fb://profile/HoangQuan11105";
        }
    
        else if (IS_ANDROID) {
            setTimeout( function () { getURL(); }, 25);
            this.FacebookBtn.href = "fb://page/HoangQuan11105";
        }
    
    e.stopPropagation();
    };
    
    getURL() {
        location.href("https://www.facebook.com/HoangQuan11105", '_blank' );
    };
    }
    
    export default FaceBook;


const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

    
