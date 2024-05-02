import gradio as gr
import os
import shutil
import modules.ui as ui 
from modules import scripts
from modules import script_callbacks
from modules.ui_components import ToolButton
from pathlib import Path
from os.path import expanduser
#from bs4 import BeautifulSoup

save_symbol = '\U0001F53D'  # ❌ 128317 🔽 '\U0001F53D'
tab_current = ""
image_files = []

def get_download_folder():
    # Get the user's home directory
    home = expanduser("~")
    
    # Check if we are on a Windows system
    if os.name == 'nt':
        return os.path.join(home, 'Downloads')
    
    # Check if we are on a macOS system
    elif sys.platform == 'darwin':
        return os.path.join(home, 'Downloads')
    
    # Check if we are on a Linux system
    elif os.name == 'posix':
        return os.path.join(home, 'Downloads')
    
    # Default case
    else:
        return None

try:
    download_folder = get_download_folder()
except ImportError:
    print("could not find download folder?????.")

def ssavb_save(save_info):
    for image_file in reversed(image_files):
        if os.path.exists(image_file):
            name = os.path.basename(image_file)
            save_info = f"{name} saved"
            if not name.startswith('grid-'):
                mysave(image_file)
                save_info = f"{image_file} saved"
                break
        save_info = "Could not save anything"
    save_info = f"<b>{save_info}</b>"
    return save_info

def mysave(filename): 
    shutil.copy(filename, download_folder)
    return

class Script(scripts.Script):
    def title(self):
        return "Add Save button"

    def show(self, is_img2img):
        return scripts.AlwaysVisible

    def process(self, p):
        global image_files
        image_files = []

def on_after_component(component, **kwargs):
    global tab_current, ssavb_save_info
    send_extras_name_old = "extras_tab"
    send_extras_name_new = tab_current + "_send_to_extras"    #"_upscale" not present on image2image tab, so button will not show
    element = kwargs.get("elem_id")
    if element in (send_extras_name_old, send_extras_name_new) and tab_current != "":
        if element == send_extras_name_old:
            ssavb_save_button = gr.Button(value=save_symbol)
        else:
            ssavb_save_button = ToolButton(save_symbol, elem_id=tab_current + "_ssavb_save_button", tooltip="Save/Download")
        ssavb_save_button.click(
            fn=ssavb_save,
            inputs=[ssavb_save_info],
            outputs=[ssavb_save_info],
            _js=tab_current + "_ssavb_addEventListener",
        )
        #find_selected_image_src(html_content)
        tab_current = ""
    elif element in ["txt2img_gallery", "img2img_gallery"]:           #if the element is found? in the txt2img or img2img  proceed.
        tab_current = element.split("_", 1)[0]                        #splits the string at the _, ,1 specifies the attemps to find and cut, 0 is the first index of the finished split command.
        with gr.Column():
            ssavb_save_info = gr.HTML(elem_id=tab_current + "_ssavb_save_info") #The gr.HTML function is used to create an HTML element that can be displayed in a Gradio interface.
script_callbacks.on_after_component(on_after_component)

def on_image_saved(params : script_callbacks.ImageSaveParams):
    global image_files
    image_files.append(os.path.realpath(params.filename))
script_callbacks.on_image_saved(on_image_saved)







#def ssavb_save(save_info):
#    for image_file in reversed(image_files):
#        if os.path.exists(image_file):
#            name = os.path.basename(image_file)
#            save_info = f"{name} saved"
#            if not name.startswith('grid-'):
#                delete(image_file)
#                save_info = f"{image_file} saved"
#
#                break
#        save_info = "Could not save anything"
#    save_info = f"<b>{save_info}</b>"
#
#    return save_info


#def on_after_component(component, **kwargs):
#    global tab_current, ssavb_save_info
#    send_extras_name_old = "extras_tab"
#    send_extras_name_new = tab_current + "_send_to_extras"
#    element = kwargs.get("elem_id")
#    if element in (send_extras_name_old, send_extras_name_new) and tab_current != "":
#        if element == send_extras_name_old:
#            ssavb_save_button = gr.Button(value=save_symbol)
#        else:
#            ssavb_save_button = ToolButton(save_symbol, elem_id=tab_current + "_ssavb_save_button", tooltip="Save/Download")
#        ssavb_save_button.click(
#            fn=ssavb_save,
#            inputs=[ssavb_save_info],
#            outputs=[ssavb_save_info],
#            _js=tab_current + "_ssavb_addEventListener",
#        )
#        #find_selected_image_src(html_content)
#        tab_current = ""
#    elif element in ["txt2img_gallery", "img2img_gallery"]:
#        tab_current = element.split("_", 1)[0]
#        with gr.Column():
#            ssavb_save_info = gr.HTML(elem_id=tab_current + "_ssavb_save_info")
#script_callbacks.on_after_component(on_after_component)

#def on_image_saved(params : script_callbacks.ImageSaveParams):
#    global image_files
#    image_files.append(os.path.realpath(params.filename))
#script_callbacks.on_image_saved(on_image_saved)
#
#def download_image():
#    selectedImage = ui.send_gradio_gallery_to_image
#    print(selectedImage)


# chatgpt generated START
# Sample HTML content
#html_content = """
#<div class="thumbnails scroll-hide svelte-1b19cri">
#    <button class="button1"> <img src="image1.jpg"> </button>
#    <button class="button2 selected"> <img src="image2.jpg"> </button>
#    <button class="button3"> <img src="image3.jpg"> </button>
#</div>
#"""

#html_content = gr.HTML(elem_id='thumbnails scroll-hide svelte-1b19cri')
#def find_selected_image_src(html_content):
    # Parse HTML content using BeautifulSoup
#    soup = BeautifulSoup(html_content, 'html.parser')

    # Find the div with class "thumbnails"
#    thumbnails_div = soup.find('div', class_='thumbnails')
#    if thumbnails_div:
        # Loop through the buttons under the thumbnails div
#        for button in thumbnails_div.find_all('button'):
#            class_name = button['class'][0]  # Get the class name of the button
#            if class_name.endswith("selected"):
#                # Extract the src attribute of the img tag under the selected button
#                img_src = button.find('img')['src']
#                return img_src

#    return "No image selected"

# Call the function with the HTML content
#selected_image_src = find_selected_image_src(html_content)
#print(selected_image_src)  # Output the selected image source

#ChatGPT END


