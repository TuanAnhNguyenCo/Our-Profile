let slides = document.getElementsByClassName("TuanAnhSlideShows")
for(i = 1;i<slides.length;i++)
        slides[i].style.display = 'none'

var index = 1

function showSlide(n)
{
    if (index>=n) index = 0
    // Nếu là ảnh đàu tiên sẽ ẩn ảnh cuối cùng
    if (index ==0) 
        slides[n-1].style.display = 'none'
    // Nếu không phải ảnh đầu tiên sẽ ẩn ảnh trc đó
    else
        slides[index-1].style.display = 'none'
    // Cho ảnh hiện tai hiển thị
    slides[index].style.display = 'block'
    index+=1
}

setInterval(showSlide, 4000,slides.length);
