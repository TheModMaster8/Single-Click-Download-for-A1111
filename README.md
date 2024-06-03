# Single-Click-Download-for-A1111
a semi-working attempt to add a single click download button to a1111 for currently previewed images in the gallery and lightbox.

the majority of the code is adapeted from the exstension by AlUlkesh, the link is here
https://github.com/AlUlkesh/sd_delete_button?tab=readme-ov-file

my knowlede of programming is very basic, and the lack of documentaion of a1111 is the worst i've ever seen.
my goal is to add a button to the gallery button bar and the lightnbox modal toolbar, this button will "download"/copy the current viewed image to the users downloads folder. 



Current capabilities:

**1. Able to download the currently viewed image in the lightbox (full preview) with no limitation.** _(note that this method uses an automatic download, meaning once you click the DL button it will download automatically without asking/verifing the download. Most browser have a protection against this, so the browser may ask you if you want to allow the website (A1111 client host) to be able to download multiple files. at least this is what happened to me on chrome when i was testing it, the reason for this is most likely because: the JS code adds a clickable button to the menu bar, the button when click, calls a function that finds the html image hyperlink and **on behalf of the user**, **clicks/downloads the image**... basicly the button functions as a 'get & fetch' download link that referenced the currently viewed picture. the reason for the web browser stopping this, is, to my knowledge, to prevent end users & **Website Host** from downloading files to the end user without their consent/knowlage. i'm NOT a secerity expert, but this extension of mine does **NOT** use/imploment/request/send/ect any form of outward connection. it soley uses functionality built into the browser's that runs soley on the end user's device. Please look through the code yourself. there is probably a better way to do this but i know of it not)_
TL:DR: button scrapes the html code for the viewed image's hyperlink, it then clones the link and clicks the download itself.

**2. able to COPY to downloads when ONLY batch size:1, batch count:1.**  _(working to make this work like the lightbox download. this limitation is due to my/the inability to retriecve the current gallery image index from the python side (backend). lightbox uses JS to do it's download)_ 

Planed capabilities:

**1. limitation free, single click download for the gallery output pane.**

**2. ablity to use the upscale image button in the lightbox, currently it does the same function of the download.** 

what i have so far (the blue down arrow is the added button and the upscale button is added to the lightbox) 
![semi functional implemtation](https://github.com/TheModMaster8/Single-Click-Download-for-A1111/assets/10178387/ff79122a-0b29-4fde-baf1-92ff211f1cfa)
![Screenshot 2024-06-02 202704](https://github.com/TheModMaster8/Single-Click-Download-for-A1111/assets/10178387/0edd79b1-f023-4d1f-adb0-5dcd55067218)


