const images = document.querySelectorAll(".img")

const options = {
    root: null, // It is the viewport
    thresold: 0.25,
    // rootMargin: "-150px",
};

const observer = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("animate")
            }
        })
},options);

images.forEach(imgages => 
    observer.observe(imgages)
)