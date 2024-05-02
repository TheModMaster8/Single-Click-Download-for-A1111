function txt2img_ssavb_hide() {
    const txt2img_ssavb_save_info = gradioApp().getElementById('txt2img_ssavb_save_info')
    txt2img_ssavb_save_info.style.display = 'none'
}

function img2img_ssavb_hide() {
    const img2img_ssavb_save_info = gradioApp().getElementById('img2img_ssavb_save_info')
    img2img_ssavb_save_info.style.display = 'none'
}

function txt2img_ssavb_addEventListener() {
    const txt2img_generate = gradioApp().getElementById('txt2img_generate')
    txt2img_generate.removeEventListener('click', txt2img_ssavb_hide)
    txt2img_generate.addEventListener('click', txt2img_ssavb_hide)
    const txt2img_ssavb_save_info = gradioApp().getElementById('txt2img_ssavb_save_info')
    txt2img_ssavb_save_info.style.display = ''
}

function img2img_ssavb_addEventListener() {
    const img2img_generate = gradioApp().getElementById('img2img_generate')
    img2img_generate.removeEventListener('click', img2img_ssavb_hide)
    img2img_generate.addEventListener('click', img2img_ssavb_hide)
    const img2img_ssavb_save_info = gradioApp().getElementById('img2img_ssavb_save_info')
    img2img_ssavb_save_info.style.display = ''    
}


//function all_gallery_buttons() {
//    var allGalleryButtons = gradioApp().querySelectorAll('[style="display: block;"].tabitem div[id$=_gallery].gradio-gallery .thumbnails > .thumbnail-item.thumbnail-small');
//    var visibleGalleryButtons = [];
//    allGalleryButtons.forEach(function(elem) {
//        if (elem.parentElement.offsetParent) {
//            visibleGalleryButtons.push(elem);
//        }
//    });
//    return visibleGalleryButtons;
//}
//
//function selected_gallery_button() {
//    return all_gallery_buttons().find(elem => elem.classList.contains('selected')) ?? null;
//}
//
//function selected_gallery_index() {
//    return all_gallery_buttons().findIndex(elem => elem.classList.contains('selected'));
//}
//
//function extract_image_from_gallery(gallery) {
//    if (gallery.length == 0) {
//        return [null];
//    }
//    if (gallery.length == 1) {
//        return [gallery[0]];
//    }
//
//    var index = selected_gallery_index();
//
//    if (index < 0 || index >= gallery.length) {
//        // Use the first image in the gallery as the default
//        index = 0;
//    }
//
//    return [gallery[index]];
//}




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