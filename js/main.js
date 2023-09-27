var Images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg']


function randomImages(Images){
    return Images[Math.ceil(Math.random()* Images.length)-1]
}