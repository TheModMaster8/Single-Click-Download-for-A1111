function txt2img_ssavb_hide() {
    const txt2img_ssavb_save_info = gradioApp().getElementById('txt2img_ssavb_save_info')
    txt2img_ssavb_save_info.style.display = 'none'
}

function img2img_ssavb_hide() {
    const img2img_ssavb_save_info = gradioApp().getElementById('img2img_ssavb_save_info')
    img2img_ssavb_save_info.style.display = 'none'
}

function img2img_ssavb_addEventListener() {
    const img2img_generate = gradioApp().getElementById('img2img_generate')
    img2img_generate.removeEventListener('click', img2img_ssavb_hide)
    img2img_generate.addEventListener('click', img2img_ssavb_hide)
    const img2img_ssavb_save_info = gradioApp().getElementById('img2img_ssavb_save_info')
    img2img_ssavb_save_info.style.display = ''    
}
function txt2img_ssavb_addEventListener() {
    const txt2img_generate = gradioApp().getElementById('txt2img_generate')
    txt2img_generate.removeEventListener('click', txt2img_ssavb_hide)
    txt2img_generate.addEventListener('click', txt2img_ssavb_hide)
    const txt2img_ssavb_save_info = gradioApp().getElementById('txt2img_ssavb_save_info')
    txt2img_ssavb_save_info.style.display = ''
}

function txt2img_ssavb_save_button_addEventListener() {
    txt2img_ssavb_addEventListener()
    modal_DL()
}
function img2img_ssavb_save_button_addEventListener() {
    img2img_ssavb_addEventListener()
    modal_DL()
}


function modal_DL()
{
    //gets the parent list of image buttons.
    var allGalButtons = gradioApp().querySelectorAll('[style="display: block;"].tabitem div[id$=_gallery].gradio-gallery .thumbnails > .thumbnail-item.thumbnail-small');
    var visGallery = [];

    allGalButtons.forEach(function(elem){     //go through all buttons.
        if (elem.parentElement.offsetParent){ //*? idk ?*/        
            visGallery.push(elem);            //add current element to the end of visGallery array.
            console.log(elem);                //sanity check for debugging
        }
    });

    var viewedImgElem = visGallery.find(elem => elem.classList.contains('selected')) ?? null; //Searches though the array of classname, and returns the class with 'selected'. 
    var rawURL = viewedImgElem.firstChild.currentSrc;                                         //retrieves the URL path 'src' text.
    mydownload(rawURL.substring(0, rawURL.lastIndexOf("?")));                                 //sends to one click auto download but, removes trailing text on url that will cause the downloaded file to be formated correctly.
}

function mydownload(url) 
{
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = url.split('/').pop();
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

onUiLoaded(function() //runs on startup only. i believe...
{
    var pareDiv = document.querySelector("#lightboxModal > div");

    const myModalSave = document.createElement("span");
        myModalSave.className = "myModalSave cursor";
        myModalSave.id = "my_modal_save";
        myModalSave.innerHTML = "&#9196;";
        myModalSave.addEventListener("click", myModalSaveImage, true);
        myModalSave.title = "Download Image";
        //myModalSave.appendChild(myModalSave);
        pareDiv.insertBefore(pareDiv.appendChild(myModalSave), pareDiv.childNodes[3]);

    const myModalUpscale = document.createElement("span");
        myModalUpscale.className = "myModalUpscale cursor";
        myModalUpscale.id = "my_modal_upscale";
        myModalUpscale.innerHTML = "&#x2728;"; //✨
        myModalUpscale.addEventListener("click", myModalUpScaleImage, true);
        myModalUpscale.title = "Upscale Image";
        //myModalUpscale.appendChild(myModalUpscale);
        pareDiv.insertBefore(pareDiv.appendChild(myModalUpscale), pareDiv.childNodes[4]);
});



function myModalSaveImage(event) //runs anytime the click event is pressed for mymodelsaveimage
{
    modal_DL();
    event.stopPropagation();
}
function myModalUpScaleImage(event)
{
    modal_DL();
    event.stopPropagation();
}






//backup

//function txt2img_ssavb_hide() {
//    const txt2img_ssavb_save_info = gradioApp().getElementById('txt2img_ssavb_save_info')
//    txt2img_ssavb_save_info.style.display = 'none'
//}
//
//function img2img_ssavb_hide() {
//    const img2img_ssavb_save_info = gradioApp().getElementById('img2img_ssavb_save_info')
//    img2img_ssavb_save_info.style.display = 'none'
//}
//
//function txt2img_ssavb_addEventListener() {
//    const txt2img_generate = gradioApp().getElementById('txt2img_generate')
//    txt2img_generate.removeEventListener('click', txt2img_ssavb_hide)
//    txt2img_generate.addEventListener('click', txt2img_ssavb_hide)
//    const txt2img_ssavb_save_info = gradioApp().getElementById('txt2img_ssavb_save_info')
//    txt2img_ssavb_save_info.style.display = ''
//    //my_save_addEventListener()
//    const cur_sel = selected_gallery_index()
//}
//
//function img2img_ssavb_addEventListener() {
//    const img2img_generate = gradioApp().getElementById('img2img_generate')
//    img2img_generate.removeEventListener('click', img2img_ssavb_hide)
//    img2img_generate.addEventListener('click', img2img_ssavb_hide)
//    const img2img_ssavb_save_info = gradioApp().getElementById('img2img_ssavb_save_info')
//    img2img_ssavb_save_info.style.display = ''
//    
//}
//