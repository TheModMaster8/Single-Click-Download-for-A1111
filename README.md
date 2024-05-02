# Single-Click-Download-for-A1111
a non-working attempt to add a single click download button to a1111 for currently previewed images in the gallery.

the majority of the code is addapeted from the exstension by AlUlkesh, the link is here
https://github.com/AlUlkesh/sd_delete_button?tab=readme-ov-file

my knowlede of programming is very basic, and the lack of documentaion of a1111 is the worst i've ever seen.
my goal is to add a button to the gallery button bar, this button will "download"/copy the current viewed image to the users downloads folder. 
the problem i am having is this, i do not know to to get the currently selected image with python.
my stratigy is this. 
  1.  on button press call def to get gallery_image_list
  2.  get currently selected image from gallery.
  3.  use list with sel_index and retrieve image name,
  4.  use name to test is image is in the latest C:\...\stable-diffusion-webui\outputs\txt2img-images\####-##-##
  5.  if it is copy the image to the user's download folder.
